"use client";

import {
  useMemo,
  useRef,
  useEffect,
  type ComponentProps,
  type CSSProperties,
  type Ref,
} from "react";

import {
  useEntrance,
  type EntranceTrigger,
} from "@/components/ui/wave-text-utils/use-entrance";
import { cn } from "@/lib/utils";

function mergeRefs<T>(...refs: (Ref<T> | ((node: T | null) => void) | undefined)[]) {
  return (node: T | null) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref && typeof ref === "object" && "current" in ref) {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    }
  };
}

// Registering the offset as a number lets CSS animate it smoothly; an
// unregistered custom property would jump from start to end instead.
if (typeof CSS !== "undefined" && "registerProperty" in CSS) {
  try {
    CSS.registerProperty({
      name: "--wave-text-offset",
      syntax: "<number>",
      inherits: false,
      initialValue: "-25",
    });
  } catch {
    // Already registered by another copy of the component.
  }
}

const COLORS = [
  "#d9b06a",
  "#6fb3c2",
  "#e07a5f",
  "#81b29a",
  "#f2cc8f",
  "#8d7fc9",
];

type WaveTextTag =
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

interface WaveTextProps extends Omit<ComponentProps<"p">, "color"> {
  as?: WaveTextTag;
  /** Colours of the bands, in order. */
  colors?: string[];
  /** The colour of the text between waves. Defaults to the text colour. */
  base?: string;
  /** Bands ripple out from below the text (radial) or rise straight up (linear). */
  shape?: "radial" | "linear";
  /** How many bands one wave carries. */
  bands?: number;
  /** Width of each band, in percent of the text box. */
  bandWidth?: number;
  /**
   * Room below the text where the ripples start, in percent of the
   * container's width (padding percentages follow the width). Radial only.
   */
  depth?: number;
  /** Seconds for one wave to pass. */
  duration?: number;
  /** Keep sending waves, instead of one. */
  repeat?: boolean;
  /** Wait before the first wave, in ms. */
  delay?: number;
  /** "load" plays on first paint with CSS alone; "in-view" when the text scrolls into view. */
  trigger?: EntranceTrigger;
  /** In-view: play the first time only. */
  once?: boolean;
  /** Takes over from `trigger`: `false` holds the wave back, `true` sends it. */
  play?: boolean;
}

/**
 * Bands of colour that wash through text like a swell, rippling out from
 * below it or rising straight up. It is a gradient clipped to the text,
 * moved by one CSS animation of a registered custom property: no canvas,
 * no per-frame JavaScript. The text rests in its own colour, repeating
 * waves pause off screen, and with `prefers-reduced-motion` it stays still.
 *
 * @example
 * <WaveText as="h2" className="text-6xl font-semibold" repeat>
 *   High tide
 * </WaveText>
 */
function WaveText({
  as: Tag = "span",
  colors = COLORS,
  base = "#ffffff",
  shape = "radial",
  bands = 8,
  bandWidth = 4,
  depth = 20,
  duration = 3.75,
  repeat = true,
  delay = 0,
  trigger = "load",
  once = true,
  play,
  className,
  style,
  ref,
  children,
  ...props
}: WaveTextProps) {
  const nodeRef = useRef<HTMLElement | null>(null);
  const [observe, phase, inView] = useEntrance<HTMLElement>({
    trigger,
    once,
    play,
  });

  const mergedRef = useMemo(
    () =>
      mergeRefs(ref, observe, (node: HTMLElement | null) => {
        nodeRef.current = node;
      }),
    [ref, observe]
  );

  const gradient = useMemo(() => {
    const palette = colors.length > 0 ? colors : COLORS;
    const at = (offset: number) =>
      `calc((var(--wave-text-offset) + ${offset}) * 1%)`;
    const stops = [`${base} ${at(0)}`];
    for (let band = 0; band < bands; band++) {
      stops.push(
        `${palette[band % palette.length]} ${at((band + 2) * bandWidth)}`,
      );
    }
    stops.push(`${base} ${at((bands + 2) * bandWidth)}`);
    return shape === "radial"
      ? `radial-gradient(circle at 50% 100%, ${stops.join(", ")})`
      : `linear-gradient(0deg, ${stops.join(", ")})`;
  }, [colors, base, bands, bandWidth, shape]);

  const moving = phase !== "static";
  const lift = shape === "radial" ? depth : 0;

  // Active animation loop via requestAnimationFrame to guarantee smooth cross-browser execution
  useEffect(() => {
    if (!moving) return;
    const node = nodeRef.current;
    if (!node) return;

    let animId: number;
    let startTime: number | null = null;
    const totalDuration = (duration || 3.75) * 1000;
    const startVal = -45;
    const endVal = 135;

    let delayTimer: any = null;

    const startAnimation = () => {
      const step = (now: number) => {
        if (startTime === null) startTime = now;
        const elapsed = now - startTime;

        if (!repeat && elapsed >= totalDuration) {
          node.style.setProperty("--wave-text-offset", endVal.toString());
          return;
        }

        const progress = (elapsed % totalDuration) / totalDuration;
        const currentVal = startVal + (endVal - startVal) * progress;
        node.style.setProperty("--wave-text-offset", currentVal.toFixed(2));

        animId = requestAnimationFrame(step);
      };

      animId = requestAnimationFrame(step);
    };

    if (delay > 0) {
      delayTimer = setTimeout(startAnimation, delay);
    } else {
      startAnimation();
    }

    return () => {
      if (delayTimer) clearTimeout(delayTimer);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [moving, duration, repeat, delay]);

  return (
    <Tag
      ref={mergedRef as Ref<never>}
      data-slot="wave-text"
      data-state={phase}
      className={cn(
        "inline-block bg-clip-text text-transparent [-webkit-text-fill-color:transparent] animate-wave-text motion-safe:animate-wave-text",
        className,
      )}
      style={
        {
          "--wave-text-offset": -25,
          backgroundImage: gradient,
          // Extra room below the text puts the ripples' centre under the baseline.
          paddingBottom: lift ? `${lift}%` : undefined,
          marginBottom: lift ? `-${lift}%` : undefined,
          ...(moving
            ? {
                animationDuration: `${duration}s`,
                animationDelay: `${delay}ms`,
                animationIterationCount: repeat ? "infinite" : 1,
                animationPlayState:
                  phase === "armed" || (repeat && !inView)
                    ? "paused"
                    : undefined,
              }
            : null),
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </Tag>
  );
}

export { WaveText, type WaveTextProps };
export default WaveText;

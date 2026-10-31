import { useState, useEffect, useRef, useCallback } from "react";

export type EntranceTrigger = "load" | "in-view";

export interface UseEntranceOptions {
  trigger?: EntranceTrigger;
  once?: boolean;
  play?: boolean;
}

export type EntrancePhase = "armed" | "active" | "static";

export function useEntrance<T extends HTMLElement = HTMLElement>({
  trigger = "load",
  once = true,
  play,
}: UseEntranceOptions = {}): [(node: T | null) => void, EntrancePhase, boolean] {
  const [inView, setInView] = useState(trigger === "load");
  const [phase, setPhase] = useState<EntrancePhase>(() => {
    if (play === false) return "armed";
    if (play === true) return "active";
    return trigger === "load" ? "active" : "armed";
  });

  const nodeRef = useRef<T | null>(null);

  const observe = useCallback(
    (node: T | null) => {
      nodeRef.current = node;
    },
    []
  );

  useEffect(() => {
    if (play !== undefined) {
      setPhase(play ? "active" : "armed");
      if (play) setInView(true);
      return;
    }

    if (trigger === "load") {
      setPhase("active");
      setInView(true);
      return;
    }

    if (!nodeRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setPhase("active");
          if (once) {
            observer.disconnect();
          }
        } else {
          if (!once) {
            setInView(false);
            setPhase("armed");
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [trigger, once, play]);

  return [observe, phase, inView];
}


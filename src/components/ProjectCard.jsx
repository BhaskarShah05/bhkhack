import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * ProjectCard — combines a pointer-tracked glow border (GlowCard) with
 * a 3D-tilt effect (InteractiveTravelCard) for the Projects page.
 *
 * Props:
 *  - name        {string}   Project title
 *  - description {string}   Short description shown in the footer
 *  - technologies {string[]} Badge list
 *  - image       {string}   Background image URL
 *  - url         {string}   Link target for the ArrowUpRight button
 *  - className   {string?}  Extra class names
 */

const glowColorMap = {
  blue:   { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green:  { base: 120, spread: 200 },
  red:    { base: 0,   spread: 200 },
  orange: { base: 30,  spread: 200 },
};

const beforeAfterCSS = `
  [data-glow-card]::before,
  [data-glow-card]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc(var(--radius) * 1px);
    background-attachment: fixed;
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }

  [data-glow-card]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)),
      transparent 100%
    );
    filter: brightness(2);
  }

  [data-glow-card]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 1)),
      transparent 100%
    );
  }

  [data-glow-card] [data-glow-inner] {
    position: absolute;
    inset: 0;
    will-change: filter;
    opacity: var(--outer, 1);
    border-radius: calc(var(--radius) * 1px);
    border-width: calc(var(--border-size) * 20);
    filter: blur(calc(var(--border-size) * 10));
    background: none;
    pointer-events: none;
    border: none;
  }

  [data-glow-card] > [data-glow-inner]::before {
    inset: -10px;
    border-width: 10px;
  }
`;

export function ProjectCard({
  name,
  description,
  technologies = [],
  image,
  url = "https://github.com/ncs-jss",
  glowColor = "blue",
  className = "",
}) {
  // ── Glow pointer tracking ──────────────────────────────────────────────
  const cardRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const syncPointer = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cardRef.current) {
        cardRef.current.style.setProperty("--x", x.toFixed(2));
        cardRef.current.style.setProperty("--xp", (x / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty("--y", y.toFixed(2));
        cardRef.current.style.setProperty("--yp", (y / window.innerHeight).toFixed(2));
      }
    };
    document.addEventListener("pointermove", syncPointer);
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor] ?? glowColorMap.blue;

  // ── 3-D tilt animation ─────────────────────────────────────────────────
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spring = { damping: 15, stiffness: 150 };
  const springX = useSpring(mouseX, spring);
  const springY = useSpring(mouseY, spring);
  const rotateX = useTransform(springY, [-0.5, 0.5], ["10.5deg", "-10.5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10.5deg", "10.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // ── Glow card inline styles ────────────────────────────────────────────
  const glowStyles = {
    "--base": base,
    "--spread": spread,
    "--radius": "20",
    "--border": "2",
    "--backdrop": "hsl(0 0% 60% / 0.08)",
    "--backup-border": "var(--backdrop)",
    "--size": "220",
    "--outer": "1",
    "--border-size": "calc(var(--border, 2) * 1px)",
    "--spotlight-size": "calc(var(--size, 150) * 1px)",
    "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.08)),
      transparent
    )`,
    backgroundColor: "var(--backdrop, transparent)",
    backgroundSize: "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
    backgroundPosition: "50% 50%",
    backgroundAttachment: "fixed",
    border: "var(--border-size) solid var(--backup-border)",
    position: "relative",
    touchAction: "none",
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterCSS }} />

      {/* Outer glow wrapper */}
      <div
        ref={cardRef}
        data-glow-card
        style={glowStyles}
        className={`rounded-[20px] shadow-[0_1rem_2rem_-1rem_black] backdrop-blur-[5px] ${className}`}
      >
        <div ref={innerRef} data-glow-inner />

        {/* 3-D tilt motion wrapper */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative h-[455px] w-[335px] rounded-[20px] overflow-hidden"
        >
          {/* Lifted inner layer */}
          <div
            style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
            className="absolute inset-3 rounded-[14px] overflow-hidden"
          >
            {/* Background image */}
            <img
              src={image}
              alt={name}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Gradient overlay — dark at top & bottom for legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70 rounded-[14px]" />

            {/* Card content */}
            <div
              style={{ transformStyle: "preserve-3d" }}
              className="relative h-full flex flex-col justify-between p-4 text-white"
            >
              {/* ── Header ── */}
              <div className="flex items-start justify-between">
                <div>
                  <motion.h2
                    style={{ transform: "translateZ(50px)" }}
                    className="text-2xl font-bold leading-tight tracking-tight drop-shadow"
                  >
                    {name}
                  </motion.h2>

                  {/* Tech badges */}
                  <motion.div
                    style={{ transform: "translateZ(40px)" }}
                    className="flex flex-wrap gap-1 mt-1.5"
                  >
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] font-medium text-white/90 ring-1 ring-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* External link button */}
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: "2.5deg" }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`View ${name} project`}
                  style={{ transform: "translateZ(60px)" }}
                  onClick={(e) => e.stopPropagation()}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-inset ring-white/30 transition-colors hover:bg-white/25"
                >
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </motion.a>
              </div>

              {/* ── Footer: description + CTA ── */}
              <div className="flex flex-col gap-3">
                <motion.p
                  style={{ transform: "translateZ(30px)" }}
                  className="text-sm leading-snug text-white/80 line-clamp-3"
                >
                  {description}
                </motion.p>

                <motion.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={(e) => e.stopPropagation()}
                  style={{ transform: "translateZ(40px)" }}
                  className="w-full rounded-lg py-2.5 text-center text-sm font-semibold text-white bg-white/10 backdrop-blur-md ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-colors"
                >
                  View Project
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}


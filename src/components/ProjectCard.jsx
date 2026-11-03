import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * ProjectCard — combines the 3D-tilt physics from InteractiveTravelCard
 * with the visual card design from the Projects showcase.
 *
 * Props:
 *  - name         {string}   Project title
 *  - description  {string}   Short description shown in the footer
 *  - technologies {string[]} Badge list
 *  - image        {string}   Artwork illustration image URL
 *  - url          {string}   Link target for action button & arrow link
 *  - className    {string?}  Extra class names
 */
export const ProjectCard = React.forwardRef(
  (
    {
      name,
      description,
      technologies = [],
      image,
      url = "https://github.com/ncs-jss",
      className = "",
    },
    ref
  ) => {
    // --- 3D Tilt Animation Logic ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(springY, [-0.5, 0.5], ["10.5deg", "-10.5deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-10.5deg", "10.5deg"]);

    // Dynamic glare spotlight positions
    const glareX = useTransform(springX, [-0.5, 0.5], ["10%", "90%"]);
    const glareY = useTransform(springY, [-0.5, 0.5], ["10%", "90%"]);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const { width, height, left, top } = rect;
      const mouseXVal = e.clientX - left;
      const mouseYVal = e.clientY - top;
      const xPct = mouseXVal / width - 0.5;
      const yPct = mouseYVal / height - 0.5;
      mouseX.set(xPct);
      mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    return (
      <div
        style={{ perspective: "1000px" }}
        className="w-full flex justify-center py-2"
      >
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className={cn(
            "group relative h-[480px] w-[335px] max-w-full rounded-[26px] bg-[#0c0d12]/90 shadow-[0_22px_55px_rgba(0,0,0,0.85)] border border-white/[0.14] hover:border-white/[0.34] overflow-hidden backdrop-blur-2xl p-5 flex flex-col justify-between text-white select-none transition-colors duration-300",
            className
          )}
        >
          {/* Subtle cursor-following radial sheen / ambient spotlight */}
          <motion.div
            style={{
              left: glareX,
              top: glareY,
              transform: "translate(-50%, -50%)",
            }}
            className="pointer-events-none absolute w-[320px] h-[320px] rounded-full bg-white/[0.07] blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          />

          {/* Background subtle mesh grid pattern */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/60 rounded-[26px]" />

          {/* ── 3D Card Content Layered in Depth ── */}
          <div
            style={{
              transform: "translateZ(30px)",
              transformStyle: "preserve-3d",
            }}
            className="relative flex flex-col justify-between h-full w-full"
          >
            {/* Header: Title + Tech Pills + ArrowUpRight Link */}
            <div
              style={{ transform: "translateZ(45px)", transformStyle: "preserve-3d" }}
              className="flex items-start justify-between w-full"
            >
              <div className="flex flex-col text-left pr-2">
                <motion.h3
                  style={{ transform: "translateZ(30px)" }}
                  className="text-[21px] sm:text-[22px] font-bold text-white tracking-tight leading-tight drop-shadow-sm font-['Satoshi',Arial,sans-serif]"
                >
                  {name}
                </motion.h3>

                <motion.div
                  style={{ transform: "translateZ(20px)" }}
                  className="flex flex-wrap gap-1.5 mt-2"
                >
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-full text-[10px] font-medium text-white/85 bg-white/10 border border-white/15 backdrop-blur-md shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>

              <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.14, rotate: "5deg" }}
                whileTap={{ scale: 0.92 }}
                aria-label={`View ${name} project`}
                style={{ transform: "translateZ(55px)" }}
                onClick={(e) => e.stopPropagation()}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white transition-colors hover:bg-white/30 shadow-md cursor-pointer"
              >
                <ArrowUpRight className="h-4.5 w-4.5 text-white" />
              </motion.a>
            </div>

            {/* Center Artwork */}
            <div
              style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
              className="relative my-auto py-2 w-full flex items-center justify-center overflow-hidden"
            >
              <motion.img
                src={image}
                alt={name}
                loading="lazy"
                decoding="async"
                style={{ transform: "translateZ(20px)" }}
                className="max-h-[175px] w-auto max-w-[85%] object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)] select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Footer: Description + "View Project" Button */}
            <div
              style={{ transform: "translateZ(35px)", transformStyle: "preserve-3d" }}
              className="flex flex-col gap-3 w-full"
            >
              <motion.p
                style={{ transform: "translateZ(15px)" }}
                className="text-[12.5px] leading-relaxed text-white/75 line-clamp-3 text-left font-normal font-['Satoshi',Arial,sans-serif]"
              >
                {description}
              </motion.p>

              <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={(e) => e.stopPropagation()}
                style={{ transform: "translateZ(25px)" }}
                className="w-full py-2.5 rounded-[12px] text-center text-[13px] font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200 shadow-md block cursor-pointer select-none"
              >
                View Project
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

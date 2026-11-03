"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Marquee } from "@/demos/ui/marquee"
import { publicAsset } from "../../lib/publicAsset"

gsap.registerPlugin(ScrollTrigger)

// Compatibility image component replacing next/image in Vite/React
function Image({ src, alt, fill, className = "", ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${fill ? "absolute inset-0 h-full w-full" : ""} ${className}`}
      loading="lazy"
      decoding="async"
      {...props}
    />
  )
}

const teamMembers = [
  {
    image: publicAsset("assets/achievments/Ajinkya Mishra.webp"),
    name: "Ajinkya Mishra",
    role: "Cleared the ICPC World Finals",
  },
  {
    image: publicAsset("assets/achievments/Om Tripathi.webp"),
    name: "Om Tripathi",
    role: "Cleared the ICPC World Finals",
  },
  {
    image: publicAsset("assets/achievments/Athrva Gupta.webp"),
    name: "Atharva Gupta",
    role: "Smart India Hackathon (SIH) 2025 Winner",
  },
  {
    image: publicAsset("assets/achievments/Lakshay Dubey.webp"),
    name: "Lakshya Dubey",
    role: "Smart India Hackathon (SIH) 2025 Winner",
  },
  {
    image: publicAsset("assets/achievments/Ayush Vashisth.webp"),
    name: "Ayush Vashisth",
    role: "Smart India Hackathon (SIH) 2025 Winner",
  },
  {
    image: publicAsset("assets/achievments/Kuldeep Chaudhary.webp"),
    name: "Kuldeep Chaudhary",
    role: "4-Time Hackathon Winner",
  },
  {
    image: publicAsset("assets/achievments/Mohit Singh.webp"),
    name: "Mohit Singh",
    role: "Android Developer at Blinkit",
  },
  {
    image: publicAsset("assets/achievments/Sankalp Saxena.webp"),
    name: "Sankalp Saxena",
    role: "Android Developer at Groww",
  },
]

export default function TeamMembersMarquee() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ScrollTrigger entrance for the big "Achievements" headline
      gsap.fromTo(
        ".achieve-heading",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="dark w-full">
      <section className="relative w-full overflow-hidden bg-transparent pt-16 sm:pt-24 md:pt-32 pb-16 md:pb-28 dark:bg-transparent">
        {/* Background decorative corner vector */}
        <div>
          <svg
            className="absolute right-0 bottom-0 text-neutral-200 dark:text-neutral-800/30 pointer-events-none"
            fill="none"
            height="154"
            viewBox="0 0 460 154"
            width="460"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_494_1104)">
              <path
                d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="40"
              />
            </g>
            <defs>
              <clipPath id="clip0_494_1104">
                <rect fill="white" height="154" width="460" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* =========================================================================
            BIG "ACHIEVEMENTS" HEADLINE
        ========================================================================= */}
        <div className="relative z-0 w-full max-w-[1650px] mx-auto px-6 sm:px-10 lg:px-16 -mb-2 sm:-mb-3 md:-mb-5 lg:-mb-6 select-none">
          <div className="achieve-heading flex items-baseline gap-3 sm:gap-5 flex-wrap">
            <h2
              className="font-['Playfair_Display',Georgia,serif] text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[130px] xl:text-[158px] text-[#faf8f0] font-normal leading-[0.9] tracking-tight drop-shadow-[0_12px_32px_rgba(0,0,0,0.85)] inline-block select-none"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Achievements
            </h2>
          </div>
        </div>

        {/* =========================================================================
            PHOTO MARQUEE CAROUSEL — extra top padding creates space after the heading
        ========================================================================= */}
        <div className="relative z-10 w-full pt-10 sm:pt-14 md:pt-16">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 sm:w-36 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 sm:w-36 bg-gradient-to-l from-black via-black/80 to-transparent" />

          <Marquee className="[--gap:1.5rem]" repeat={2}>
            {teamMembers.map((member) => (
              <div
                className="group/card flex w-64 shrink-0 flex-col select-none will-change-transform"
                key={member.name}
              >
                <div className="relative h-92 w-full overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 shadow-lg">
                  <Image
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-[filter,transform] duration-300 ease-out group-hover/card:grayscale-0 group-hover/card:scale-105"
                    fill
                    src={member.image}
                  />
                  <div className="absolute bottom-0 w-full min-h-[68px] flex flex-col justify-center rounded-b-2xl bg-neutral-950/90 px-3.5 py-2.5 border-t border-white/10">
                    <h3 className="font-bold text-neutral-100 text-sm tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-amber-400/90 text-xs mt-0.5 font-medium leading-snug">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  )
}

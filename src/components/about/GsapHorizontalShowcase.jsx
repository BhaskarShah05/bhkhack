import React, { useEffect, useRef, useState, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { publicAsset } from "../../lib/publicAsset"

gsap.registerPlugin(ScrollTrigger)

const imgNcsLogo = publicAsset("assets/ncs-logo-white.svg")
const imgWorkshopSession = publicAsset("assets/about-learning-session.webp")
const imgLabCoding = publicAsset("assets/highlights/web/IMG_1634.webp")
const imgHackathonOrganizers = publicAsset("assets/highlights/web/IMG_3012.webp")
const imgCommunityFamily = publicAsset("assets/about-community-family.webp")

/**
 * ============================================================================
 * BESPOKE UNIQUE GSAP DOODLES (NO REPETITION, NO CIRCLES ON 'O')
 * ============================================================================
 */

/**
 * Doodle A: Peach 8-Point Starburst with Purple Swirl Trail (Point 1)
 */
function PeachStarburstTrail({ className = "w-24 h-28", onClick }) {
  return (
    <span
      onClick={onClick}
      className="inline-block cursor-pointer select-none transition-transform hover:scale-125"
      title="Click starburst!"
    >
      <svg className={className} viewBox="0 0 140 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="starGradA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffedd5" />
            <stop offset="60%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="swirlGradA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>
        <path
          d="M 68 85 C 45 105, 30 135, 52 148 C 72 158, 88 135, 78 115 C 72 102, 60 98, 55 90"
          stroke="url(#swirlGradA)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <g transform="translate(70, 50)">
          <path
            d="M 0 -36 L 8 -12 L 30 -16 L 16 0 L 30 16 L 8 12 L 0 36 L -8 12 L -30 16 L -16 0 L -30 -16 L -8 -12 Z"
            fill="url(#starGradA)"
          />
          <circle cx="0" cy="0" r="5" fill="#ffffff" />
        </g>
        <circle cx="28" cy="65" r="4.5" fill="#fb923c" />
        <circle cx="112" cy="30" r="3" fill="#38bdf8" />
      </svg>
    </span>
  )
}

/**
 * Doodle B: Orange Diamond Star (crowns letter 'i' in Point 1)
 */
function OrangeDiamond({ className = "w-4 h-5 sm:w-5 sm:h-6", onClick }) {
  return (
    <span
      onClick={onClick}
      className="inline-flex items-center justify-center align-baseline cursor-pointer mx-0.5 select-none transition-transform hover:scale-150"
      title="Click diamond!"
    >
      <svg className={className} viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="20,2 38,25 20,48 2,25" fill="#f97316" />
        <polygon points="20,8 32,25 20,42 8,25" fill="#fed7aa" opacity="0.6" />
      </svg>
    </span>
  )
}

/**
 * Doodle C: Electric Green Lightning Bolt (replaces 't' in Point 2)
 */
function GreenLightningBolt({ className = "w-6 h-10 sm:w-8 sm:h-14", onClick }) {
  return (
    <span
      onClick={onClick}
      className="inline-flex items-center justify-center align-baseline cursor-pointer mx-0.5 select-none transition-transform hover:scale-125"
      title="Click lightning!"
    >
      <svg className={className} viewBox="0 0 50 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="greenLightningFilter" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#0ae448" floodOpacity="0.9" />
          </filter>
        </defs>
        <path
          d="M32 2 L4 42 L24 42 L14 78 L46 34 L27 34 Z"
          fill="#0ae448"
          filter="url(#greenLightningFilter)"
        />
      </svg>
    </span>
  )
}

/**
 * Doodle D: Violet 3D Hourglass / Diabolo (Point 2)
 */
function VioletHourglass({ className = "w-12 h-14 sm:w-16 sm:h-20", onClick }) {
  return (
    <span
      onClick={onClick}
      className="inline-block cursor-pointer select-none transition-transform hover:scale-125"
      title="Click hourglass!"
    >
      <svg className={className} viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hourglassGradD" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e9d5ff" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
          <filter id="hourglassShadowD" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#c084fc" floodOpacity="0.4" />
          </filter>
        </defs>
        <g filter="url(#hourglassShadowD)">
          <polygon points="10,12 70,12 40,50" fill="url(#hourglassGradD)" />
          <polygon points="40,50 70,88 10,88" fill="url(#hourglassGradD)" opacity="0.9" />
          <circle cx="40" cy="50" r="4" fill="#ffffff" opacity="0.8" />
        </g>
      </svg>
    </span>
  )
}

/**
 * Doodle E: 3D Coiled Spring Ribbon (Point 3)
 */
function SpringCoilRibbon({ className = "w-14 h-20 sm:w-20 sm:h-28", onClick }) {
  return (
    <span
      onClick={onClick}
      className="inline-block cursor-pointer select-none transition-transform hover:scale-115"
      title="Click spring!"
    >
      <svg className={className} viewBox="0 0 110 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="springGradE" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="35%" stopColor="#c084fc" />
            <stop offset="70%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#fb7185" />
          </linearGradient>
          <filter id="springShadowE" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#9333ea" floodOpacity="0.5" />
          </filter>
        </defs>
        <g filter="url(#springShadowE)">
          <path
            d="M 28 16
               C 50 5, 88 18, 82 45
               C 76 72, 22 62, 28 90
               C 34 118, 92 108, 82 134"
            stroke="url(#springGradE)"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 31 18
               C 50 8, 83 20, 78 42
               C 73 66, 25 58, 30 84
               C 35 110, 88 102, 78 128"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
          />
        </g>
      </svg>
    </span>
  )
}

/**
 * Doodle F: Isometric Code Cube (Point 3)
 */
function IsometricCodeCube({ className = "w-8 h-8 sm:w-11 sm:h-11", onClick }) {
  return (
    <span
      onClick={onClick}
      className="inline-flex items-center justify-center align-baseline cursor-pointer mx-1 select-none transition-transform hover:scale-130"
      title="Click code cube!"
    >
      <svg className={className} viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>
        <polygon points="40,5 75,25 40,45 5,25" fill="url(#cubeTop)" />
        <polygon points="5,25 40,45 40,85 5,65" fill="url(#cubeLeft)" />
        <polygon points="40,45 75,25 75,65 40,85" fill="url(#cubeRight)" />
      </svg>
    </span>
  )
}

/**
 * Doodle G: Developer Cursor Pointer Arrow with Cyan/Green Trail (Point 3)
 */
function CursorArrowDoodle({ className = "w-6 h-7 sm:w-8 sm:h-9", onClick }) {
  return (
    <span
      onClick={onClick}
      className="inline-flex items-center justify-center align-baseline cursor-pointer mx-0.5 select-none transition-transform hover:scale-140"
      title="Click cursor!"
    >
      <svg className={className} viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 6 4 L 52 26 L 30 34 L 46 64 L 34 70 L 18 40 L 6 52 Z"
          fill="#38bdf8"
          stroke="#000000"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <circle cx="52" cy="26" r="3" fill="#0ae448" />
      </svg>
    </span>
  )
}

/**
 * Doodle H: 4-Petal Warm Gradient Propeller Flower (Point 4)
 */
function PinkPropellerFlower({ className = "w-10 h-10 sm:w-14 sm:h-14", onClick }) {
  return (
    <span
      onClick={onClick}
      className="inline-block cursor-pointer select-none transition-transform hover:scale-125"
      title="Click flower!"
    >
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flowerGradH" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbcfe8" />
            <stop offset="50%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
          <filter id="flowerGlowH" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#f472b6" floodOpacity="0.5" />
          </filter>
        </defs>
        <g filter="url(#flowerGlowH)">
          <path d="M50 50 C40 30 30 12 50 3 C70 12 60 30 50 50 Z" fill="url(#flowerGradH)" />
          <path d="M50 50 C70 40 88 30 97 50 C88 70 70 60 50 50 Z" fill="url(#flowerGradH)" />
          <path d="M50 50 C60 70 70 88 50 97 C30 88 40 70 50 50 Z" fill="url(#flowerGradH)" />
          <path d="M50 50 C30 60 12 70 3 50 C12 30 30 40 50 50 Z" fill="url(#flowerGradH)" />
          <circle cx="50" cy="50" r="8" fill="#f472b6" />
        </g>
      </svg>
    </span>
  )
}

/**
 * Doodle I: Golden Star Particle (Point 4)
 */
function GoldStarParticle({ className = "w-5 h-5 sm:w-6 sm:h-6", onClick }) {
  return (
    <span
      onClick={onClick}
      className="inline-flex items-center justify-center align-baseline cursor-pointer mx-0.5 select-none transition-transform hover:scale-150"
      title="Click star!"
    >
      <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="25,2 32,18 48,18 36,28 40,46 25,35 10,46 14,28 2,18 18,18" fill="#facc15" />
      </svg>
    </span>
  )
}

const ACCENT_COLORS = [
  "#fb923c", // Point 1: Warm peach/amber
  "#0ae448", // Point 2: GSAP electric neon green
  "#38bdf8", // Point 3: Sky blue / cyan
  "#34d399", // Point 4: Emerald / mint
]

/**
 * Interactive Jumping & Animated Text
 * Breaks text into individual characters while keeping words grouped with proper whitespace.
 * Provides bespoke entrance & hover animation tailored to each paragraph's theme:
 * - Slide 0 (The Spark): Kinetic Trampoline Jump Wave (Amber/Peach)
 * - Slide 1 (The Discipline): Electric Lightning Glitch & Staccato Snap (Neon Green)
 * - Slide 2 (The Craft): 3D Isometric Code-Block Flip & Drop (Sky Cyan)
 * - Slide 3 (The Destination): Organic Bloom, Float & Swell (Emerald & Pink)
 */
function JumpingText({ text, slideIdx, className = "" }) {
  const words = text.split(" ")

  const handleCharHover = (e) => {
    const el = e.currentTarget
    gsap.killTweensOf(el)

    // Slide 0: Trampoline Squash & Hop (Warm Peach)
    if (slideIdx === 0) {
      gsap
        .timeline()
        .to(el, { scaleY: 0.6, scaleX: 1.35, duration: 0.07, ease: "power1.out" })
        .to(el, {
          y: -22,
          scaleY: 1.25,
          scaleX: 0.85,
          color: "#fb923c",
          textShadow: "0 0 14px #fb923c",
          duration: 0.2,
          ease: "power2.out",
        })
        .to(el, { y: 0, scaleY: 0.75, scaleX: 1.2, duration: 0.14, ease: "power2.in" })
        .to(el, {
          scaleY: 1,
          scaleX: 1,
          color: "#faf8f0",
          textShadow: "none",
          duration: 0.45,
          ease: "elastic.out(1.5, 0.3)",
        })
      return
    }

    // Slide 1: Electric Glitch Snap (Neon Green)
    if (slideIdx === 1) {
      gsap
        .timeline()
        .to(el, {
          skewX: 20,
          x: 4,
          color: "#0ae448",
          textShadow: "0 0 18px #0ae448",
          duration: 0.06,
        })
        .to(el, {
          skewX: -15,
          x: -4,
          scaleY: 1.2,
          scaleX: 0.9,
          color: "#ffffff",
          textShadow: "0 0 25px #0ae448",
          duration: 0.1,
        })
        .to(el, {
          skewX: 0,
          x: 0,
          scaleY: 1,
          scaleX: 1,
          color: "#faf8f0",
          textShadow: "none",
          duration: 0.35,
          ease: "power3.out",
        })
      return
    }

    // Slide 2: 3D Perspective Flip (Sky Cyan)
    if (slideIdx === 2) {
      gsap.set(el, { transformPerspective: 600, transformStyle: "preserve-3d" })
      gsap
        .timeline()
        .to(el, {
          rotateX: -60,
          y: -12,
          color: "#38bdf8",
          textShadow: "0 0 16px #38bdf8",
          duration: 0.18,
          ease: "power2.out",
        })
        .to(el, { rotateX: 15, y: 2, duration: 0.14, ease: "sine.inOut" })
        .to(el, {
          rotateX: 0,
          y: 0,
          color: "#faf8f0",
          textShadow: "none",
          duration: 0.35,
          ease: "elastic.out(1.3, 0.4)",
        })
      return
    }

    // Slide 3: Blooming Float & Swell (Emerald & Pink)
    if (slideIdx === 3) {
      gsap
        .timeline()
        .to(el, { scale: 0.7, y: 6, color: "#34d399", duration: 0.08, ease: "power1.in" })
        .to(el, {
          scale: 1.35,
          y: -14,
          color: "#f472b6",
          textShadow: "0 0 20px #f472b6",
          duration: 0.25,
          ease: "back.out(2.2)",
        })
        .to(el, {
          scale: 1,
          y: 0,
          color: "#faf8f0",
          textShadow: "none",
          duration: 0.4,
          ease: "power2.out",
        })
      return
    }
  }

  return (
    <span className={`inline mr-[0.28em] ${className}`}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.24em]">
          {word.split("").map((char, cIdx) => (
            <span
              key={cIdx}
              className={`jump-char-${slideIdx} inline-block select-none cursor-pointer`}
              style={{
                willChange: "transform, color",
                transformOrigin: "bottom center",
                display: "inline-block",
              }}
              onMouseEnter={handleCharHover}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  )
}

export default function GsapHorizontalShowcase() {
  const outerRef = useRef(null)
  const stickyRef = useRef(null)
  const trackRef = useRef(null)
  const progressBarRef = useRef(null)
  const slideRefs = useRef([])
  const hasAnimatedRef = useRef([false, false, false, false])

  // Triggers the unique bespoke entrance animation for each of the 4 slides
  const triggerSlideAnimation = useCallback((slideIndex) => {
    const chars = document.querySelectorAll(`.jump-char-${slideIndex}`)
    if (!chars || chars.length === 0) return

    gsap.killTweensOf(chars)

    // =========================================================================
    // SLIDE 0: The Spark — Kinetic Trampoline Jump Wave (Amber/Peach)
    // =========================================================================
    if (slideIndex === 0) {
      // Gentle bounce on starburst doodle
      gsap.fromTo(
        ".anim-starburst",
        { scale: 0.85, rotate: "+=45" },
        { scale: 1, rotate: "+=90", duration: 0.8, ease: "elastic.out(1.4, 0.3)" }
      )

      // Fade & float in background photo card
      gsap.fromTo(
        ".anim-point1-img",
        { opacity: 0.45, scale: 0.94, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: "power2.out" }
      )

      const tl = gsap.timeline()
      tl.to(chars, {
        scaleY: 0.6,
        scaleX: 1.32,
        duration: 0.08,
        ease: "power1.out",
        stagger: { each: 0.035, from: "start" },
      })
        .to(
          chars,
          {
            y: -28,
            scaleY: 1.3,
            scaleX: 0.82,
            color: "#fb923c",
            textShadow: "0 0 18px rgba(251, 146, 60, 0.85)",
            duration: 0.24,
            ease: "power2.out",
            stagger: { each: 0.035, from: "start" },
          },
          "-=0.04"
        )
        .to(
          chars,
          {
            y: 0,
            scaleY: 0.74,
            scaleX: 1.24,
            duration: 0.16,
            ease: "power2.in",
            stagger: { each: 0.035, from: "start" },
          },
          "-=0.08"
        )
        .to(
          chars,
          {
            y: 0,
            scaleY: 1,
            scaleX: 1,
            color: "#faf8f0",
            textShadow: "none",
            duration: 0.55,
            ease: "elastic.out(1.5, 0.35)",
            stagger: { each: 0.035, from: "start" },
          },
          "-=0.1"
        )
      return
    }

    // =========================================================================
    // SLIDE 1: The Discipline — Electric Lightning Glitch & Surge (Neon Green)
    // =========================================================================
    if (slideIndex === 1) {
      // Fade & float in background photo card 2
      gsap.fromTo(
        ".anim-point2-img",
        { opacity: 0.45, scale: 0.94, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: "power2.out" }
      )

      // Intense lightning flash on lightning doodle
      gsap.fromTo(
        ".anim-lightning",
        { scale: 1.6, filter: "drop-shadow(0 0 35px #0ae448)" },
        { scale: 1, filter: "drop-shadow(0 0 6px #0ae448)", duration: 0.8, ease: "elastic.out(1.5, 0.3)" }
      )

      const tl = gsap.timeline()
      tl.to(chars, {
        skewX: (i) => (i % 2 === 0 ? -22 : 22),
        x: (i) => (i % 2 === 0 ? -8 : 8),
        color: "#0ae448",
        textShadow: "0 0 22px #0ae448",
        duration: 0.07,
        ease: "steps(2)",
        stagger: { each: 0.022, from: "start" },
      })
        .to(
          chars,
          {
            skewX: (i) => (i % 2 === 0 ? 12 : -12),
            x: (i) => (i % 2 === 0 ? 4 : -4),
            scaleY: 1.25,
            scaleX: 0.9,
            color: "#ffffff",
            textShadow: "0 0 30px #0ae448, 0 0 50px #0ae448",
            duration: 0.12,
            ease: "power3.out",
            stagger: { each: 0.022, from: "start" },
          },
          "-=0.04"
        )
        .to(
          chars,
          {
            skewX: 0,
            x: 0,
            scaleY: 1,
            scaleX: 1,
            color: "#faf8f0",
            textShadow: "none",
            duration: 0.45,
            ease: "power3.out",
            stagger: { each: 0.022, from: "start" },
          },
          "-=0.06"
        )
      return
    }

    // =========================================================================
    // SLIDE 2: The Craft — 3D Isometric Code-Block Flip & Drop (Sky Cyan)
    // =========================================================================
    if (slideIndex === 2) {
      // Fade & float in background photo card 3
      gsap.fromTo(
        ".anim-point3-img",
        { opacity: 0.45, scale: 0.94, y: 22 },
        { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: "power2.out" }
      )

      // Tumble isometric code cube doodle
      gsap.fromTo(
        ".anim-cube",
        { rotate: -45, scale: 1.35 },
        { rotate: 0, scale: 1, duration: 0.9, ease: "elastic.out(1.4, 0.3)" }
      )

      const tl = gsap.timeline()
      tl.set(chars, { transformPerspective: 800, transformStyle: "preserve-3d" })
        .fromTo(
          chars,
          {
            rotateX: -85,
            y: -24,
            z: -40,
            opacity: 0.25,
            color: "#38bdf8",
          },
          {
            rotateX: 20,
            y: 4,
            z: 25,
            opacity: 1,
            color: "#38bdf8",
            textShadow: "0 0 20px #38bdf8",
            duration: 0.26,
            ease: "power2.out",
            stagger: { each: 0.038, from: "start" },
          }
        )
        .to(
          chars,
          {
            rotateX: -8,
            y: -2,
            z: 5,
            duration: 0.16,
            ease: "sine.inOut",
            stagger: { each: 0.038, from: "start" },
          },
          "-=0.1"
        )
        .to(
          chars,
          {
            rotateX: 0,
            y: 0,
            z: 0,
            color: "#faf8f0",
            textShadow: "none",
            duration: 0.45,
            ease: "elastic.out(1.3, 0.4)",
            stagger: { each: 0.038, from: "start" },
          },
          "-=0.08"
        )
      return
    }

    // =========================================================================
    // SLIDE 3: The Destination — Organic Bloom, Float & Swell (Emerald / Pink)
    // =========================================================================
    if (slideIndex === 3) {
      // Fade & float in background photo card 4
      gsap.fromTo(
        ".anim-point4-img",
        { opacity: 0.45, scale: 0.94, y: -22 },
        { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: "power2.out" }
      )

      // Spin propeller flower doodle
      gsap.fromTo(
        ".anim-flower",
        { scale: 0.7, rotate: "-=180" },
        { scale: 1, rotate: "+=180", duration: 1.1, ease: "elastic.out(1.5, 0.3)" }
      )

      const tl = gsap.timeline()
      tl.to(chars, {
        scale: 0.55,
        y: 12,
        opacity: 0.4,
        color: "#34d399",
        duration: 0.1,
        ease: "power1.in",
        stagger: { each: 0.042, from: "start" },
      })
        .to(
          chars,
          {
            scale: 1.32,
            y: -18,
            opacity: 1,
            color: "#f472b6",
            textShadow: "0 0 22px #f472b6, 0 0 40px #34d399",
            duration: 0.34,
            ease: "back.out(2.4)",
            stagger: { each: 0.042, from: "start" },
          },
          "-=0.04"
        )
        .to(
          chars,
          {
            scale: 0.94,
            y: 2,
            color: "#6ee7b7",
            duration: 0.2,
            ease: "sine.inOut",
            stagger: { each: 0.042, from: "start" },
          },
          "-=0.1"
        )
        .to(
          chars,
          {
            scale: 1,
            y: 0,
            color: "#faf8f0",
            textShadow: "none",
            duration: 0.48,
            ease: "power2.out",
            stagger: { each: 0.042, from: "start" },
          },
          "-=0.08"
        )
      return
    }
  }, [])

  const dimsRef = useRef({ totalScrollableDistance: 0, maxHorizontalTranslate: 0, outerTop: 0 })
  const slideCentersRef = useRef([0, 0, 0, 0])
  const targetXRef = useRef(0)
  const currentXRef = useRef(0)
  const isLoopRunningRef = useRef(false)
  const rafIdRef = useRef(null)

  const updateDims = useCallback(() => {
    if (!outerRef.current || !trackRef.current) return
    const stickyHeight = stickyRef.current ? stickyRef.current.offsetHeight : window.innerHeight
    const totalDist = outerRef.current.offsetHeight - stickyHeight
    const trackWidth = trackRef.current.scrollWidth
    const viewportWidth = window.innerWidth
    const maxTranslate = Math.max(0, trackWidth - viewportWidth + 120)

    const rect = outerRef.current.getBoundingClientRect()
    const outerTop = window.scrollY + rect.top

    // Precalculate slide centers inside the track so we don't query DOM during scroll
    slideCentersRef.current = slideRefs.current.map((el) => {
      if (!el) return 0
      return el.offsetLeft + el.offsetWidth / 2
    })

    dimsRef.current = { totalScrollableDistance: totalDist, maxHorizontalTranslate: maxTranslate, outerTop }
  }, [])

  const startLerpLoop = useCallback(() => {
    if (isLoopRunningRef.current) return
    isLoopRunningRef.current = true

    const tick = () => {
      const targetX = targetXRef.current
      const diff = targetX - currentXRef.current

      if (Math.abs(diff) > 0.25) {
        currentXRef.current += diff * 0.16
      } else {
        currentXRef.current = targetX
      }

      const curX = currentXRef.current
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${curX}px, 0, 0)`
      }

      const maxTrans = dimsRef.current.maxHorizontalTranslate
      if (progressBarRef.current && maxTrans > 0) {
        const p = Math.max(0, Math.min(1, -curX / maxTrans))
        progressBarRef.current.style.transform = `scaleX(${p})`
      }

      // Check slide activations using cached offsets without DOM layout recalculations
      const viewportCenter = window.innerWidth / 2
      const progress = maxTrans > 0 ? -curX / maxTrans : 0
      const inRange = progress > -0.05 && progress < 1.05

      if (inRange) {
        slideCentersRef.current.forEach((centerInTrack, idx) => {
          const slideScreenX = centerInTrack + curX
          const dist = Math.abs(slideScreenX - viewportCenter)
          if (dist < window.innerWidth * 0.38) {
            if (!hasAnimatedRef.current[idx]) {
              hasAnimatedRef.current[idx] = true
              triggerSlideAnimation(idx)
            }
          } else if (dist > window.innerWidth * 0.62) {
            hasAnimatedRef.current[idx] = false
          }
        })
      } else if (progress < 0.05) {
        hasAnimatedRef.current = [false, false, false, false]
      }

      if (Math.abs(diff) > 0.25) {
        rafIdRef.current = requestAnimationFrame(tick)
      } else {
        isLoopRunningRef.current = false
      }
    }

    rafIdRef.current = requestAnimationFrame(tick)
  }, [triggerSlideAnimation])

  // Direct vertical-to-horizontal position synchronizer with hardware accelerated transform
  const syncHorizontalPosition = useCallback(() => {
    if (!outerRef.current || !trackRef.current) return
    const rect = outerRef.current.getBoundingClientRect()
    const stickyHeight = stickyRef.current ? stickyRef.current.offsetHeight : window.innerHeight
    const totalScrollableDistance = outerRef.current.offsetHeight - stickyHeight
    if (totalScrollableDistance <= 0) return

    const currentScrollOffset = -rect.top
    const rawProgress = Math.max(0, Math.min(1, currentScrollOffset / totalScrollableDistance))
    const maxHorizontalTranslate = dimsRef.current.maxHorizontalTranslate
    targetXRef.current = -rawProgress * maxHorizontalTranslate
    startLerpLoop()
  }, [startLerpLoop])

  useEffect(() => {
    updateDims()

    const onScroll = () => {
      syncHorizontalPosition()
    }

    const onResize = () => {
      updateDims()
      syncHorizontalPosition()
    }

    window.addEventListener("resize", onResize, { passive: true })
    window.addEventListener("scroll", onScroll, { passive: true })

    syncHorizontalPosition()

    const initialTimer = setTimeout(() => {
      updateDims()
      syncHorizontalPosition()
      ScrollTrigger.refresh()
    }, 280)

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
      clearTimeout(initialTimer)
    }
  }, [syncHorizontalPosition, updateDims])

  // Interactive bounce triggers
  const triggerBounce = (e) => {
    gsap.fromTo(
      e.currentTarget,
      { scale: 0.75, rotate: "+=90" },
      { scale: 1, rotate: "+=180", duration: 0.85, ease: "elastic.out(1.5, 0.3)" }
    )
  }

  const triggerLightningFlash = (e) => {
    gsap.fromTo(
      e.currentTarget,
      { scale: 1.4, filter: "drop-shadow(0 0 25px #0ae448)" },
      { scale: 1, filter: "drop-shadow(0 0 6px #0ae448)", duration: 0.75, ease: "elastic.out(1.5, 0.3)" }
    )
  }

  const triggerSpringSquash = (e) => {
    gsap.fromTo(
      e.currentTarget,
      { scaleY: 0.6, scaleX: 1.3 },
      { scaleY: 1, scaleX: 1, duration: 1, ease: "elastic.out(1.6, 0.25)" }
    )
  }

  return (
    <div
      ref={outerRef}
      className="bg-transparent relative w-full h-[360vh] select-none z-10"
      style={{ overflow: "visible" }}
    >
      {/* Sticky Viewport Container: Locks into view as user scrolls through vertical runway */}
      <div
        ref={stickyRef}
        className="sticky top-[70px] sm:top-[76px] md:top-[84px] h-[calc(100vh-70px)] sm:h-[calc(100vh-76px)] md:h-[calc(100vh-84px)] w-full overflow-hidden flex flex-col justify-between py-4"
        style={{ contain: "paint" }}
      >
        {/* Main Wide Horizontal Track */}
        <div className="relative w-full overflow-visible my-auto pt-6 sm:pt-10">
          <div
            ref={trackRef}
            className="flex flex-row items-center will-change-transform pl-[6vw] sm:pl-[8vw] pr-[25vw] space-x-16 sm:space-x-24 md:space-x-32"
          >

            {/* ==============================================================
                POINT 1: CURIOSITY INTO CREATION
                Animated Text Jump Wave on: "Every great journey begins"
            ============================================================== */}
            <div
              ref={(el) => (slideRefs.current[0] = el)}
              className="w-[88vw] sm:w-[80vw] md:w-[72vw] lg:w-[65vw] xl:w-[60vw] shrink-0 flex flex-col justify-center"
            >
              <div className="relative">
                {/* Header Pills */}
                <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
                  <span className="font-mono text-xs sm:text-sm text-white/90 border border-white/20 px-3.5 py-1 rounded-md inline-flex items-center gap-1.5 bg-white/5 backdrop-blur-md">
                    <span className="text-white/50">&#123;</span>
                    <span>01 &middot; The Spark</span>
                    <span className="text-white/50">&#125;</span>
                  </span>
                  <span className="bg-[#fbcfe8] text-black font-['Satoshi'] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-md">
                    Curiosity Into Creation
                  </span>
                </div>

                {/* Unique Doodle: Peach Starburst with Swirl Trail on top right */}
                <div className="anim-starburst absolute -top-12 -right-6 sm:right-4 pointer-events-auto">
                  <PeachStarburstTrail onClick={triggerBounce} className="w-20 h-24 sm:w-26 sm:h-30" />
                </div>

                {/* Big Editorial Statement with Text Jumping Effect */}
                <h2
                  className="font-['Playfair_Display',Georgia,serif] text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] text-[#faf8f0] font-normal leading-[1.34] tracking-tight relative z-10"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  <JumpingText text="Every great journey begins" slideIdx={0} />
                  <span>with a question. At NCS, students explore technology, discover their interests, and find the confidence to{" "}</span>
                  <span className="text-[#0ae448] font-semibold inline-flex items-baseline flex-wrap">
                    turn curiosity into creat
                    <span className="anim-diamond inline-block">
                      <OrangeDiamond onClick={triggerBounce} />
                    </span>
                    on.
                  </span>
                </h2>

                {/* Background Editorial Photo: Positioned directly behind the lower-right text, lower placement, no border, no hover, no badge */}
                <div
                  className="anim-point1-img absolute right-0 sm:right-2 md:right-4 -bottom-24 sm:-bottom-28 md:-bottom-36 lg:-bottom-40 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[500px] h-[180px] sm:h-[220px] md:h-[260px] lg:h-[290px] z-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] pointer-events-none select-none"
                >
                  <img
                    src={imgWorkshopSession}
                    alt="NCS students learning programming session"
                    className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.85]"
                  />
                  {/* Dark gradient & vignette overlays ensuring crystal-clear text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/45 to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c]/85 via-transparent to-black/30 z-10" />
                </div>
              </div>
            </div>

            {/* ==============================================================
                POINT 2: PROFESSIONAL MINDSET
                Animated Text Jump Wave on: "Deadlines, responsibilities, teamwork,"
            ============================================================== */}
            <div
              ref={(el) => (slideRefs.current[1] = el)}
              className="w-[88vw] sm:w-[80vw] md:w-[72vw] lg:w-[65vw] xl:w-[60vw] shrink-0 flex flex-col justify-center"
            >
              <div className="relative">
                {/* Header Pills */}
                <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
                  <span className="font-mono text-xs sm:text-sm text-white/90 border border-white/20 px-3.5 py-1 rounded-md inline-flex items-center gap-1.5 bg-white/5 backdrop-blur-md">
                    <span className="text-white/50">&#123;</span>
                    <span>02 &middot; The Discipline</span>
                    <span className="text-white/50">&#125;</span>
                  </span>
                  <span className="bg-[#f97316] text-black font-['Satoshi'] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-md">
                    Professional Mindset
                  </span>
                </div>

                {/* Unique Doodle: Violet 3D Hourglass floating on top right */}
                <div className="anim-hourglass absolute -top-10 right-4 sm:right-8 pointer-events-auto">
                  <VioletHourglass onClick={triggerBounce} className="w-12 h-16 sm:w-16 sm:h-20" />
                </div>

                {/* Big Editorial Statement with Text Jumping Effect */}
                <h2
                  className="font-['Playfair_Display',Georgia,serif] text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] text-[#faf8f0] font-normal leading-[1.34] tracking-tight relative z-10"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  <JumpingText text="Deadlines, responsibilities," slideIdx={1} />
                  <span className="inline-flex items-baseline mr-[0.28em]">
                    <span className="anim-lightning inline-block jump-char-1">
                      <GreenLightningBolt onClick={triggerLightningFlash} />
                    </span>
                    <JumpingText text="eamwork," slideIdx={1} />
                  </span>
                  <span>and accountability become part of the journey. We help students develop the{" "}</span>
                  <span className="text-[#38bdf8] font-semibold">
                    mindset that the professional world expects.
                  </span>
                </h2>

                {/* Background Editorial Photo 2: Placed upper-left behind the pills & start of text */}
                <div
                  className="anim-point2-img absolute -top-14 sm:-top-18 md:-top-24 -left-3 sm:-left-6 md:-left-10 w-[260px] sm:w-[320px] md:w-[380px] lg:w-[430px] h-[165px] sm:h-[205px] md:h-[245px] lg:h-[270px] z-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] pointer-events-none select-none rotate-1"
                >
                  <img
                    src={imgLabCoding}
                    alt="NCS students coding session"
                    className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.82]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/40 via-black/50 to-[#0a0a0c]/90 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0c]/80 z-10" />
                </div>
              </div>
            </div>

            {/* ==============================================================
                POINT 3: HANDS-ON EXPERIENCE
                Animated Text Jump Wave on: "From writing the first line of code"
            ============================================================== */}
            <div
              ref={(el) => (slideRefs.current[2] = el)}
              className="w-[88vw] sm:w-[80vw] md:w-[72vw] lg:w-[65vw] xl:w-[60vw] shrink-0 flex flex-col justify-center"
            >
              <div className="relative">
                {/* Header Pills */}
                <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
                  <span className="font-mono text-xs sm:text-sm text-white/90 border border-white/20 px-3.5 py-1 rounded-md inline-flex items-center gap-1.5 bg-white/5 backdrop-blur-md">
                    <span className="text-white/50">&#123;</span>
                    <span>03 &middot; The Craft</span>
                    <span className="text-white/50">&#125;</span>
                  </span>
                  <span className="bg-[#fde047] text-black font-['Satoshi'] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-md">
                    Hands-On Experience
                  </span>
                </div>

                {/* Unique Doodle: 3D Coiled Spring Ribbon floating on bottom right */}
                <div className="anim-spring absolute -bottom-14 right-6 sm:right-12 pointer-events-auto">
                  <SpringCoilRibbon onClick={triggerSpringSquash} className="w-16 h-22 sm:w-22 sm:h-30" />
                </div>

                {/* Big Editorial Statement with Text Jumping Effect */}
                <h2
                  className="font-['Playfair_Display',Georgia,serif] text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] text-[#faf8f0] font-normal leading-[1.34] tracking-tight relative z-10"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  <JumpingText text="From writing the first line of" slideIdx={2} />
                  <span className="inline-flex items-baseline mr-[0.28em]">
                    <span className="jump-char-2 inline-block">c</span>
                    <span className="anim-cube inline-block jump-char-2">
                      <IsometricCodeCube onClick={triggerBounce} />
                    </span>
                    <span className="jump-char-2 inline-block">de</span>
                  </span>
                  <span>to designing an interfac</span>
                  <span className="anim-cursor inline-block">
                    <CursorArrowDoodle onClick={triggerBounce} />
                  </span>
                  <span>e or developing a complete project, we turn learning into{" "}</span>
                  <span className="text-[#c084fc] font-semibold">
                    hands-on experience and ideas into something real.
                  </span>
                </h2>

                {/* Background Editorial Photo 3: Placed lower-right behind the final sentence */}
                <div
                  className="anim-point3-img absolute right-0 sm:right-4 md:right-8 -bottom-22 sm:-bottom-26 md:-bottom-34 lg:-bottom-38 w-[270px] sm:w-[340px] md:w-[410px] lg:w-[460px] h-[170px] sm:h-[210px] md:h-[250px] lg:h-[280px] z-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] pointer-events-none select-none -rotate-1.5"
                >
                  <img
                    src={imgHackathonOrganizers}
                    alt="NCS hackathon organizers"
                    className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.82]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/45 to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c]/85 via-transparent to-black/30 z-10" />
                </div>
              </div>
            </div>

            {/* ==============================================================
                POINT 4: WHO WE BECOME
                Animated Text Jump Wave on: "We come together as students"
            ============================================================== */}
            <div
              ref={(el) => (slideRefs.current[3] = el)}
              className="w-[88vw] sm:w-[80vw] md:w-[72vw] lg:w-[65vw] xl:w-[60vw] shrink-0 flex flex-col justify-center"
            >
              <div className="relative">
                {/* Header Pills */}
                <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
                  <span className="font-mono text-xs sm:text-sm text-white/90 border border-white/20 px-3.5 py-1 rounded-md inline-flex items-center gap-1.5 bg-white/5 backdrop-blur-md">
                    <span className="text-white/50">&#123;</span>
                    <span>04 &middot; The Destination</span>
                    <span className="text-white/50">&#125;</span>
                  </span>
                  <span className="bg-[#a7f3d0] text-black font-['Satoshi'] font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-md">
                    Who We Become
                  </span>
                </div>

                {/* Unique Doodle: Pink Propeller Flower floating on top right */}
                <div className="anim-flower absolute -top-12 right-6 sm:right-10 pointer-events-auto">
                  <PinkPropellerFlower onClick={triggerBounce} className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>

                {/* Big Editorial Statement with Text Jumping Effect */}
                <h2
                  className="font-['Playfair_Display',Georgia,serif] text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] text-[#faf8f0] font-normal leading-[1.34] tracking-tight relative z-10"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  <JumpingText text="We come together as students" slideIdx={3} />
                  <span>with potential and grow into programmers, developers, designers, and professionals. Because{" "}</span>
                  <span className="inline-flex items-center align-middle mx-1">
                    <img
                      src={imgNcsLogo}
                      alt="NCS Logo"
                      onClick={triggerBounce}
                      className="h-[0.78em] w-auto inline-block object-contain drop-shadow-[0_2px_12px_rgba(255,255,255,0.35)] transition-transform hover:scale-110 cursor-pointer"
                    />
                  </span>{" "}
                  <span>isn&apos;t just about{" "}</span>
                  <span className="whitespace-nowrap inline-flex items-baseline">
                    what we bu
                    <span className="anim-star inline-block">
                      <GoldStarParticle onClick={triggerBounce} />
                    </span>
                    ld
                  </span>{" "}
                  —{" "}
                  <span className="text-[#0ae448] font-semibold whitespace-nowrap">
                    it&apos;s about who we become.
                  </span>
                </h2>

                {/* Background Editorial Photo 4: Placed upper-right behind the end of statement */}
                <div
                  className="anim-point4-img absolute -top-16 sm:-top-22 md:-top-30 right-0 sm:-right-4 md:-right-8 w-[270px] sm:w-[340px] md:w-[410px] lg:w-[470px] h-[175px] sm:h-[215px] md:h-[255px] lg:h-[285px] z-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] pointer-events-none select-none rotate-2"
                >
                  <img
                    src={imgCommunityFamily}
                    alt="NCS student community"
                    className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.82]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/40 via-black/50 to-[#0a0a0c]/90 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a0a0c]/85 z-10" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Progress Bar Track */}
        <div className="w-full max-w-[1650px] mx-auto px-6 sm:px-12 pb-2 sm:pb-4 z-20">
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="w-full h-full bg-[#0ae448] origin-left scale-x-0 shadow-[0_0_12px_#0ae448]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

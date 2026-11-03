import React, { useEffect, useRef } from "react"
import gsap from "gsap"

/**
 * 1. 4-Petal Gradient Flower Doodle
 * Modeled after the orange-to-purple gradient star/flower in the GSAP reference
 */
function GsapFlowerDoodle({ className = "w-16 h-16", onClick }) {
  return (
    <svg
      className={`${className} cursor-pointer select-none`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <defs>
        <linearGradient id="gsapFlowerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff7043" />
          <stop offset="45%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
        <filter id="flowerGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#ff7043" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#flowerGlowFilter)">
        {/* 4 Petals with smooth curved nodes */}
        <path
          d="M50 50 C40 30 30 12 50 3 C70 12 60 30 50 50 Z"
          fill="url(#gsapFlowerGrad)"
        />
        <path
          d="M50 50 C70 40 88 30 97 50 C88 70 70 60 50 50 Z"
          fill="url(#gsapFlowerGrad)"
        />
        <path
          d="M50 50 C60 70 70 88 50 97 C30 88 40 70 50 50 Z"
          fill="url(#gsapFlowerGrad)"
        />
        <path
          d="M50 50 C30 60 12 70 3 50 C12 30 30 40 50 50 Z"
          fill="url(#gsapFlowerGrad)"
        />
        <circle cx="50" cy="50" r="7.5" fill="#ff7043" />
      </g>
    </svg>
  )
}

/**
 * 2. Neon-Green Lightning Bolt Doodle
 * Modeled after the electric green lightning replacing 't' in the GSAP reference
 */
function GsapLightningDoodle({ className = "w-10 h-16", onClick }) {
  return (
    <svg
      className={`${className} cursor-pointer select-none inline-block align-middle`}
      viewBox="0 0 50 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <defs>
        <filter id="lightningGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#0ae448" floodOpacity="0.85" />
        </filter>
      </defs>
      <path
        d="M32 2 L4 42 L24 42 L14 78 L46 34 L27 34 Z"
        fill="#0ae448"
        filter="url(#lightningGlowFilter)"
      />
    </svg>
  )
}

/**
 * 3. 3D Gradient Spring / Coil Ribbon Doodle
 * Modeled after the violet/pink ribbon curving beneath letters in the GSAP reference
 */
function GsapSpringDoodle({ className = "w-16 h-24", onClick }) {
  return (
    <svg
      className={`${className} cursor-pointer select-none`}
      viewBox="0 0 110 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <defs>
        <linearGradient id="springGrad3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="35%" stopColor="#c084fc" />
          <stop offset="70%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#fb7185" />
        </linearGradient>
        <filter id="springShadowFilter" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#9333ea" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#springShadowFilter)">
        <path
          d="M 28 16
             C 50 5, 88 18, 82 45
             C 76 72, 22 62, 28 90
             C 34 118, 92 108, 82 134"
          stroke="url(#springGrad3D)"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Soft light reflection sheen along the coil */}
        <path
          d="M 31 18
             C 50 8, 83 20, 78 42
             C 73 66, 25 58, 30 84
             C 35 110, 88 102, 78 128"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.38"
        />
      </g>
    </svg>
  )
}

export default function GsapBigTextHero() {
  const containerRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const flowerRef = useRef(null)
  const lightningRef = useRef(null)
  const springRef = useRef(null)
  const questionDotRef = useRef(null)
  const sublineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Master Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      // Text lines reveal upwards with scale and blur fade
      tl.fromTo(
        line1Ref.current,
        { yPercent: 110, opacity: 0, rotateX: 30, filter: "blur(12px)" },
        { yPercent: 0, opacity: 1, rotateX: 0, filter: "blur(0px)", duration: 1.3 }
      )
        .fromTo(
          line2Ref.current,
          { yPercent: 110, opacity: 0, rotateX: 30, filter: "blur(12px)" },
          { yPercent: 0, opacity: 1, rotateX: 0, filter: "blur(0px)", duration: 1.3 },
          "-=1.0"
        )
        // Shapes pop in with elastic physics
        .fromTo(
          flowerRef.current,
          { scale: 0, rotation: -180 },
          { scale: 1, rotation: 0, duration: 1.4, ease: "elastic.out(1.2, 0.4)" },
          "-=0.9"
        )
        .fromTo(
          lightningRef.current,
          { scale: 0, y: -40, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, duration: 1.2, ease: "back.out(2.5)" },
          "-=1.0"
        )
        .fromTo(
          springRef.current,
          { scale: 0, rotation: 50 },
          { scale: 1, rotation: 0, duration: 1.5, ease: "elastic.out(1.1, 0.3)" },
          "-=1.1"
        )
        .fromTo(
          questionDotRef.current,
          { scale: 0 },
          { scale: 1, duration: 1, ease: "elastic.out(1.4, 0.3)" },
          "-=0.8"
        )
        .fromTo(
          sublineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.6"
        )

      // 2. Continuous Idle Motion
      // Flower: continuous 360 rotation + gentle float
      gsap.to(flowerRef.current, {
        rotation: "+=360",
        duration: 16,
        repeat: -1,
        ease: "none",
      })
      gsap.to(flowerRef.current, {
        y: -14,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      // Lightning bolt: gentle electrical hovering & angle bobbing
      gsap.to(lightningRef.current, {
        y: -6,
        rotate: 4,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      // Spring Ribbon: 3D compression & stretching
      gsap.to(springRef.current, {
        y: 12,
        scaleY: 1.08,
        rotate: -6,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      // Question mark dot: pulsing glowing beacon
      gsap.to(questionDotRef.current, {
        y: -5,
        scale: 1.2,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })

      // 3. Mouse Parallax Interactive Physics
      const handleMouseMove = (e) => {
        if (!containerRef.current) return
        const { left, top, width, height } = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - left) / width - 0.5
        const y = (e.clientY - top) / height - 0.5

        gsap.to(flowerRef.current, {
          x: x * 45,
          y: y * 45,
          duration: 0.7,
          ease: "power1.out",
        })
        gsap.to(lightningRef.current, {
          x: x * -35,
          y: y * -35,
          duration: 0.6,
          ease: "power1.out",
        })
        gsap.to(springRef.current, {
          x: x * 50,
          y: y * 50,
          duration: 0.8,
          ease: "power1.out",
        })
      }

      window.addEventListener("mousemove", handleMouseMove)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Interactive Click Handlers
  const handleFlowerClick = () => {
    gsap.fromTo(
      flowerRef.current,
      { scale: 0.8, rotation: "+=180" },
      { scale: 1, rotation: "+=360", duration: 1, ease: "elastic.out(1.5, 0.3)" }
    )
  }

  const handleLightningClick = () => {
    gsap.fromTo(
      lightningRef.current,
      { scale: 1.5, rotate: -20, filter: "drop-shadow(0 0 25px #0ae448)" },
      { scale: 1, rotate: 0, filter: "drop-shadow(0 0 6px #0ae448)", duration: 0.75, ease: "elastic.out(1.5, 0.3)" }
    )
  }

  const handleSpringClick = () => {
    gsap.fromTo(
      springRef.current,
      { scaleY: 0.6, scaleX: 1.3 },
      { scaleY: 1, scaleX: 1, duration: 1.1, ease: "elastic.out(1.6, 0.25)" }
    )
  }

  const handleCharHover = (e) => {
    gsap.to(e.currentTarget, {
      y: -10,
      scale: 1.04,
      duration: 0.25,
      ease: "power2.out",
    })
  }

  const handleCharLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.45,
      ease: "elastic.out(1.2, 0.3)",
    })
  }

  return (
    <div
      ref={containerRef}
      className="bg-transparent relative w-full min-h-[calc(100vh-84px)] flex flex-col justify-center items-center px-2 sm:px-4 md:px-8 select-none overflow-hidden"
    >
      {/* Main Massive Screen-Covering GSAP Headline Box */}
      <div className="relative flex flex-col items-start justify-center w-full max-w-[1550px] mx-auto py-2 sm:py-6">

        {/* ==============================================================
            LINE 1: "What we"
            - 4-Petal Flower crowns the "a"
            - Massive, screen-filling typography
        ============================================================== */}
        <div className="relative w-full overflow-visible">
          {/* 4-Petal Gradient Rotating Flower Doodle (Floating directly above "a") */}
          <div
            ref={flowerRef}
            onClick={handleFlowerClick}
            className="absolute -top-10 sm:-top-16 md:-top-24 lg:-top-32 left-[30%] sm:left-[32%] md:left-[34%] z-30 pointer-events-auto"
            title="Click flower!"
          >
            <GsapFlowerDoodle className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36" />
          </div>

          <div className="overflow-hidden py-1">
            <h1
              ref={line1Ref}
              className="font-['Satoshi'] font-black text-[18vw] sm:text-[17vw] md:text-[16vw] lg:text-[15vw] xl:text-[175px] 2xl:text-[215px] leading-[0.82] tracking-[-0.045em] text-[#faf8f0] uppercase flex items-baseline flex-nowrap"
              style={{
                fontFamily: "'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif",
                textShadow: "0 6px 50px rgba(0,0,0,0.5)",
              }}
            >
              {/* "Wh" */}
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                Wh
              </span>

              {/* "a" */}
              <span
                onMouseEnter={handleCharHover}
                onMouseLeave={handleCharLeave}
                className="relative inline-block transition-transform"
              >
                a
              </span>

              {/* "t" */}
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                t
              </span>

              {/* Space */}
              <span className="inline-block w-[3vw] sm:w-[2.5vw] md:w-[2vw]" />

              {/* "we" */}
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                we
              </span>
            </h1>
          </div>
        </div>

        {/* ==============================================================
            LINE 2: "do at NCS?"
            - "do": clean, bold text matching the rest of the text
            - "at": the 't' is REPLACED / FUSED with the Neon-Green Lightning Bolt
            - "NCS?": the 3D Spring Ribbon coils through the "S"
            - "?": question mark with glowing bouncing dot
            - Indented slightly to the right, matching the reference image layout
        ============================================================== */}
        <div className="relative w-full overflow-visible ml-[5vw] sm:ml-[7vw] md:ml-[9vw] lg:ml-[11vw] -mt-1 sm:-mt-3 md:-mt-6">

          {/* 3D Spring Ribbon Doodle (coiling beneath & around "S") */}
          <div
            ref={springRef}
            onClick={handleSpringClick}
            className="absolute -bottom-10 sm:-bottom-16 md:-bottom-24 lg:-bottom-28 right-[10%] sm:right-[12%] md:right-[15%] z-30 pointer-events-auto"
            title="Click spring!"
          >
            <GsapSpringDoodle className="w-14 h-20 sm:w-20 sm:h-28 md:w-28 md:h-38 lg:w-36 lg:h-48" />
          </div>

          <div className="overflow-hidden py-1">
            <h1
              ref={line2Ref}
              className="font-['Satoshi'] font-black text-[18vw] sm:text-[17vw] md:text-[16vw] lg:text-[15vw] xl:text-[175px] 2xl:text-[215px] leading-[0.82] tracking-[-0.045em] text-[#faf8f0] uppercase flex items-baseline flex-nowrap"
              style={{
                fontFamily: "'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif",
                textShadow: "0 6px 50px rgba(0,0,0,0.5)",
              }}
            >
              {/* "d" */}
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                d
              </span>

              {/* Clean "o" (effect removed as requested) */}
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                o
              </span>

              {/* Space */}
              <span className="inline-block w-[3vw] sm:w-[2.5vw] md:w-[2vw]" />

              {/* "a" */}
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                a
              </span>

              {/* "t" - REPLACED WITH THE NEON LIGHTNING BOLT DOODLE */}
              <span
                ref={lightningRef}
                onClick={handleLightningClick}
                className="relative inline-flex items-center justify-center cursor-pointer align-baseline px-[0.02em]"
                title="Click lightning!"
              >
                <GsapLightningDoodle className="w-[0.52em] h-[0.82em]" />
              </span>

              {/* Space */}
              <span className="inline-block w-[3vw] sm:w-[2.5vw] md:w-[2vw]" />

              {/* "N" */}
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                N
              </span>

              {/* "C" */}
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                C
              </span>

              {/* "S" */}
              <span
                onMouseEnter={handleCharHover}
                onMouseLeave={handleCharLeave}
                className="inline-block transition-transform text-[#faf8f0] relative"
              >
                S
              </span>

              {/* "?" - Question Mark with animated dot */}
              <span className="relative inline-flex items-baseline text-[#faf8f0]">
                <span>?</span>
                <span
                  ref={questionDotRef}
                  className="absolute bottom-[0.14em] right-[0.05em] size-[0.12em] rounded-full bg-[#0ae448] shadow-[0_0_12px_#0ae448]"
                />
              </span>
            </h1>
          </div>
        </div>

      </div>

      {/* Playful Parenthetical Subline */}
      <div
        ref={sublineRef}
        className="relative z-10 mt-6 sm:mt-10 md:mt-12 text-center"
      >
        <p
          className="font-['Playfair_Display',Georgia,serif] italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/60 font-normal tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          (and how curious minds turn raw ideas into software)
        </p>
      </div>
    </div>
  )
}

import React, { useEffect, useRef } from "react"
import gsap from "gsap"

export default function GsapBigTextHero() {
  const containerRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
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
        .fromTo(
          sublineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.6"
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

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
      className="bg-transparent relative w-full min-h-[calc(100vh-84px)] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 select-none overflow-hidden"
    >
      {/* Main Massive Screen-Covering Headline Box - Centered */}
      <div className="relative flex flex-col items-center justify-center text-center w-full max-w-[1550px] mx-auto py-2 sm:py-6">

        {/* LINE 1: "WHAT WE" */}
        <div className="relative w-full flex justify-center overflow-visible">
          <div className="overflow-hidden py-1">
            <h1
              ref={line1Ref}
              className="font-['Satoshi'] font-black text-[18vw] sm:text-[17vw] md:text-[16vw] lg:text-[15vw] xl:text-[175px] 2xl:text-[215px] leading-[0.82] tracking-[-0.045em] text-[#faf8f0] uppercase flex items-baseline justify-center flex-nowrap"
              style={{
                fontFamily: "'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif",
                textShadow: "0 6px 50px rgba(0,0,0,0.5)",
              }}
            >
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                Wh
              </span>
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                a
              </span>
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                t
              </span>
              <span className="inline-block w-[3vw] sm:w-[2.5vw] md:w-[2vw]" />
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                we
              </span>
            </h1>
          </div>
        </div>

        {/* LINE 2: "DO AT NCS?" */}
        <div className="relative w-full flex justify-center overflow-visible -mt-1 sm:-mt-3 md:-mt-6">
          <div className="overflow-hidden py-1">
            <h1
              ref={line2Ref}
              className="font-['Satoshi'] font-black text-[18vw] sm:text-[17vw] md:text-[16vw] lg:text-[15vw] xl:text-[175px] 2xl:text-[215px] leading-[0.82] tracking-[-0.045em] text-[#faf8f0] uppercase flex items-baseline justify-center flex-nowrap"
              style={{
                fontFamily: "'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif",
                textShadow: "0 6px 50px rgba(0,0,0,0.5)",
              }}
            >
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                d
              </span>
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                o
              </span>

              <span className="inline-block w-[3vw] sm:w-[2.5vw] md:w-[2vw]" />

              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                a
              </span>
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                t
              </span>

              <span className="inline-block w-[3vw] sm:w-[2.5vw] md:w-[2vw]" />

              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                N
              </span>
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                C
              </span>
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                S
              </span>
              <span onMouseEnter={handleCharHover} onMouseLeave={handleCharLeave} className="inline-block transition-transform">
                ?
              </span>
            </h1>
          </div>
        </div>

      </div>

      {/* Parenthetical Subline */}
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

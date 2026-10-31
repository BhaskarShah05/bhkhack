

import React from "react"
import { CursorDrivenParticleTypography } from "./CursorDrivenParticleTypography"
import SphereImageGrid from "./ui/img-sphere"
import { SPHERE_TEAM_MEMBERS } from "../data/teamMembers"

const assetPathPrefix = "/assets"

const imgInstagram = `${assetPathPrefix}/42741.svg`
const imgLinkedin = `${assetPathPrefix}/linkedin-icon.svg`
const imgGithub = `${assetPathPrefix}/github-icon.svg`
const imgFacebook = `${assetPathPrefix}/facebook-icon.svg`

// SVG Liquid Glass Filter Component
const GlassFilter = () => (
  <svg style={{ display: "none" }} aria-hidden="true">
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />

      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />

      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="200"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
)

// Liquid Glass Effect Wrapper Component

const GlassEffect = ({
  children,
  className = "",
  style = {},
  href,
  target = "_blank",
}) => {
  const glassStyle = {
    boxShadow:
      "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.05)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  }

  const content = (
    <div
      className={`relative flex font-semibold overflow-hidden text-white cursor-pointer transition-all duration-700 ${className}`}
      style={glassStyle}
    >
      {/* Glass Layers */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-inherit"
        style={{
          backdropFilter: "blur(12px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />

      <div
        className="absolute inset-0 z-10 rounded-inherit"
        style={{ background: "rgba(255, 255, 255, 0.10)" }}
      />

      <div
        className="absolute inset-0 z-20 rounded-inherit overflow-hidden"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.4), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.2)",
        }}
      />

      {/* Content */}
      <div className="relative z-30 w-full">{children}</div>
    </div>
  )

  return href ? (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className="block no-underline"
    >
      {content}
    </a>
  ) : (
    content
  )
}

export default function Footer({ hideParticleLogo = false }) {
  const [sphereSize, setSphereSize] = React.useState({
    containerSize: 640,
    sphereRadius: 240,
  })

  React.useEffect(() => {
    const updateSize = () => {
      if (typeof window === "undefined") return
      const w = window.innerWidth
      if (w < 480) {
        const size = Math.max(260, Math.min(320, w - 40))
        setSphereSize({
          containerSize: size,
          sphereRadius: Math.round(size * 0.38),
        })
      } else if (w < 768) {
        const size = Math.min(420, w - 60)
        setSphereSize({
          containerSize: size,
          sphereRadius: Math.round(size * 0.38),
        })
      } else {
        setSphereSize({ containerSize: 640, sphereRadius: 240 })
      }
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <footer
      id="connect-section"
      className="w-full flex flex-col items-center pt-[60px] md:pt-[90px] pb-[50px] md:pb-[70px] select-none relative z-20 overflow-hidden"
    >
      <GlassFilter />

      {/* 1. Top: Giant Interactive Particle Physics NIBBLE Heading */}
      {!hideParticleLogo && (
        <div className="hidden md:flex w-full flex-col items-center max-w-[1500px] px-4 mb-6 relative z-20">
          <div className="flex justify-center items-center w-full h-[240px] sm:h-[280px] md:h-[320px]">
            <CursorDrivenParticleTypography
              text="NIBBLE"
              fontSize={230}
              fontFamily="'Satoshi', Arial, sans-serif"
              particleSize={2.2}
              particleDensity={4.5}
              dispersionStrength={24}
              returnSpeed={0.08}
              color="#FFFFFF"
              className="w-full h-full min-h-0"
            />
          </div>
        </div>
      )}

      {/* 2. Liquid Glass LET'S CONNECT Box */}
      <div className="w-full flex flex-col items-center max-w-[1500px] px-3 sm:px-4 my-6 sm:my-8">
        <GlassEffect className="rounded-[24px] sm:rounded-[36px] p-5 sm:p-8 md:p-10 hover:rounded-[28px] sm:hover:rounded-[42px] max-w-[660px] w-full border border-white/20 box-border overflow-hidden">
          <div className="flex flex-col items-center gap-2.5 sm:gap-3.5 text-center w-full">
            <h2 className="font-['Satoshi',Arial,sans-serif] font-bold text-[22px] sm:text-[30px] md:text-[34px] lg:text-[38px] leading-tight text-white tracking-tight uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              LET&apos;S CONNECT
            </h2>
            <p className="font-['Satoshi',Arial,sans-serif] font-normal text-[14px] sm:text-[17px] md:text-[20px] text-white/70 tracking-normal -mt-0.5 sm:-mt-1 break-words px-2">
              Follow NCS and stay in the loop.
            </p>

            {/* Liquid Glass Social Icons Dock */}
            <div className="flex items-center justify-center gap-3 sm:gap-5 mt-2 sm:mt-3 flex-wrap">
              <a
                href="https://github.com/ncs-jss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="relative shrink-0 size-[44px] sm:size-[54px] p-2.5 rounded-2xl bg-white/10 border border-white/20 hover:scale-115 hover:bg-white/20 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg"
                style={{
                  transitionTimingFunction:
                    "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
                }}
              >
                <img
                  alt="GitHub"
                  className="block size-full object-contain"
                  src={imgGithub}
                />
              </a>
              <a
                href="https://linkedin.com/company/hackncs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="relative shrink-0 size-[44px] sm:size-[54px] p-2.5 rounded-2xl bg-white/10 border border-white/20 hover:scale-115 hover:bg-white/20 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg"
                style={{
                  transitionTimingFunction:
                    "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
                }}
              >
                <img
                  alt="LinkedIn"
                  className="block size-full object-contain"
                  src={imgLinkedin}
                />
              </a>
              <a
                href="https://instagram.com/hackncs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="relative shrink-0 size-[44px] sm:size-[54px] p-2.5 rounded-2xl bg-white/10 border border-white/20 hover:scale-115 hover:bg-white/20 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg"
                style={{
                  transitionTimingFunction:
                    "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
                }}
              >
                <img
                  alt="Instagram"
                  className="block size-full object-contain"
                  src={imgInstagram}
                />
              </a>
              <a
                href="https://www.facebook.com/nibblecomputersociety"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="relative shrink-0 size-[44px] sm:size-[54px] p-2.5 rounded-2xl bg-white/10 border border-white/20 hover:scale-115 hover:bg-white/20 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg"
                style={{
                  transitionTimingFunction:
                    "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
                }}
              >
                <img
                  alt="Facebook"
                  className="block size-full object-contain"
                  src={imgFacebook}
                />
              </a>
            </div>
          </div>
        </GlassEffect>
      </div>

      {/* 3. Interactive Team Image Sphere */}
      <div className="relative mt-[10px] sm:mt-[20px] w-full max-w-[1200px] flex items-center justify-center z-30 overflow-hidden">
        <div className="relative z-20 flex justify-center items-center py-2 sm:py-4 w-full max-w-full overflow-hidden">
          <SphereImageGrid
            images={SPHERE_TEAM_MEMBERS}
            containerSize={sphereSize.containerSize}
            sphereRadius={sphereSize.sphereRadius}
            dragSensitivity={0.8}
            momentumDecay={0.96}
            maxRotationSpeed={6}
            baseImageScale={85 / 640}
            hoverScale={1.3}
            perspective={1000}
            autoRotate={true}
            autoRotateSpeed={0.25}
          />
        </div>
      </div>

      {/* 4. Bottom Content Container (Slogan & Attribution) */}
      <div className="w-full flex flex-col items-center gap-[12px] sm:gap-[15px] max-w-[1500px] px-4 mt-6 sm:mt-8">
        <div className="flex flex-col items-center text-center gap-2 max-w-full">
          <h3 className="font-['Satoshi',Arial,sans-serif] font-medium text-[16px] sm:text-[22px] md:text-[34px] leading-snug sm:leading-tight text-white tracking-tight break-words px-2 max-w-[95vw] md:max-w-none text-center">
            Designing, Coding, And Tomorrow&apos;s Innovations Today.
          </h3>
          <p className="font-['Satoshi',Arial,sans-serif] font-normal text-[13px] sm:text-[16px] md:text-[20px] leading-normal text-white/60 md:text-white/75 tracking-normal break-words px-2 max-w-[95vw] md:max-w-none text-center">
            Designed and developed with ❤️ by Nibble Computer Society
          </p>
        </div>
      </div>
    </footer>
  )
}

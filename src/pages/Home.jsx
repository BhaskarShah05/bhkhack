import React, { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import Footer from "../components/Footer"
import CursorDrivenParticleTypography from "../components/CursorDrivenParticleTypography"
import { LiquidMetalButton } from "../components/LiquidMetalButton"
import CarouselStacked from "../components/ui/carousel-07"
import { ImageAutoSlider } from "../components/ui/image-auto-slider"
import { highlightImages } from "../data/highlightImages"
import { publicAsset } from "../lib/publicAsset"


const assetPathPrefix = publicAsset("assets")
const imgRectangle71 = `${assetPathPrefix}/58748.png`
const imgRectangle114 = `${assetPathPrefix}/7c482.png`
const imgRectangle60 = `${assetPathPrefix}/b9948.png`
const imgRectangle115 = `${assetPathPrefix}/9f50b.png`
const imgRectangle45 = `${assetPathPrefix}/35193.png`
const imgRectangle48 = `${assetPathPrefix}/bb76c.png`
const imgRectangle50 = `${assetPathPrefix}/78cf7.png`
const imgNcsLogo = `${assetPathPrefix}/8f22e.svg`
const imgNcsLogoWhite = publicAsset("assets/ncs-logo-white.svg")
const imgRobotStatic = publicAsset("assets/robot-static.webp")
const imgVector = `${assetPathPrefix}/69fdb.svg`
const imgVector1 = `${assetPathPrefix}/67b5d.svg`
const imgGroup1000002935 = `${assetPathPrefix}/84ab0.svg`
const imgGithub = `${assetPathPrefix}/e31ad.svg`
const imgFacebook = `${assetPathPrefix}/70124.svg`
const imgInstagram = `${assetPathPrefix}/42741.svg`
const imgLinkedin = `${assetPathPrefix}/linkedin-icon.svg`
const imgLine1 = `${assetPathPrefix}/2d226.svg`
const imgProgrammingIcon = `${assetPathPrefix}/programming-icon.svg`
const imgDevelopmentIcon = `${assetPathPrefix}/development-icon.svg`
const imgTechnicalIcon = `${assetPathPrefix}/technical-icon.svg`

const img581563659182268897793053042502331000629764086N1 = `${assetPathPrefix}/ba642.png`
const img623285865179398910581122732442702553504556033N1 = `${assetPathPrefix}/46a8e.png`
const img625070985180983354599209501403270473272173120N1 = `${assetPathPrefix}/f43fa.png`
const img639494071182369026933053048550229231404010493N1 = `${assetPathPrefix}/2a0cf.png`
const imgFrame1171276288 = `${assetPathPrefix}/4f846.png`
const eventGalleryItems = [
  {
    common: "Orientation Programme",
    binomial: "Welcome to Nibble Computer Society",
    href: "https://www.instagram.com/p/DNxMB5Z0g6w/?stkn=MzRlODBiNWFlZA==",
    photo: {
      url: imgRectangle45,
      text: "Orientation Programme event poster",
      by: "Nibble Computer Society",
    },
  },
  {
    common: "Nibble Month Workshop",
    binomial: "Learn, build, and create together",
    href: "https://www.instagram.com/p/DQzn6p7EvXs/?stkn=MzRlODBiNWFlZA==",
    photo: {
      url: imgRectangle48,
      text: "Nibble Month Workshop event poster",
      by: "Nibble Computer Society",
    },
  },
  {
    common: "INOUT Hacks",
    binomial: "Hackathon by Nibble Computer Society",
    href: "https://www.instagram.com/reel/DXtnr23iQ6Y/?stkn=MzRlODBiNWFlZA==",
    photo: {
      url: imgRectangle50,
      text: "INOUT Hacks event poster",
      by: "Nibble Computer Society",
    },
  },
  {
    common: "ATOMS Design Workshop",
    binomial: "Workshop Series · Week 2",
    photo: {
      url: img581563659182268897793053042502331000629764086N1,
      text: "ATOMS design workshop poster",
      by: "Nibble Computer Society",
    },
  },
  {
    common: "Blind Code",
    binomial: "Zealicon 2025",
    photo: {
      url: img623285865179398910581122732442702553504556033N1,
      text: "Blind Code event poster for Zealicon 2025",
      by: "Nibble Computer Society",
    },
  },
  {
    common: "Craftli",
    binomial: "Zealicon 2025 · Creative Workshop",
    photo: {
      url: img625070985180983354599209501403270473272173120N1,
      text: "Craftli creative workshop poster",
      by: "Nibble Computer Society",
    },
  },
  {
    common: "Annual Recruitment",
    binomial: "Nibble Computer Society · 2026",
    photo: {
      url: img639494071182369026933053048550229231404010493N1,
      text: "Nibble Computer Society annual recruitment poster for 2026",
      by: "Nibble Computer Society",
    },
  },
]

const eventSlides = eventGalleryItems.map((item) => ({
  image: item.photo.url,
  title: item.common,
  description: item.binomial,
  badge: item.common.toLowerCase().includes("hack")
    ? "Hackathon"
    : item.common.toLowerCase().includes("workshop")
    ? "Workshop"
    : item.common.toLowerCase().includes("code")
    ? "Competition"
    : "Event",
  linkUrl: item.href,
}))

let hasHomeLoadedOnce =
  typeof window !== "undefined" && Boolean(sessionStorage.getItem("ncs_home_loaded"))

export default function Home({ activePage = "Home", onNavigate }) {
  const splineRef = useRef(null)
  const [isSplineLoaded, setIsSplineLoaded] = useState(() => hasHomeLoadedOnce)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    let observer = null

    const hideSplineWatermark = () => {
      const viewer = splineRef.current || document.querySelector("spline-viewer")
      if (viewer?.shadowRoot) {
        // Inject an aggressive stylesheet directly into shadow DOM to hide #logo
        let style = viewer.shadowRoot.querySelector("#hide-spline-logo-style")
        if (!style) {
          style = document.createElement("style")
          style.id = "hide-spline-logo-style"
          style.textContent = `
            #logo,
            #logo *,
            a[href*="spline.design"],
            a[href*="spline.design"] *,
            .spline-watermark,
            [aria-label*="Spline"] {
              display: none !important;
              opacity: 0 !important;
              visibility: hidden !important;
              pointer-events: none !important;
              width: 0 !important;
              height: 0 !important;
              max-width: 0 !important;
              max-height: 0 !important;
              position: absolute !important;
              top: -99999px !important;
              left: -99999px !important;
              clip: rect(0, 0, 0, 0) !important;
              clip-path: inset(100%) !important;
              transform: scale(0) !important;
              overflow: hidden !important;
            }
            #spline,
            canvas {
              pointer-events: none !important;
              touch-action: none !important;
              user-select: none !important;
            }
          `
          viewer.shadowRoot.appendChild(style)
        }

        // Permanently remove logo element from DOM
        const logo =
          viewer.shadowRoot.querySelector("#logo") ||
          viewer.shadowRoot.querySelector('a[href*="spline.design"]')
        if (logo) {
          try {
            logo.remove()
          } catch (e) {
            logo.style.setProperty("display", "none", "important")
            logo.style.setProperty("opacity", "0", "important")
            logo.style.setProperty("visibility", "hidden", "important")
          }
        }

        if (viewer._logo) {
          try {
            viewer._logo.remove()
          } catch (e) {
            viewer._logo.style.display = "none"
          }
        }

        if (viewer._spline?.data?.scene?.publish?.settings?.web) {
          viewer._spline.data.scene.publish.settings.web.logo = false
        }

        if (viewer._spline?.controls?.orbitControls) {
          viewer._spline.controls.orbitControls.enabled = false
          viewer._spline.controls.orbitControls.enableRotate = false
          viewer._spline.controls.orbitControls.enablePan = false
          viewer._spline.controls.orbitControls.enableZoom = false
          viewer._spline.controls.orbitControls.autoRotate = false
        }
        if (viewer._spline?.eventManager?.publish?.orbitControls) {
          viewer._spline.eventManager.publish.orbitControls.enableRotate = false
          viewer._spline.eventManager.publish.orbitControls.enablePan = false
          viewer._spline.eventManager.publish.orbitControls.enableZoom = false
          viewer._spline.eventManager.publish.orbitControls.autoRotate = false
        }

        // Attach observer to catch any delayed re-injection by Spline
        if (!observer && typeof MutationObserver !== "undefined") {
          observer = new MutationObserver(() => {
            const el =
              viewer.shadowRoot.querySelector("#logo") ||
              viewer.shadowRoot.querySelector('a[href*="spline.design"]')
            if (el) {
              try {
                el.remove()
              } catch (e) {
                el.style.setProperty("display", "none", "important")
              }
            }
          })
          observer.observe(viewer.shadowRoot, {
            childList: true,
            subtree: true,
            attributes: true,
          })
        }
      }
    }

    // On mobile screens or subsequent visits, no 3D loading overlay needed
    const isMobileScreen = typeof window !== "undefined" && window.innerWidth < 768
    if (isMobileScreen || hasHomeLoadedOnce) {
      hasHomeLoadedOnce = true
      try {
        sessionStorage.setItem("ncs_home_loaded", "true")
      } catch (e) {}
      setIsSplineLoaded(true)
      document.body.style.overflow = ""
      document.body.classList.remove("spline-loading")

      hideSplineWatermark()
      const interval = setInterval(hideSplineWatermark, 100)
      return () => {
        clearInterval(interval)
        if (observer) {
          observer.disconnect()
        }
        document.body.style.overflow = ""
        document.body.classList.remove("spline-loading")
      }
    }

    document.body.style.overflow = "hidden"
    document.body.classList.add("spline-loading")

    let isFinished = false
    const finishLoading = () => {
      if (isFinished) return
      isFinished = true
      hasHomeLoadedOnce = true
      try {
        sessionStorage.setItem("ncs_home_loaded", "true")
      } catch (e) {}
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(() => {
            setIsSplineLoaded(true)
            document.body.style.overflow = ""
            document.body.classList.remove("spline-loading")
          }, 350)
        })
      })
    }

    hideSplineWatermark()

    const handleSplineReady = () => {
      hideSplineWatermark()
      const v = splineRef.current || document.querySelector("spline-viewer")
      if (v?._spline?.controls?.orbitControls) {
        v._spline.controls.orbitControls.enabled = false
        v._spline.controls.orbitControls.enableRotate = false
        v._spline.controls.orbitControls.enablePan = false
        v._spline.controls.orbitControls.enableZoom = false
        v._spline.controls.orbitControls.autoRotate = false
      }
      finishLoading()
    }

    const viewer = splineRef.current || document.querySelector("spline-viewer")
    if (viewer) {
      viewer.addEventListener("load-complete", handleSplineReady)
      viewer.addEventListener("loaded", handleSplineReady)
      // Only complete immediately if Spline has already finished loading previously
      if (viewer._loaded === true) {
        handleSplineReady()
      }
    }

    const interval = setInterval(hideSplineWatermark, 100)
    // Generous fallback safety timeout (18s) in case network is disconnected
    const timeout = setTimeout(() => {
      finishLoading()
    }, 18000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
      if (observer) {
        observer.disconnect()
      }
      document.body.style.overflow = ""
      document.body.classList.remove("spline-loading")
      if (viewer) {
        viewer.removeEventListener("load-complete", handleSplineReady)
        viewer.removeEventListener("loaded", handleSplineReady)
      }
    }
  }, [])

  return (
    <div
      className="bg-transparent relative w-full max-w-[1668px] min-h-screen mx-auto flex flex-col items-center pt-[27px] pb-[40px] shrink-0 overflow-hidden"
      data-node-id="1:24"
      data-name="Home"
    >
      <div
        className="content-stretch flex flex-col gap-[50px] items-center w-full max-w-[1480px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
        data-node-id="1:25"
      >
        <div
          className="content-stretch flex flex-col gap-24 md:gap-[200px] items-center relative shrink-0 w-full"
          data-node-id="1:36"
        >
          <div
            className="relative w-full flex flex-col-reverse md:flex-row items-center justify-between min-h-[calc(100vh-103px)] md:min-h-[560px] lg:min-h-[660px] xl:min-h-[720px] md:-mt-[40px] overflow-visible"
            data-node-id="1:37"
          >
            {/* Mobile View: Static Robot Image with Infinite Multi-axis Floating Effect */}
            <div
              className="relative z-0 block md:hidden w-full max-w-[210px] xs:max-w-[230px] sm:max-w-[260px] h-[190px] xs:h-[210px] sm:h-[240px] mx-auto mt-12 xs:mt-16 sm:mt-20 mb-8 select-none pointer-events-none flex flex-col items-center justify-center"
              data-node-id="1:38-mobile"
              data-name="Hero Static Robot"
            >
              <motion.img
                animate={{
                  y: [0, -14, 2, -10, 0],
                  x: [0, 4, -3, 3, 0],
                  rotate: [0, 2.5, -2, 1.5, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={imgRobotStatic}
                alt="Nibble Robot"
                className="w-full h-full object-contain filter drop-shadow-[0_16px_28px_rgba(0,0,0,0.85)]"
              />
              {/* Dynamic floating shadow beneath */}
              <motion.div
                animate={{
                  scaleX: [1, 0.82, 1.05, 0.88, 1],
                  opacity: [0.4, 0.22, 0.45, 0.28, 0.4],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-28 h-2.5 rounded-full bg-black/60 blur-[6px] -mt-1 pointer-events-none"
              />
            </div>

            {/* Desktop View: Full Interactive 3D Spline Scene */}
            <div
              className="relative z-0 hidden md:flex md:absolute md:right-[-24px] lg:right-[-12px] xl:right-[15px] md:top-1/2 md:-translate-y-1/2 w-[clamp(340px,46vw,816px)] h-[clamp(340px,43vw,725px)] select-none justify-center items-center pointer-events-none"
              data-node-id="1:38"
              data-name="Hero Spline 3D"
            >
              <spline-viewer
                ref={splineRef}
                url="https://prod.spline.design/uf2wIxgO0yhwMjDR/scene.splinecode"
                className="w-full h-full block pointer-events-none"
                style={{ width: "100%", height: "100%", pointerEvents: "none" }}
              ></spline-viewer>
            </div>

            {/* Left Typography & CTA */}
            <div
              className="flex flex-col gap-6 sm:gap-8 md:gap-[32px] lg:gap-[40px] items-center md:items-start text-center md:text-left relative z-10 w-full md:w-auto md:max-w-[58%] lg:max-w-[55%] xl:max-w-[820px] shrink-0"
              data-node-id="1:39"
            >
              <div className="flex flex-col not-italic items-center md:items-start relative shrink-0 w-full gap-4 md:gap-6">
                <div
                  className="bg-clip-text text-transparent font-['Satoshi',Arial,sans-serif] font-black text-[44px] xs:text-[54px] sm:text-[76px] md:text-[clamp(50px,5.8vw,90px)] lg:text-[clamp(78px,6.8vw,114px)] xl:text-[126px] leading-[1.02] tracking-[-0.04em] w-full select-none text-center md:text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  data-node-id="1:42"
                  style={{
                    backgroundImage: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 33.17%, #999999 100%)",
                  }}
                >
                  <p className="mb-0 text-center md:text-left">NIBBLE</p>
                  <p className="mb-0 text-center md:text-left">COMPUTER</p>
                  <p className="mb-0 text-center md:text-left">SOCIETY</p>
                </div>
              </div>

              {/* Join the Community Pill Button with Liquid Metal Shader */}
              <div className="w-full flex justify-center md:justify-start">
                <LiquidMetalButton
                  label="Join the Community"
                  onClick={() => {
                    const connectEl = document.getElementById("connect-section")
                    if (connectEl) {
                      connectEl.scrollIntoView({ behavior: "smooth" })
                    } else {
                      window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: "smooth",
                      })
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-10 md:gap-[20px] items-center relative shrink-0 w-full max-w-[1400px]"
            data-node-id="1:48"
          >
            <div className="flex flex-col items-center text-center gap-4 sm:gap-6 w-full mb-6">
              <h2
                className="font-['Satoshi',Arial,sans-serif] font-black text-[36px] sm:text-[68px] md:text-[80px] leading-none tracking-tight text-transparent bg-clip-text select-none text-center uppercase"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #FFFFFF 0%, #D4D4D8 45%, #52525B 100%)",
                  textShadow: "0 10px 40px rgba(0,0,0,0.9)",
                }}
              >
                CLUBS
              </h2>
              <p className="font-['Satoshi',Arial,sans-serif] font-normal text-[14px] sm:text-[17px] md:text-[22px] lg:text-[24px] leading-[1.5] text-white/60 md:text-white/70 max-w-[1340px] w-full px-4 text-center break-words">
                Explore our specialized clubs in Web Development, Programming, Design, and Technology. Discover new skills, unleash your creativity, and turn your ideas into reality. Join our vibrant community and build your future with us!
              </p>
            </div>

            {/* Mobile 2x2 Grid of Club Cards */}
            <div className="grid grid-cols-2 gap-3.5 w-full max-w-[420px] mx-auto px-2 md:hidden">
              {/* Card 1: Programming */}
              <div
                className="group relative h-[215px] rounded-[24px] overflow-hidden flex flex-col items-center justify-between p-3.5 shadow-lg border border-black/10 select-none cursor-pointer transition-all duration-300 active:scale-95 bg-size-[1024px_1024px,auto_auto] bg-top-left"
                style={{
                  backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(90deg, rgb(255, 109, 253) 0%, rgb(255, 109, 253) 100%)`,
                }}
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <svg className="w-[72px] h-[72px] object-contain transition-transform duration-300 group-hover:scale-110" viewBox="0 0 113 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.6688 28.1416L13.9295 40.655L30.6688 53.1682C31.224 53.5764 31.6836 54.0792 32.0212 54.6474C32.3586 55.2158 32.5674 55.8384 32.6354 56.4794C32.7034 57.1204 32.6292 57.7672 32.4172 58.3824C32.2052 58.9976 31.8596 59.569 31.4002 60.0638C30.9408 60.5586 30.3768 60.9668 29.7406 61.2652C29.1046 61.5634 28.409 61.7456 27.6938 61.8016C26.9788 61.8574 26.2586 61.7858 25.5746 61.5906C24.8904 61.3956 24.2562 61.081 23.7084 60.6648L1.95733 44.4032C1.34472 43.9454 0.851836 43.3724 0.513586 42.7246C0.175336 42.0768 0 41.3702 0 40.655C0 39.9396 0.175336 39.2332 0.513586 38.5854C0.851836 37.9376 1.34472 37.3646 1.95733 36.9066L23.7084 20.6452C24.8182 19.8293 26.2422 19.4399 27.6704 19.5618C29.0986 19.6838 30.4152 20.307 31.3334 21.296C32.2516 22.285 32.697 23.5594 32.5726 24.8416C32.448 26.1238 31.7638 27.31 30.6688 28.1416ZM110.423 36.9066L88.6718 20.6452C88.124 20.229 87.4898 19.9144 86.8058 19.7193C86.1218 19.5242 85.4016 19.4525 84.6864 19.5084C83.9714 19.5642 83.2758 19.7466 82.6396 20.0448C82.0036 20.343 81.4396 20.7514 80.9802 21.2462C80.5208 21.7408 80.1752 22.3124 79.9632 22.9276C79.7512 23.5428 79.677 24.1896 79.745 24.8306C79.813 25.4716 80.0218 26.0942 80.3592 26.6626C80.6968 27.2308 81.1564 27.7336 81.7116 28.1416L98.4508 40.655L81.7116 53.1682C81.1564 53.5764 80.6968 54.0792 80.3592 54.6474C80.0218 55.2158 79.813 55.8384 79.745 56.4794C79.677 57.1204 79.7512 57.7672 79.9632 58.3824C80.1752 58.9976 80.5208 59.569 80.9802 60.0638C81.4396 60.5586 82.0036 60.9668 82.6396 61.2652C83.2758 61.5634 83.9714 61.7456 84.6864 61.8016C85.4016 61.8574 86.1218 61.7858 86.8058 61.5906C87.4898 61.3956 88.124 61.081 88.6718 60.6648L110.423 44.4032C111.036 43.9454 111.529 43.3724 111.867 42.7246C112.205 42.0768 112.38 41.3702 112.38 40.655C112.38 39.9396 112.205 39.2332 111.867 38.5854C111.529 37.9376 111.036 37.3646 110.423 36.9066ZM72.5488 0.29376C71.8776 0.0747588 71.1648 -0.023458 70.4512 0.00471889C69.7378 0.0328958 69.0374 0.186915 68.3902 0.457978C67.743 0.72904 67.1616 1.11184 66.6794 1.5845C66.197 2.05716 65.8234 2.61044 65.5794 3.21272L36.578 74.7636C36.0864 75.9794 36.1528 77.3204 36.763 78.492C37.373 79.6638 38.4768 80.5702 39.8316 81.0122C40.4262 81.2092 41.0554 81.3096 41.6894 81.3088C42.8058 81.309 43.8954 81.001 44.8098 80.4264C45.7244 79.8518 46.4194 79.0386 46.801 78.0972L75.8024 6.54634C76.0466 5.94412 76.156 5.30468 76.1246 4.66452C76.0932 4.02434 75.9216 3.396 75.6194 2.81536C75.3172 2.23474 74.8906 1.71319 74.3638 1.28053C73.8368 0.847864 73.2202 0.512558 72.5488 0.29376Z" fill="black"/>
                  </svg>
                </div>
                <div className="w-full text-center py-1 px-2 rounded-full bg-black/15 backdrop-blur-sm">
                  <span className="font-['Satoshi',Arial,sans-serif] font-black text-[12px] tracking-[0.8px] text-black uppercase">
                    Programming
                  </span>
                </div>
              </div>

              {/* Card 2: Development */}
              <div
                className="group relative h-[215px] rounded-[24px] overflow-hidden flex flex-col items-center justify-between p-3.5 shadow-lg border border-black/10 select-none cursor-pointer transition-all duration-300 active:scale-95 bg-size-[1024px_1024px,auto_auto] bg-top-left"
                style={{
                  backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(90deg, rgb(102, 99, 255) 0%, rgb(102, 99, 255) 100%)`,
                }}
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <svg className="w-[72px] h-[72px] object-contain transition-transform duration-300 group-hover:scale-110" viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M84.714 79.8L73.836 90.678L79.8 96.6L96.6 79.8L79.8 63L73.836 68.922L84.714 79.8ZM49.686 79.8L60.564 68.922L54.6 63L37.8 79.8L54.6 96.6L60.564 90.678L49.686 79.8Z" fill="black"/>
                    <path d="M37.8 37.8C40.1196 37.8 42 35.9196 42 33.6C42 31.2804 40.1196 29.4 37.8 29.4C35.4804 29.4 33.6 31.2804 33.6 33.6C33.6 35.9196 35.4804 37.8 37.8 37.8Z" fill="black"/>
                    <path d="M25.2 37.8C27.5196 37.8 29.4 35.9196 29.4 33.6C29.4 31.2804 27.5196 29.4 25.2 29.4C22.8804 29.4 21 31.2804 21 33.6C21 35.9196 22.8804 37.8 25.2 37.8Z" fill="black"/>
                    <path d="M117.6 16.8H16.8C12.1674 16.8 8.40002 20.5716 8.40002 25.2V109.2C8.40002 113.833 12.1674 117.6 16.8 117.6H117.6C122.233 117.6 126 113.833 126 109.2V25.2C126 20.5716 122.233 16.8 117.6 16.8ZM117.6 25.2V42H16.8V25.2H117.6ZM16.8 109.2V50.4001H117.6V109.2H16.8Z" fill="black"/>
                  </svg>
                </div>
                <div className="w-full text-center py-1 px-2 rounded-full bg-black/15 backdrop-blur-sm">
                  <span className="font-['Satoshi',Arial,sans-serif] font-black text-[12px] tracking-[0.8px] text-black uppercase">
                    Development
                  </span>
                </div>
              </div>

              {/* Card 3: Designing */}
              <div
                className="group relative h-[215px] rounded-[24px] overflow-hidden flex flex-col items-center justify-between p-3.5 shadow-lg border border-black/10 select-none cursor-pointer transition-all duration-300 active:scale-95 bg-size-[1024px_1024px,auto_auto] bg-top-left"
                style={{
                  backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(90deg, rgb(253, 211, 68) 0%, rgb(253, 211, 68) 100%)`,
                }}
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    alt="Designing"
                    className="w-[72px] h-[72px] object-contain transition-transform duration-300 group-hover:scale-110"
                    src={imgVector1}
                  />
                </div>
                <div className="w-full text-center py-1 px-2 rounded-full bg-black/15 backdrop-blur-sm">
                  <span className="font-['Satoshi',Arial,sans-serif] font-black text-[12px] tracking-[0.8px] text-black uppercase">
                    Designing
                  </span>
                </div>
              </div>

              {/* Card 4: Technical */}
              <div
                className="group relative h-[215px] rounded-[24px] overflow-hidden flex flex-col items-center justify-between p-3.5 shadow-lg border border-black/10 select-none cursor-pointer transition-all duration-300 active:scale-95 bg-size-[1024px_1024px,auto_auto] bg-top-left"
                style={{
                  backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(90deg, rgb(179, 253, 68) 0%, rgb(179, 253, 68) 100%)`,
                }}
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    alt="Technical"
                    className="w-[72px] h-[72px] object-contain transition-transform duration-300 group-hover:scale-110"
                    src={imgTechnicalIcon}
                  />
                </div>
                <div className="w-full text-center py-1 px-2 rounded-full bg-black/15 backdrop-blur-sm">
                  <span className="font-['Satoshi',Arial,sans-serif] font-black text-[12px] tracking-[0.8px] text-black uppercase">
                    Technical
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Club Rows */}
            <div
              className="hidden md:flex flex-col gap-12 md:gap-[90px] items-stretch relative shrink-0 w-full"
              data-node-id="1:50"
            >
              {/* Row 1: PROGRAMMING + Pink Card */}
              <div
                className="group flex flex-col md:flex-row items-center justify-center w-full cursor-pointer transition-all duration-300 hover:scale-[1.01] gap-6 md:gap-[clamp(20px,4vw,80px)]"
                data-node-id="1:52"
              >
                <p
                  className="font-['Satoshi',Arial,sans-serif] font-black leading-none not-italic text-[30px] xs:text-[36px] sm:text-[50px] md:text-[clamp(44px,6vw,96px)] lg:text-[clamp(76px,7.5vw,120px)] xl:text-[140px] text-white tracking-tight whitespace-nowrap select-none group-hover:text-pink-100 transition-colors duration-300 text-center md:text-left"
                  data-node-id="1:53"
                >
                  PROGRAMMING
                </p>
                <div
                  className="bg-size-[1024px_1024px,auto_auto] bg-top-left h-[clamp(160px,18vw,229px)] overflow-clip relative rounded-[clamp(22px,2.5vw,34px)] w-[clamp(138px,15vw,198px)] flex items-center justify-center shadow-lg shrink-0 transition-all duration-300 group-hover:scale-[1.2] group-hover:-rotate-2 group-hover:shadow-[0_20px_40px_rgba(255,109,253,0.4)]"
                  data-node-id="1:54"
                  style={{
                    backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(90deg, rgb(255, 109, 253) 0%, rgb(255, 109, 253) 100%)`,
                  }}
                >
                  <svg className="absolute w-[clamp(80px,9vw,124px)] h-[clamp(80px,9vw,124px)] object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-50" viewBox="0 0 113 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.6688 28.1416L13.9295 40.655L30.6688 53.1682C31.224 53.5764 31.6836 54.0792 32.0212 54.6474C32.3586 55.2158 32.5674 55.8384 32.6354 56.4794C32.7034 57.1204 32.6292 57.7672 32.4172 58.3824C32.2052 58.9976 31.8596 59.569 31.4002 60.0638C30.9408 60.5586 30.3768 60.9668 29.7406 61.2652C29.1046 61.5634 28.409 61.7456 27.6938 61.8016C26.9788 61.8574 26.2586 61.7858 25.5746 61.5906C24.8904 61.3956 24.2562 61.081 23.7084 60.6648L1.95733 44.4032C1.34472 43.9454 0.851836 43.3724 0.513586 42.7246C0.175336 42.0768 0 41.3702 0 40.655C0 39.9396 0.175336 39.2332 0.513586 38.5854C0.851836 37.9376 1.34472 37.3646 1.95733 36.9066L23.7084 20.6452C24.8182 19.8293 26.2422 19.4399 27.6704 19.5618C29.0986 19.6838 30.4152 20.307 31.3334 21.296C32.2516 22.285 32.697 23.5594 32.5726 24.8416C32.448 26.1238 31.7638 27.31 30.6688 28.1416ZM110.423 36.9066L88.6718 20.6452C88.124 20.229 87.4898 19.9144 86.8058 19.7193C86.1218 19.5242 85.4016 19.4525 84.6864 19.5084C83.9714 19.5642 83.2758 19.7466 82.6396 20.0448C82.0036 20.343 81.4396 20.7514 80.9802 21.2462C80.5208 21.7408 80.1752 22.3124 79.9632 22.9276C79.7512 23.5428 79.677 24.1896 79.745 24.8306C79.813 25.4716 80.0218 26.0942 80.3592 26.6626C80.6968 27.2308 81.1564 27.7336 81.7116 28.1416L98.4508 40.655L81.7116 53.1682C81.1564 53.5764 80.6968 54.0792 80.3592 54.6474C80.0218 55.2158 79.813 55.8384 79.745 56.4794C79.677 57.1204 79.7512 57.7672 79.9632 58.3824C80.1752 58.9976 80.5208 59.569 80.9802 60.0638C81.4396 60.5586 82.0036 60.9668 82.6396 61.2652C83.2758 61.5634 83.9714 61.7456 84.6864 61.8016C85.4016 61.8574 86.1218 61.7858 86.8058 61.5906C87.4898 61.3956 88.124 61.081 88.6718 60.6648L110.423 44.4032C111.036 43.9454 111.529 43.3724 111.867 42.7246C112.205 42.0768 112.38 41.3702 112.38 40.655C112.38 39.9396 112.205 39.2332 111.867 38.5854C111.529 37.9376 111.036 37.3646 110.423 36.9066ZM72.5488 0.29376C71.8776 0.0747588 71.1648 -0.023458 70.4512 0.00471889C69.7378 0.0328958 69.0374 0.186915 68.3902 0.457978C67.743 0.72904 67.1616 1.11184 66.6794 1.5845C66.197 2.05716 65.8234 2.61044 65.5794 3.21272L36.578 74.7636C36.0864 75.9794 36.1528 77.3204 36.763 78.492C37.373 79.6638 38.4768 80.5702 39.8316 81.0122C40.4262 81.2092 41.0554 81.3096 41.6894 81.3088C42.8058 81.309 43.8954 81.001 44.8098 80.4264C45.7244 79.8518 46.4194 79.0386 46.801 78.0972L75.8024 6.54634C76.0466 5.94412 76.156 5.30468 76.1246 4.66452C76.0932 4.02434 75.9216 3.396 75.6194 2.81536C75.3172 2.23474 74.8906 1.71319 74.3638 1.28053C73.8368 0.847864 73.2202 0.512558 72.5488 0.29376Z" fill="black"/>
                  </svg>
                  <div className="absolute inset-0 p-5 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-black">
                    <span className="opacity-60 text-[10px] font-['Satoshi',Arial,sans-serif] font-black uppercase tracking-[1px] mb-2">Programming</span>
                    <p className="opacity-95 text-[12px] font-['Satoshi',Arial,sans-serif] leading-[1.3]">
                      Where problem-solving meets pure creativity. We take tricky problems and turn them into clean, working code, taking abstract logic and turning it into tools that actually work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 2: Purple Card + DEVELOPMENT */}
              <div
                className="group flex flex-col-reverse md:flex-row items-center justify-start gap-6 md:gap-[clamp(16px,2.5vw,35px)] w-full cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                data-node-id="1:56"
              >
                <div
                  className="bg-size-[1024px_1024px,auto_auto] bg-top-left h-[clamp(160px,18vw,229px)] overflow-clip relative rounded-[clamp(22px,2.5vw,34px)] w-[clamp(138px,15vw,198px)] flex items-center justify-center shadow-lg shrink-0 transition-all duration-300 group-hover:scale-[1.2] group-hover:rotate-2 group-hover:shadow-[0_20px_40px_rgba(102,99,255,0.4)]"
                  data-node-id="1:58"
                  style={{
                    backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(90deg, rgb(102, 99, 255) 0%, rgb(102, 99, 255) 100%)`,
                  }}
                >
                  <svg className="absolute w-[clamp(80px,9vw,124px)] h-[clamp(80px,9vw,124px)] object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-50" viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M84.714 79.8L73.836 90.678L79.8 96.6L96.6 79.8L79.8 63L73.836 68.922L84.714 79.8ZM49.686 79.8L60.564 68.922L54.6 63L37.8 79.8L54.6 96.6L60.564 90.678L49.686 79.8Z" fill="black"/>
                    <path d="M37.8 37.8C40.1196 37.8 42 35.9196 42 33.6C42 31.2804 40.1196 29.4 37.8 29.4C35.4804 29.4 33.6 31.2804 33.6 33.6C33.6 35.9196 35.4804 37.8 37.8 37.8Z" fill="black"/>
                    <path d="M25.2 37.8C27.5196 37.8 29.4 35.9196 29.4 33.6C29.4 31.2804 27.5196 29.4 25.2 29.4C22.8804 29.4 21 31.2804 21 33.6C21 35.9196 22.8804 37.8 25.2 37.8Z" fill="black"/>
                    <path d="M117.6 16.8H16.8C12.1674 16.8 8.40002 20.5716 8.40002 25.2V109.2C8.40002 113.833 12.1674 117.6 16.8 117.6H117.6C122.233 117.6 126 113.833 126 109.2V25.2C126 20.5716 122.233 16.8 117.6 16.8ZM117.6 25.2V42H16.8V25.2H117.6ZM16.8 109.2V50.4001H117.6V109.2H16.8Z" fill="black"/>
                  </svg>
                  <div className="absolute inset-0 p-5 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-black">
                    <span className="opacity-70 text-[10px] font-['Satoshi',Arial,sans-serif] font-black uppercase tracking-[1px] mb-2">Development</span>
                    <p className="opacity-100 text-[12px] font-['Satoshi',Arial,sans-serif] leading-[1.3]">
                      From a rough idea to something you can actually use. We build, tweak, and polish, creating web and mobile apps that bring fresh concepts to life.
                    </p>
                  </div>
                </div>
                <p
                  className="font-['Satoshi',Arial,sans-serif] font-black leading-none not-italic text-[30px] xs:text-[36px] sm:text-[50px] md:text-[clamp(44px,6vw,96px)] lg:text-[clamp(76px,7.5vw,120px)] xl:text-[140px] text-white tracking-tight whitespace-nowrap select-none group-hover:text-indigo-100 transition-colors duration-300 text-center md:text-left"
                  data-node-id="1:57"
                >
                  DEVELOPMENT
                </p>
              </div>

              {/* Row 3: DESIGNING + Yellow Card */}
              <div
                className="group flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[clamp(16px,2.5vw,35px)] w-full md:ml-[clamp(10px,3vw,60px)] cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                data-node-id="1:60"
              >
                <p
                  className="font-['Satoshi',Arial,sans-serif] font-black leading-none not-italic text-[30px] xs:text-[36px] sm:text-[50px] md:text-[clamp(44px,6vw,96px)] lg:text-[clamp(76px,7.5vw,120px)] xl:text-[140px] text-white tracking-tight whitespace-nowrap select-none group-hover:text-amber-100 transition-colors duration-300 text-center md:text-left"
                  data-node-id="1:61"
                >
                  DESIGNING
                </p>
                <div
                  className="bg-size-[1024px_1024px,auto_auto] bg-top-left h-[clamp(160px,18vw,229px)] overflow-clip relative rounded-[clamp(22px,2.5vw,34px)] w-[clamp(138px,15vw,198px)] flex items-center justify-center shadow-lg shrink-0 transition-all duration-300 group-hover:scale-[1.2] group-hover:-rotate-2 group-hover:shadow-[0_20px_40px_rgba(253,211,68,0.4)]"
                  data-node-id="1:62"
                  style={{
                    backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(90deg, rgb(253, 211, 68) 0%, rgb(253, 211, 68) 100%)`,
                  }}
                >
                  <img
                    alt="Designing"
                    className="absolute w-[clamp(80px,9vw,124px)] h-[clamp(80px,9vw,124px)] object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-50"
                    src={imgVector1}
                  />
                  <div className="absolute inset-0 p-5 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-black">
                    <span className="opacity-60 text-[10px] font-['Satoshi',Arial,sans-serif] font-black uppercase tracking-[1px] mb-2">Design</span>
                    <p className="opacity-95 text-[12px] font-['Satoshi',Arial,sans-serif] leading-[1.3]">
                      Giving ideas a visual voice. We focus on clean visuals, good user experience, and smart UI, creating designs that look great and feel effortless to use.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 4: Green Card + TECHNICAL */}
              <div
                className="group flex flex-col-reverse md:flex-row items-center justify-start gap-6 md:gap-[clamp(16px,2.5vw,35px)] w-full md:ml-[clamp(10px,3.5vw,70px)] cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                data-node-id="1:64"
              >
                <div
                  className="bg-size-[1024px_1024px,auto_auto] bg-top-left h-[clamp(160px,18vw,229px)] overflow-clip relative rounded-[clamp(22px,2.5vw,34px)] w-[clamp(138px,15vw,198px)] flex items-center justify-center shadow-lg shrink-0 transition-all duration-300 group-hover:scale-[1.2] group-hover:rotate-2 group-hover:shadow-[0_20px_40px_rgba(179,253,68,0.4)]"
                  data-node-id="1:66"
                  style={{
                    backgroundImage: `url("${imgFrame1171276288}"), linear-gradient(90deg, rgb(179, 253, 68) 0%, rgb(179, 253, 68) 100%)`,
                  }}
                >
                  <img
                    alt="Technical"
                    className="absolute w-[clamp(80px,9vw,124px)] h-[clamp(80px,9vw,124px)] object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-50"
                    src={imgTechnicalIcon}
                  />
                  <div className="absolute inset-0 p-5 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-black">
                    <span className="opacity-60 text-[10px] font-['Satoshi',Arial,sans-serif] font-black uppercase tracking-[1px] mb-2">Technical</span>
                    <p className="opacity-95 text-[12px] font-['Satoshi',Arial,sans-serif] leading-[1.3]">
                      Exploring what's coming next in tech. We dive hands-on into AI, open-source projects, and new tools, figuring out how the newest tech works under the hood.
                    </p>
                  </div>
                </div>
                <p
                  className="font-['Satoshi',Arial,sans-serif] font-black leading-none not-italic text-[30px] xs:text-[36px] sm:text-[50px] md:text-[clamp(44px,6vw,96px)] lg:text-[clamp(76px,7.5vw,120px)] xl:text-[140px] text-white tracking-tight whitespace-nowrap select-none group-hover:text-lime-100 transition-colors duration-300 text-center md:text-left"
                  data-node-id="1:65"
                >
                  TECHNICAL
                </p>
              </div>
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <section className="mx-auto w-full max-w-[1446px] text-center shrink-0">
            <div className="flex flex-col items-center text-center gap-4 sm:gap-6 w-full mb-6">
              <h2
                className="font-['Satoshi',Arial,sans-serif] font-black text-[36px] sm:text-[68px] md:text-[80px] leading-none tracking-tight text-transparent bg-clip-text select-none text-center uppercase"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #FFFFFF 0%, #D4D4D8 45%, #52525B 100%)",
                  textShadow: "0 10px 40px rgba(0,0,0,0.9)",
                }}
              >
                HIGHLIGHTS
              </h2>
              <p className="font-['Satoshi',Arial,sans-serif] font-normal text-[14px] sm:text-[17px] md:text-[22px] lg:text-[24px] leading-[1.5] text-white/60 md:text-white/70 max-w-[1340px] w-full px-4 text-center break-words">
                From brainstorming ideas to building amazing things, every moment tells a story. Take a look at our events, workshops, and the people who make our community thrive.
              </p>
            </div>

            <div className="relative mt-8 md:mt-12 w-full overflow-hidden bg-transparent">
              <ImageAutoSlider images={highlightImages} />
            </div>
          </section>
          <div
            className="flex flex-col gap-[20px] items-center relative shrink-0 w-full max-w-[1446px] overflow-hidden"
            data-node-id="1:151"
          >
            <h2
              className="font-['Satoshi',Arial,sans-serif] font-black text-[36px] sm:text-[68px] md:text-[80px] leading-none tracking-tight text-transparent bg-clip-text select-none text-center uppercase relative shrink-0 w-full"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #FFFFFF 0%, #D4D4D8 45%, #52525B 100%)",
                textShadow: "0 10px 40px rgba(0,0,0,0.9)",
              }}
            >
              EVENTS
            </h2>
            <div
              className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] items-center relative shrink-0 w-full"
              data-node-id="1:153"
            >
              <div className="font-['Satoshi',Arial,sans-serif] font-medium text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px] text-center text-white/60 md:text-white/70 tracking-normal leading-[1.6] max-w-[1200px] w-full mt-2 mb-6 px-4 break-words">
                <p>
                  Ideas worth sharing. Experiences worth remembering. Join us for events that spark curiosity, inspire creativity, and bring our community together.
                </p>
              </div>
              <CarouselStacked slides={eventSlides} />
            </div>
          </div>
          <div className="w-full -mt-12 md:-mt-[120px]">
            <Footer />
          </div>
        </div>
      </div>

      {/* Full-Screen Loading Screen: Black background with NCS Logo in the middle */}
      {isMounted &&
        createPortal(
          <AnimatePresence>
            {!isSplineLoaded && (
              <motion.div
                className="fixed inset-0 z-[999999] w-screen h-screen bg-black flex items-center justify-center p-6 select-none overflow-hidden"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  initial={{ opacity: 0.85, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-[140px] xs:w-[160px] sm:w-[190px] md:w-[220px] flex items-center justify-center pointer-events-none select-none"
                >
                  <img
                    src={imgNcsLogoWhite}
                    alt="Nibble Computer Society"
                    className="w-full h-auto object-contain filter drop-shadow-[0_2px_16px_rgba(255,255,255,0.2)]"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  )
}

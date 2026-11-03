import React, { useEffect } from "react"
import GsapBigTextHero from "../components/about/GsapBigTextHero"
import TimelineBlock01 from "../components/TimelineBlock01"
import TeamMembersMarquee from "../components/about/TeamMembersMarquee"
import Footer from "../components/Footer"

export default function About({ activePage = "About" }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
    document.body.style.overflow = ""
    document.body.classList.remove("spline-loading")
  }, [])

  return (
    <div
      className="bg-transparent relative w-full min-h-screen mx-auto flex flex-col items-center justify-start"
      data-node-id="about-page"
      data-name="About"
    >
      {/* 1. Big animated text that covers the screen */}
      <GsapBigTextHero />

      {/* 2. What We Do — vertical scroll timeline */}
      <TimelineBlock01 />

      {/* 3. Creative Team Members Marquee Section */}
      <TeamMembersMarquee />

      {/* 4. Let's Connect & Rotating People Footer */}
      <Footer />
    </div>
  )
}


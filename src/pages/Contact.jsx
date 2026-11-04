import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  MapPin,
  CheckCircle2,
  Copy,
  ExternalLink,
  Sparkles,
} from "lucide-react"
import Footer from "../components/Footer"
import { playSfx } from "../lib/soundFx"

function SocialSvg({ type }) {
  if (type === "github") {
    return (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    )
  }
  if (type === "linkedin") {
    return (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  }
  if (type === "x") {
    return (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  }
  if (type === "instagram") {
    return (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  }
  return null
}

export default function Contact({ activePage = "Contact", onNavigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ncs.jssaten@gmail.com")
    setCopiedEmail(true)
    playSfx("success")
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const faqs = [
    {
      q: "Who can reach out to Nibble Computer Society?",
      a: "Anyone! Whether you are a student exploring tech domains, an organizer looking to co-host a hackathon, or a company seeking sponsorship collaborations, we are always eager to connect.",
    },
    {
      q: "How can we collaborate on hackathons like INOUT Hacks?",
      a: "Drop us an email at ncs.jssaten@gmail.com with your proposal, brand partnership deck, or mentor inquiries. Our team usually responds within 24–48 hours.",
    },
    {
      q: "Where is the NCS workspace located on campus?",
      a: "We are based in the Computer Science & Engineering department (Room AB-3), JSS Academy of Technical Education, Sector 62, Noida.",
    },
  ]

  const [activeFaq, setActiveFaq] = useState(null)

  return (
    <div
      className="bg-transparent relative w-full max-w-[1668px] min-h-screen mx-auto flex flex-col items-center pt-2 sm:pt-4 md:pt-6 pb-[40px] shrink-0 overflow-hidden select-none"
      data-node-id="contact-page"
      data-name="Contact"
    >
      <div className="content-stretch flex flex-col gap-12 sm:gap-16 md:gap-20 items-center w-full max-w-[1518px] px-4 md:px-8">
        {/* Hero Header */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6 w-full max-w-[1280px] pt-4 sm:pt-6">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Satoshi',Arial,sans-serif] font-black text-[42px] sm:text-[68px] md:text-[88px] lg:text-[102px] leading-[1.02] tracking-tight text-transparent bg-clip-text select-none text-center uppercase"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #FFFFFF 0%, #D4D4D8 45%, #52525B 100%)",
              textShadow: "0 10px 40px rgba(0,0,0,0.9)",
            }}
          >
            CONTACT US
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Satoshi',Arial,sans-serif] font-normal text-[15px] sm:text-[18px] md:text-[22px] leading-[1.55] text-white/70 max-w-[960px] w-full px-2 text-center"
          >
            Have a project idea, want to sponsor a flagship hackathon, or have questions about student inductions? Get in touch with our team below.
          </motion.p>
        </div>

        {/* 3 Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-[1360px]">
          {/* Card 1: Direct Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-between p-7 sm:p-8 rounded-[32px] bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/25 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="size-13 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/10 text-white/70 hover:text-white text-xs font-medium cursor-pointer transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 size={13} className="text-emerald-400" />
                      <span className="text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <h2 className="font-['Satoshi',Arial,sans-serif] font-bold text-xl sm:text-2xl text-white">
                Direct Email
              </h2>
              <p className="text-white/60 text-xs sm:text-sm mt-2 leading-relaxed">
                Reach out to our core executive team for inquiries, partnerships, and collaborations.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href="mailto:ncs.jssaten@gmail.com"
                className="inline-block text-white font-mono text-sm sm:text-base font-semibold hover:text-blue-400 transition-colors break-all"
              >
                ncs.jssaten@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Card 2: Campus Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col justify-between p-7 sm:p-8 rounded-[32px] bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/25 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="size-13 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <a
                  href="https://maps.google.com/?q=JSS+Academy+of+Technical+Education+Noida"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/10 text-white/70 hover:text-white text-xs font-medium cursor-pointer transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <h2 className="font-['Satoshi',Arial,sans-serif] font-bold text-xl sm:text-2xl text-white">
                Campus Location
              </h2>
              <p className="text-white/60 text-xs sm:text-sm mt-2 leading-relaxed">
                Room AB-3, Computer Science & Engineering Department<br />
                JSS Academy of Technical Education, C-20/1, Sector 62, Noida, UP 201301
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <span className="text-white/40 text-xs font-mono">JSSATE NOIDA CAMPUS</span>
            </div>
          </motion.div>

          {/* Card 3: Social Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col justify-between p-7 sm:p-8 rounded-[32px] bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/25 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="size-13 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Sparkles size={24} />
                </div>
                <span className="text-[11px] font-mono text-white/50 px-2.5 py-1 rounded-full bg-white/[0.06]">
                  SOCIAL DOCK
                </span>
              </div>

              <h2 className="font-['Satoshi',Arial,sans-serif] font-bold text-xl sm:text-2xl text-white">
                Connect Online
              </h2>
              <p className="text-white/60 text-xs sm:text-sm mt-2 leading-relaxed">
                Follow our official channels for event announcements, workshops, and releases.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <div className="grid grid-cols-4 gap-2.5">
                <a
                  href="https://github.com/ncs-jss"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/15 border border-white/10 hover:border-white/30 text-white transition-all hover:scale-105 active:scale-95"
                >
                  <SocialSvg type="github" />
                  <span className="text-[9px] mt-1 text-white/60">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/company/hackncs"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/15 border border-white/10 hover:border-white/30 text-white transition-all hover:scale-105 active:scale-95"
                >
                  <SocialSvg type="linkedin" />
                  <span className="text-[9px] mt-1 text-white/60">LinkedIn</span>
                </a>
                <a
                  href="https://instagram.com/hackncs"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/15 border border-white/10 hover:border-white/30 text-white transition-all hover:scale-105 active:scale-95"
                >
                  <SocialSvg type="instagram" />
                  <span className="text-[9px] mt-1 text-white/60">Instagram</span>
                </a>
                <a
                  href="https://twitter.com/hackncs"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/15 border border-white/10 hover:border-white/30 text-white transition-all hover:scale-105 active:scale-95"
                >
                  <SocialSvg type="x" />
                  <span className="text-[9px] mt-1 text-white/60">X</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQs Accordion */}
        <div className="w-full max-w-[1360px] flex flex-col items-center pt-4 sm:pt-8">
          <div className="text-center mb-8">
            <h2 className="font-['Satoshi',Arial,sans-serif] font-bold text-2xl sm:text-3xl text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-1">
              Quick answers about contacting and collaborating with NCS.
            </p>
          </div>

          <div className="w-full max-w-[960px] flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden transition-all hover:border-white/20"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between text-white font-medium text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-white/50 text-xl font-mono ml-4">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 pt-3">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="w-full mt-10 md:mt-16">
          <Footer />
        </div>
      </div>
    </div>
  )
}

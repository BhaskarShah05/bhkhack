
import Footer from "../components/Footer"
import { LiquidMetalButton } from "../components/LiquidMetalButton"
import { ExternalLink } from "lucide-react"
import { publicAsset } from "../lib/publicAsset"
import { ProjectCard } from "../components/ProjectCard"

const imgJssInfotech = publicAsset("projects/jss-infotech.webp?v=2")
const imgMcqModule = publicAsset("projects/mcq-module.webp?v=2")
const imgEventManager = publicAsset("projects/event-manager.webp?v=2")
const imgTnPortal = publicAsset("projects/tnp-portal.webp?v=2")
const imgKnowYourCollege = publicAsset("projects/know-your-college.webp?v=2")
const imgCodepad = publicAsset("projects/codepad.webp?v=2")
const imgRegistrationModule = publicAsset("projects/registration-module.webp?v=2")
const imgPlexus = publicAsset("projects/plexus.webp?v=2")
const imgNcsLogo = publicAsset("assets/d3aad.svg")
const imgVector = publicAsset("assets/79f69.svg")
const imgVector1 = publicAsset("assets/54ba9.svg")
const imgLine1 = publicAsset("assets/57d57.svg")

function ViewProjectButton({ url, className = "" }) {
  return (
    <a
      href={url || "https://github.com/ncs-jss"}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-[12px] bg-[#212124]/90 hover:bg-[#2d2d32] border border-white/25 hover:border-white/50 text-[#f4f4f5] hover:text-white transition-all duration-200 shadow-md backdrop-blur-md cursor-pointer select-none group/vp ${className}`}
    >
      <span className="font-['Satoshi',Arial,sans-serif] text-[15px] font-medium tracking-tight whitespace-nowrap">
        View Project
      </span>
      <ExternalLink className="size-4 text-white/80 group-hover/vp:text-white transition-colors shrink-0" />
    </a>
  )
}

const allProjects = [
  {
    name: "JSS Infotech",
    image: imgJssInfotech,
    description:
      "A digital hub of knowledge, bringing you updates on notices, assignments, and placement opportunities.",
    technologies: ["Django", "Python", "PostgreSQL"],
    url: "https://github.com/ncs-jss",
  },
  {
    name: "MCQ Module",
    image: imgMcqModule,
    description:
      "Picture this: an online theater for teachers and societies, where multiple-choice questions take the stage and the results pop up like magic tricks!",
    technologies: ["Php", "Laravel", "MySQL"],
    url: "https://github.com/ncs-jss",
  },
  {
    name: "Event Manager",
    image: imgEventManager,
    description:
      "A college event-tracking web app, keeping students informed about daily happenings on campus. Stay in the loop, never miss out!",
    technologies: ["React", "Node", "MongoDB"],
    url: "https://github.com/ncs-jss",
  },
  {
    name: "T & P Portal",
    image: imgTnPortal,
    description:
      "An online portal for managing & automating the recruitment procedure for T&P Centre.",
    technologies: ["Python", "Html", "JavaScript"],
    url: "https://github.com/ncs-jss",
  },
  {
    name: "Know Your College",
    image: imgKnowYourCollege,
    description:
      "'Know Your College', is a nifty web application that's your virtual compass for navigating the expansive world of JSS. It's your go-to guide for unraveling the intriguing corners of the college and its lively neighborhood.",
    technologies: ["React", "Node", "MongoDB"],
    url: "https://github.com/ncs-jss/Proj_kc01",
  },
  {
    name: "Codepad",
    image: imgCodepad,
    description:
      "An online IDE (compiler) for running programs in C, C++, Python, Java with frequent questions to solve.",
    technologies: ["PHP", "Laravel", "MySQL"],
    url: "https://github.com/ncs-jss/Code-Pad",
  },
  {
    name: "Registration Module",
    image: imgRegistrationModule,
    description:
      "A platform for registration of students with record of their Unique IDs for various events like Zealicon.",
    technologies: ["JavaScript"],
    url: "https://github.com/ncs-jss/Registration_Module",
  },
  {
    name: "Plexus",
    image: imgPlexus,
    description:
      "It is an online platform to host all kinds of digital events like Quizes etc. without any friction or technical know-how.",
    technologies: ["PHP", "Laravel", "MySQL"],
    url: "https://github.com/ncs-jss/plexus",
  },
]

const additionalProjects = allProjects.slice(4)

export default function Project({ activePage = "Project", onNavigate }) {
  return (
    <div
      className="bg-transparent relative w-full max-w-[1571px] min-h-screen mx-auto flex flex-col items-center pt-[27px] pb-[40px] shrink-0"
      data-node-id="1:187"
      data-name="project"
    >
      <div
        className="content-stretch flex flex-col gap-[50px] items-center w-full max-w-[1571px] px-4 md:px-8"
        data-node-id="1:189"
      >

        <div
          className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0 w-full"
          data-node-id="1:201"
        >
          <div className="flex flex-col items-center text-center gap-6 w-full mb-6">
            <p
              className="bg-clip-text font-['Satoshi:Black','Poppins:SemiBold',sans-serif] relative shrink-0 text-[48px] sm:text-[64px] md:text-[80px] text-[transparent] tracking-[-2px] md:tracking-[-3.2px] whitespace-nowrap"
              style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 263 108' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(13.15 0 0 22.055 131.5 54)'><stop stop-color='rgba(153,153,153,1)' offset='0.33'/><stop stop-color='rgba(204,204,204,1)' offset='0.665'/><stop stop-color='rgba(255,255,255,1)' offset='1'/></radialGradient></defs></svg>\")" }}
            >
              PROJECTS
            </p>
            <p className="font-['Satoshi',Arial,sans-serif] font-normal text-[14px] sm:text-[18px] md:text-[26px] lg:text-[34px] leading-[1.5] text-white/60 md:text-white/70 max-w-[1340px] w-full px-4 text-center tracking-tight break-words">
              We build a tech-driven campus culture by hosting hands-on events and building tools for students and faculty. Our projects help the college community stay updated, sharpen their problem-solving skills, and stay connected.
            </p>
          </div>
          {/* Project Showcase Cards Grid matching design (3-3-2 layout on desktop, responsive on tablet/mobile) */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-x-10 md:gap-y-12 items-start relative shrink-0 w-full max-w-[1240px] mx-auto px-2">
            {allProjects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                url={project.url}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

"use client";

import Timeline from "@/components/ui/timeline-01-utils/timeline";
import { publicAsset } from "@/lib/publicAsset";

const timelineData = [
  {
    title: "Curiosity Into Creation",
    description:
      "Every great journey begins with a question. At NCS, students explore technology, discover their interests, and find the confidence to turn curiosity into creation.",
    date: "01",
    image: publicAsset("assets/about-learning-session.webp"),
  },
  {
    title: "Professional Mindset",
    description:
      "Deadlines, responsibilities, teamwork, and accountability become part of the journey. We help students develop the mindset that the professional world expects.",
    date: "02",
    image: publicAsset("assets/highlights/web/IMG_1634.webp"),
  },
  {
    title: "Hands-On Experience",
    description:
      "From writing the first line of code to designing an interface or developing a complete project, we turn learning into hands-on experience and ideas into something real.",
    date: "03",
    image: publicAsset("assets/highlights/web/IMG_3012.webp"),
  },
  {
    title: "Growing Together",
    description:
      "Behind every project, hackathon, and breakthrough are people who challenge, support, and inspire each other. At NCS, we grow together and celebrate every win together.",
    date: "04",
    image: publicAsset("assets/about-community-family.webp"),
  },
  {
    title: "Voice & Communication",
    description:
      "Great minds need more than great ideas. Through discussions, presentations, and shared experiences, students learn to communicate confidently and make their ideas heard.",
    date: "05",
    image: publicAsset("assets/about-tech-events.webp"),
  },
  {
    title: "Who We Become",
    description:
      "We come together as students with potential and grow into programmers, developers, designers, and professionals ready to take on new challenges. Because NCS isn't just about what we build — it's about who we become.",
    date: "06",
    image: publicAsset("assets/highlights/web/IMG_2979.webp"),
  },
];

const TimelineBlock01 = () => {
  return (
    <section className="overflow-hidden w-full py-12 md:py-20 font-satoshi">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 font-satoshi">
        <div className="border-x border-t border-b border-white/10 rounded-t-3xl md:border-x border-r bg-white/[0.01]">
          <Timeline items={timelineData} />
        </div>
        <div className="border-x border-t border-white/10 h-18 md:h-28 rounded-b-3xl bg-white/[0.02]" />
      </div>
    </section>
  );
};

export default TimelineBlock01;

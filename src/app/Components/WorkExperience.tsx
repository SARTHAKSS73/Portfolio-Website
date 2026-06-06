"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaRotateLeft } from "react-icons/fa6";
import { LuFlame, LuArrowRight } from "react-icons/lu";

type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  timeline: string;
  location: string;
  description: string;
  image: string;
  backTitle: string;
  details: string[];
};

const experienceItems: ExperienceItem[] = [
  {
    id: "weaddo",
    title: "Data Analyst & Automation Intern",
    company: "Weaddo: Business Acceleration Studio",
    timeline: "May 2025 – July 2025",
    location: "Gurgaon, India",
    description: "Architected smart business acceleration workflows, data pipelines, and end-to-end operational automation structures.",
    image: "/images/da.png",
    backTitle: "Skills & Impact Gained",
    details: [
      "Engineered automated data collection script layers to track and process KPIs efficiently.",
      "Developed automated reporting workflows to streamline KPI monitoring and reduce manual analysis efforts across business operations.",
      "Assisted in building data-driven dashboards and analytical reports to support strategic decision-making and performance tracking.",
      "Optimized internal business intelligence pipelines for real-time tracking.",
      "Gained: Automation Scripting, Pipeline Optimization, Data Wrangling, Enterprise Analytics."
    ]
  },
  {
    id: "apollo",
    title: "Web Development Intern",
    company: "Apollo Health City",
    timeline: "June 2024 – July 2024",
    location: "Hyderabad, India",
    description: "Developed frontend user interfaces and clean digital logic modules supporting healthcare management services.",
    image: "/images/webdev.png",
    backTitle: "Skills & Impact Gained",
    details: [
      "Built clean, responsive UI layouts ensuring fast rendering and accessibility profiles.",
      "Implemented interactive frontend components and optimized page responsiveness for seamless user experience across devices.",
      "Worked on debugging UI issues and enhancing dashboard usability for healthcare management workflows.",
      "Collaborated on feature code integration across medical portal dashboards.",
      "Gained: Frontend Architecture, Component State Logic, API Data Binding, UI/UX Consistency."
    ]
  },
  {
    id: "clavictor",
    title: "HOD Student Feedback & Physics Faculty",
    company: "Clavictor Academy Pvt. Ltd",
    timeline: "October 2022 – June 2023",
    location: "Remote",
    description: "Monitored, trained, and managed staff operations while delivering high-level Physics instruction for competitive JEE batches.",
    image: "/images/physics.png",
    backTitle: "Skills & Impact Gained",
    details: [
      "Supervised, led, and systematically trained cross-functional staff evaluation teams.",
      "Automated student feedback collection and evaluation workflows to improve reporting efficiency and data organization.",
      "Mentored and guided engineering aspirants through structured problem-solving sessions and academic performance reviews.",
      "Formulated rigorous curriculum modules for high-tier engineering aspirants.",
      "Gained: Team Leadership, Public Speaking, Analytical Evaluation, Process Training."
    ]
  },
  {
    id: "sports-rep",
    title: "President & Captain ",
    company: "EKSM SPORTS COMMITTEE ",
    timeline: "August 2023 – Present",
    location: "Indore, India",
    description: "Leads campus sports initiatives as President of Eklavya Khel Spardha Manch while captaining the Swimming and Chess teams at SGSITS.",
    image: "/images/sports.png",
    backTitle: "Skills & Impact Gained",
    details: [
      "Coordinates inter-college tournament rosters, training schedules, and team logs.",
      "Organized and supervised inter-department sports events, ensuring smooth coordination of teams, schedules, and tournament logistics.",
      "Led the Swimming and Chess teams at SGSITS while promoting competitive excellence, discipline, and team collaboration.",
      "Maintains advanced personal competitive metrics (Peak Chess Rating: 1936; National swimmer ).",
      "Gained: Strategic Planning, High-Pressure Decisions, Resource Management, Logistics Planning."
    ]
  },
  {
    id: "nss-content",
    title: "Content Head",
    company: "National Service Scheme (NSS)",
    timeline: "April 2023 – Present",
    location: "SGSITS Indore",
    description: "Directs media campaign copy, structural document writing, and core content strategy maps for social welfare initiatives.",
    image: "/images/content.png",
    backTitle: "Skills & Impact Gained",
    details: [
      "Spearheaded public relations writing for community outreach and healthcare camps.",
      "Managed content creation and digital outreach campaigns for NSS events, social initiatives, and community engagement programs.",
      "Designed impactful promotional and awareness content to increase student participation and strengthen campus outreach efforts.",
      "Drafted narrative frameworks to elevate engagement across campus digital assets.",
      "Gained: High-Impact Writing, Campaign Management, Brand Strategy, Community Relations."
    ]
  },
  {
    id: "campus-amb",
    title: "Campus Ambassador",
    company: "IIT Indore ",
    timeline: "November 2023 – March 2025",
    location: "Indore, India",
    description: "Managed cross-campus strategic brand growth, community synchronization, and operational outreach frameworks.",
    image: "/images/campus.png",
    backTitle: "Skills & Impact Gained",
    details: [
      "Drove promotional funnels and target user registrations for regional tech tracks.",
      "Promoted events and programs while driving student engagement and campus participation initiatives.",
      "Coordinated communication between IIT Indore organizers and SGSITS students to ensure smooth event outreach and registrations",
      "Acted as primary operational link bridging SGSITS cohorts with IIT event organizers.",
      "Gained: Strategic Marketing, Corporate Communications, Networking, Funnel Strategy."
    ]
  }
];

const WorkExperience = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});

  const handleFlip = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="about" className="relative py-24 scroll-mt-24">
      {/* Background Glow Effect */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[90vw] sm:w-[760px] md:w-[1000px] h-[280px] sm:h-[380px] md:h-[520px] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(168,85, 247, 0.6) 0%, rgba(126,34, 206, 0.0) 70%)",
        }}
      />
      
      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-12">
          Work Experience and Positions of Responsibilities
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8 perspective-1000">
          {experienceItems.map((item) => {
            const isFlipped = !!flippedCards[item.id];

            return (
              <div
                key={item.id}
                className="relative w-full h-[390px] sm:h-[340px] md:h-[350px] rounded-2xl flex"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* INNER FLIP LAYER */}
                <div
                  className="relative w-full flex-1 duration-500 transition-transform flex"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  
                  {/* FRONT FACE */}
                  <div
                    className="absolute inset-0 w-full h-full p-5 sm:p-6 md:p-7 bg-[#140a26] border border-[#2f1c55] rounded-2xl shadow-[0_10px_40px_rgba(113, 39, 186, 0.25)] flex flex-col justify-between group hover:border-[#7c3aed]/60 hover:shadow-[0_20px_60px_rgba(113, 39, 186, 0.40)] transition-all duration-300"
                    style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                  >
                    {/* Front Card Glow */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-90"
                      style={{
                        background:
                          "radial-gradient(120% 80% at 80% 10%, rgba(125,58, 242, 0.35) 0%, rgba(126,58, 242, 0.15) 25%), rgba(18, 8, 36, 0) 60%",
                      }}
                    />

                    <div className="relative flex flex-col items-center gap-3">
                      {/* Image Asset Container */}
                      <div className="relative shrink-0 w-24 h-24 sm:w-26 sm:h-26 md:w-28 md:h-28 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105 flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain drop-shadow-[0_12px_25px_rgba(168,85,247,0.4)]"
                          priority
                        />
                      </div>

                      {/* Header Copy Text Blocks */}
                      <div className="w-full text-center">
                        <h4 className="text-base sm:text-md md:text-lg font-semibold text-white mt-0 mb-1 leading-snug">
                          {item.title}
                        </h4>
                        <div className="flex flex-col items-center gap-0.5 text-xs text-[#a855f7] font-medium tracking-wide">
                          <span className="opacity-90">{item.company}</span>
                          <span className="text-white/40 text-[10px] sm:text-[11px] mt-0.5">{item.timeline}</span>
                        </div>
                        <p className="mt-3 text-xs sm:text-[13px] text-white/60 leading-relaxed max-h-[75px] overflow-y-auto no-scrollbar">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Triggers */}
                    <div className="relative z-20 mt-4 flex justify-center w-full">
                      <button
                        onClick={(e) => handleFlip(item.id, e)}
                        className="inline-flex items-center text-[11px] md:text-xs px-5 py-1.5 rounded-full bg-[#1a0c2e] border border-[#3e1d6d] text-white/80 hover:text-white hover:border-[#a855f7] hover:bg-[#220e3d] transition-all cursor-pointer gap-1 group/btn"
                      >
                        Learn More <LuArrowRight className="size-3 transition-transform group-hover/btn:translate-x-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div
                    onClick={(e) => handleFlip(item.id, e)}
                    className="absolute inset-0 w-full h-full p-5 sm:p-6 md:p-7 bg-[#160c2b] border border-[#7c3aed]/50 rounded-2xl shadow-[0_0_35px_rgba(113,39,186,0.3)] flex flex-col justify-between text-left cursor-pointer group"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="flex flex-col h-[calc(100%-24px)]">
                      {/* Back Side Navigation Header */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 shrink-0">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#c084fc] tracking-wider uppercase">
                          <LuFlame className="size-3.5 text-[#a855f7] animate-pulse" />
                          {item.backTitle}
                        </div>
                        <div className="p-1 rounded-md text-white/40 group-hover:text-[#c084fc] transition-colors">
                          <FaRotateLeft className="size-3.5" />
                        </div>
                      </div>

                      {/* Custom List Output Details */}
                      <ul className="space-y-2 overflow-y-auto pr-1 flex-1 no-scrollbar">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-white/80 leading-relaxed">
                            <span className="text-[#a855f7] mt-0.5 shrink-0">▪</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer Reverse Indicator */}
                    <span className="text-[10px] text-center text-white/30 group-hover:text-[#c084fc] transition-colors block underline underline-offset-2 shrink-0 mt-2">
                      Click anywhere on this card to flip back
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
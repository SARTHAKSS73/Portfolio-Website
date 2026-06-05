"use client";
import React, { useState } from "react";
import { FaChevronRight, FaChessPawn, FaRotateLeft } from "react-icons/fa6";
import { LuAward, LuUsers, LuFlame } from "react-icons/lu";

// 1. Swimmer icon defined at the top safely
const SwimmerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1" />
    <path d="M2 16a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1" />
    <path d="M14 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
    <path d="m9 13 3-2 3 2" />
  </svg>
);

// 2. Enhanced Data Array containing Front details AND Back details
const activities = [
  {
    id: "chess",
    title: "Chess Player",
    description: "Advanced rated Chess Player with a passion for strategy & tactical focus.",
    icon: <FaChessPawn className="size-6 text-[#c084fc]" />,
    // Back side details
    backTitle: "Chess Milestones & Stats",
    details: [
      "Current Peak Rating: 1936",
      "Winner of SGSITS Inter-Branch Championship",
      "Strategic Core: Deep tactical evaluation, rapid decision frameworks",
    ]
  },
  {
    id: "swim",
    title: "Swimming",
    description: "Silver Medalist at State Level. Discipline, consistency, and endurance.",
    icon: <SwimmerIcon className="size-6 text-[#c084fc]" />,
    // Back side details
    backTitle: "Aquatic Competitions",
    details: [
      "National Level Competitor (December 2023)",
      "State Championship: Won Silver & Bronze Medals (Oct 2023)",
      "Core Traits: High-end physical pacing & tactical breathing loops",
    ]
  },
  {
    id: "nss",
    title: "NSS – B Certificate",
    description: "Actively contributed to social initiatives and community service systems.",
    icon: <LuUsers className="size-6 text-[#c084fc]" />,
    // Back side details
    backTitle: "Social Impact & Leadership",
    details: [
      "Awarded Official NSS 'B' Core Certification",
      "Managed rural community healthcare awareness camps",
      "Organized large-scale blood donation drives on campus",
    ]
  },
  {
    id: "sports",
    title: "Sports Representative",
    description: "Proudly represented SGSITS and managed athletic events.",
    icon: <LuAward className="size-6 text-[#c084fc]" />,
    // Back side details
    backTitle: "Event Management & Roles",
    details: [
      "E-sports Organizer: Hosted major campus tournaments (BGMI / Free Fire)",
      "Coordinated inter-college sport rosters & scheduling logs",
      "Skills: Logistics synchronization, large crowd crisis handling",
    ]
  },
];

export const BeyondCode = () => {
  // Track which cards are flipped using an object state dictionary
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full flex flex-col space-y-6">
      {/* Section Title */}
      <div>
        <h3 className="text-2xl font-bold text-white tracking-wide">
          Beyond Code
        </h3>
        <div className="w-12 h-[3px] bg-[#a855f7] mt-2 rounded-full shadow-[0_0_8px_#a855f7]" />
      </div>

      {/* Cards Stack with 3D Viewport Perspective */}
      <div className="flex flex-col gap-5 perspective-1000">
        {activities.map((activity) => {
          const isFlipped = !!flippedCards[activity.id];

          return (
            <div
              key={activity.id}
              onClick={() => toggleFlip(activity.id)}
              className="relative w-full h-[124px] cursor-pointer select-none group transition-transform duration-300 active:scale-[0.99]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* INNER ANIMATION WRAPPER CONTAINER */}
              <div
                className={`relative w-full h-full duration-500 transition-transform`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                
                {/* ==================== FRONT SIDE ==================== */}
                <div
                  className="absolute inset-0 w-full h-full flex items-center justify-between bg-[#110c1f]/40 border border-white/5 p-5 rounded-2xl backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.15)] group-hover:border-purple-500/20 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.1)] transition-all duration-300"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                  <div className="flex items-center gap-5">
                    {/* Icon Box */}
                    <div className="flex items-center justify-center size-14 bg-[#161024]/90 border border-white/10 rounded-xl group-hover:border-purple-500/40 transition-all duration-300">
                      <div className="drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                        {activity.icon}
                      </div>
                    </div>
                    {/* Copy */}
                    <div className="flex flex-col">
                      <h4 className="text-lg font-bold text-white tracking-wide group-hover:text-[#c084fc] transition-colors duration-200">
                        {activity.title}
                      </h4>
                      <p className="text-sm text-white/50 font-normal leading-snug max-w-sm mt-0.5 pr-2">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                  {/* Chevron Indicator */}
                  <div className="text-white/30 group-hover:text-[#c084fc] transform group-hover:translate-x-1 transition-all duration-300 pl-2">
                    <FaChevronRight className="size-4" />
                  </div>
                </div>

                {/* ==================== BACK SIDE ==================== */}
                <div
                  className="absolute inset-0 w-full h-full flex flex-col justify-center bg-[#161024]/90 border border-purple-500/30 p-4 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#c084fc] tracking-wider uppercase">
                      <LuFlame className="size-3.5 text-[#a855f7] animate-pulse" />
                      {activity.backTitle}
                    </div>
                    <FaRotateLeft className="size-3 text-white/30 hover:text-[#c084fc] transition-colors" />
                  </div>
                  
                  {/* Detailed Accomplishments Bullets */}
                  <ul className="space-y-1">
                    {activity.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-white/80 leading-normal">
                        <span className="text-[#a855f7] mt-0.5">▪</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
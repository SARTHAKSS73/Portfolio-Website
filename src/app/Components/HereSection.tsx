"use client";

import Image from "next/image";
import React from "react";
import { FaGraduationCap, FaDownload } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';
import ScrollReveal from "./ScrollReveal";

const HereSection = () => {
  return (
    <section id="home" className="relative pt-36 pb-24 min-h-[90vh] flex items-center">
      {/* Container wrapper remains completely default, allowing text to expand naturally */}
      <div className="w-full max-w-7xl mx-auto px-4 relative">
        
        {/*LEFT & MAIN AREA*/}
        <div className="w-full flex flex-col">
          
          {/* avatar and headline */}
          <ScrollReveal stagger={0.12} className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            {/* avatar and greetings */}
            <div className="relative flex justify-center md:justify-end">
              <div className="pointer-events-none absolute -inset-12 md:-inset-24 rounded-full bg-linear-to-b from-[#7c3aed] via-[#6d28d9]/30 to-transparent blur-3xl opacity-90"></div>
              <div className="relative">
                  <Image src="/images/avatar.png" alt="avatar image" width={240} height={240} className="relative" priority/>

                  {/* small greeting with curve arrow */}
                  <div className="select-none pointer-events-none absolute -top-8 -right-6 md:-top-16 md:-right-40 text-xs text-white/70 w-max">
                      <div className="relative flex items-center justify-end">
                          <div className="relative w-16 h-6 md:w-24 md:h-16">
                              <Image src="/images/hero-arrow.png" alt="arrow image" fill className="object-contain scale-x-100 -rotate-6" priority/>
                          </div>
                          <div className="-mt-6 md:-mt-10 shrink-0">
                              <span>Hello! It's me {" "}</span>
                              <span className="text-[#a78bfa]">Sarthak Shukla</span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>

            {/* headline */}
            <div className="md:pl-2 text-center md:text-left">
              <p className="text-sm md:text-base text-white/60 mb-2">
                A Curious Mind who
              </p>

              <h1 className="text-4xl sm:text-5xl font-normal tracking-tight leading-[1.15] whitespace-nowrap md:whitespace-normal">
                <span className="block md:inline-block">Makes machines learn </span>
                <span className="block">
                  from the {" "}
                  <span className="relative inline-block align-baseline">
                    <span className="relative z-10 text-[#7c3aed] font-medium">past data.</span>
                    <span className="pointer-events-none absolute -inset-x-2 -inset-y-2 translate-y-1 -z-10 rotate-12">
                      <Image
                        src="/images/ellipse.png"
                        alt="arrow"
                        fill
                        className="object-contain"
                        priority
                      />
                    </span>
                  </span>
                  ...
                </span>
              </h1>

              <p className="mt-2 text-[10px] md:text-xs text-white/50 max-w-md md:max-w-lg mx-auto md:mx-0">
                Because human minds should focus on the future...
              </p>
            </div>
          </ScrollReveal>

          {/* role and description */}
          <ScrollReveal delay={0.15} className="mt-16 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight min-h-[50px] sm:min-h-[60px]">
                  <Typewriter 
                  words={["I'm an AI/ML Engineer.", "I'm a Sports Enthusiast.","I'm a thoughtful Reader.", "I'm a Tech Enthusiast."]}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                  cursor
                  cursorStyle="|"
                  loop={true}
                  />
              </h2>
              <p className="text-sm md:text-base text-white/80 mt-4">
                Currently, B.Tech Electrical Engineering Student at{" "}
                <span className="inline-flex items-center gap-1 text-[#1877F2] font-medium">
                  <FaGraduationCap className="size-4" aria-hidden/> 
                  Shri Govindram Seksaria Institute of Technology and Science, Indore
                </span>
              </p>

              <p className="mt-6 text-white/70 leading-7 text-sm md:text-base">
                A self-taught AI/ML and data enthusiast, working on intelligent systems and real-world applications. I build data-driven solutions that bridge the gap between machine learning models, user experience, and business impact.
              </p>
          </ScrollReveal>
        </div>

        {/* RIGHT SIDEBARR */}
        <div className="w-full lg:w-auto lg:absolute lg:top-0 lg:right-0 xl:-right-4 flex justify-center mt-16 lg:mt-0 z-30">
          <ScrollReveal delay={0.2} className="w-full max-w-[340px]">
            <div className="relative w-full bg-[#130927]/80 border border-[#2e1854] rounded-2xl p-6 shadow-[0_15px_45px_rgba(113,39,186,0.2)] hover:border-[#7c3aed]/40 hover:shadow-[0_20px_55px_rgba(113,39,186,0.35)] transition-all duration-300 group flex flex-col items-center">
              
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1137_1px,transparent_1px),linear-gradient(to_bottom,#1f1137_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 rounded-2xl pointer-events-none" />

              {/* 1. Photo Frame */}
              <div className="relative w-44 h-44 rounded-2xl p-1 bg-gradient-to-b from-[#7c3aed] to-[#1d0e3a] shadow-lg mb-5 transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#180d31] border border-white/5">
                  <Image
                    src="/images/personal-photo.jpeg" 
                    alt="Sarthak Shukla Real Photo"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 rounded-tl" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 rounded-br" />
              </div>

              {/* 2. Mini Bio Details */}
              <div className="relative z-10 text-center w-full">
                <h4 className="text-md font-semibold text-white tracking-wide mb-2 uppercase text-white/50 text-xs">
                  About Me
                </h4>
                <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed font-sans mb-6 px-1">
                   Focused on applying data science, machine learning, and analytics to solve real-world problems. My passion for learning and exploring new technologies has driven me to gain hands-on experience across AI, data analytics, and data-driven decision-making. Passionate about reading, competitive chess, sports, and building efficient, impactful solutions through innovation and analytical thinking.
                </p>
              </div>

              {/* 3. Resume Link Button */}
              <div className="relative z-10 w-full mt-auto">
                <a
                  href="/documents/Sarthak_Resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#6d28d9] to-[#7c3aed] text-white font-medium text-sm hover:from-[#7c3aed] hover:to-[#8b5cf6] active:scale-[0.98] shadow-[0_4px_20px_rgba(124,58,237,0.25)] transition-all cursor-pointer group/btn"
                >
                  <FaDownload className="size-4 transition-transform group-hover/btn:-translate-y-0.5" />
                  View Resume
                </a>
              </div>

            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default HereSection;
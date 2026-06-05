"use client";

import Image from "next/image";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'
import ScrollReveal from "./ScrollReveal";

const HereSection = () => {
  return (
    <section id="home" className="relative pt-36 pb-24">
      <div className="mt-12 md:mt-24">
        {/* avatar and headline */}
        <ScrollReveal stagger={0.12} className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          {/* avatar and greetings */}
          <div className="relative flex justify-center md:justify-end">
            {/* Gradient background mesh fixed */}
            <div className="pointer-events-none absolute -inset-12 md:-inset-24 rounded-full bg-linear-to-b from-[#7c3aed] via-[#6d28d9]/30 to-transparent blur-3xl opacity-90"></div>
            <div className="relative">
                <Image src="/images/avatar.png" alt="avatar image" width={240} height={240} className="relative" priority/>

                {/* small greeting with curve arrow */}
                <div  className="select-none pointer-events-none absolute -top-8 -right-6 md:-top-16 md:-right-40 text-xs text-white/70">
                    <div className="relative flex items-center justify-end">
                        <div className="relative w-16 h-6 md:w-24 md:h-16">
                            <Image src="/images/hero-arrow.png" alt="arrow image" fill  className="object-contain scale-x-100 -rotate-6" priority/>
                        </div>
                        <div className="-mt-6 md:-mt-10 shrink-0">
                            <span>Hello! It's me {" "}</span>
                            {/* RESTORED: Sarthak Shukla */}
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

            <h1 className="text-4xl sm:text-5xl font-normal tracking-tight leading-[1.15]">
              <span className="block">Makes machines learn </span>
              <span className="block">
                from the {" "}
                <span className="relative inline-block align-baseline">
                  <span className="relative z-10 text-[#7127BA]">past data.</span>
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
    </section>
  );
};

export default HereSection;
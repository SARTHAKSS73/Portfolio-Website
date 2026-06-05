import Image from 'next/image'
import React from 'react'
import ScrollReveal from './ScrollReveal'

const TechStack = () => {
  const leftSkills = [
    {
      category: "Languages & Core Data",
      skills: ["Python", "C++", "SQL", "Jupyter", "Pandas"]
    },
    {
      category: "Machine Learning",
      skills: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Ensemble Methods"]
    }
  ];

  const rightSkills = [
    {
      category: "Deep Learning & NLP",
      skills: ["PyTorch", "TensorFlow", "LSTM", "CNN", "RNN", "EEG Emotion Recognition"]
    },
    {
      category: "Automation & MLOps",
      skills: ["Selenium Automation", "Web Automation", "MLflow", "Model Integration"]
    }
  ];

  return (
    <section id='Tech Stack' className='relative py-20 overflow-hidden bg-black text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[750px] lg:min-h-[850px]'>
        
        {/* Core Section Heading placed right at the top */}
        <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-12 text-center lg:text-left">
          Tech Stack
        </h3>

        {/* CENTER INTRO TEXT & ACCORDING LARGE IMAGE */}
        <div className='text-center relative z-10 max-w-4xl mx-auto w-full'>
          <ScrollReveal stagger={0.08}>
            <p className='text-white/70 mb-4 text-base md:text-lg'>
              I’m currently looking to join <span className='text-[#a855f7] font-medium'>ambitious</span> teams...
            </p>
            <p className='text-white/50 text-xs md:text-sm mb-6 max-w-xl mx-auto leading-relaxed'>
              where machine learning creates real impact, not just impressive demos
            </p>

            {/* Central Skill Graphic restored to full massive original dimensions */}
            <div className='w-full flex justify-center mt-4 relative'>
              <div className='absolute w-[60%] h-[60%] top-[20%] bg-[#a855f7]/10 rounded-full blur-3xl pointer-events-none' />
              <Image
                src='/images/skills-sectionml.png'
                alt='tech stack center tree'
                width={1280}
                height={920}
                className='w-full h-auto max-w-[950px] object-contain relative z-10'
                priority
              />
            </div>
          </ScrollReveal>
        </div>

        {/* LEFT SIDE HIGHER POSITIONED SKILLS (Clean, borderless lists) */}
        <div className='flex flex-col gap-8 mt-12 lg:mt-0 lg:absolute lg:left-4 lg:top-24 lg:w-[280px] xl:w-[310px] z-20 text-center lg:text-left'>
          {leftSkills.map((group, index) => (
            <div key={index} className='relative'>
              <h4 className='text-sm md:text-base font-semibold text-[#c084fc] mb-4 tracking-wide'>
                {group.category}
              </h4>
              <div className='flex flex-wrap justify-center lg:justify-start gap-2'>
                {group.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className='text-xs px-3 py-1.5 rounded-full bg-[#180d30]/60 text-white/80 border border-[#3c226e] hover:border-[#a855f7] hover:text-white transition-all duration-200'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE HIGHER POSITIONED SKILLS (Clean, borderless lists) */}
        <div className='flex flex-col gap-8 mt-8 lg:mt-0 lg:absolute lg:right-4 lg:top-24 lg:w-[280px] xl:w-[310px] z-20 text-center lg:text-left'>
          {rightSkills.map((group, index) => (
            <div key={index} className='relative'>
              <h4 className='text-sm md:text-base font-semibold text-[#c084fc] mb-4 tracking-wide'>
                {group.category}
              </h4>
              <div className='flex flex-wrap justify-center lg:justify-start gap-2'>
                {group.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className='text-xs px-3 py-1.5 rounded-full bg-[#180d30]/60 text-white/80 border border-[#3c226e] hover:border-[#a855f7] hover:text-white transition-all duration-200'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TechStack
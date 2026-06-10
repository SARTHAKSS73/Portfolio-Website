import Image from 'next/image'
import React from 'react'
import ScrollReveal from './ScrollReveal'

// 1. ALL YOUR PROJECTS LIVE HERE. To add a new one, just paste a new object at the bottom of this list!
const PROJECTS_DATA = [
  {
    id: "black-friday",
    title: "Black Friday Sales Prediction",
    subtitle: "Featured Project",
    description: "An end-to-end machine learning pipeline for Black Friday sales prediction that transforms raw retail transaction data into actionable business insights through exploratory data analysis, feature engineering, and advanced regression modeling.",
    tech: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "Seaborn", "Jupyter Notebook"],
    image: "/images/projectBlackFridaySales.png",
    reportUrl: "/documents/black-friday-report.pdf",
    githubUrl: "https://github.com/SARTHAKSS73",
    glowGradient: "radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)"
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    subtitle: "Featured Project",
    description: "An SEO-optimized developer portfolio platform designed with modern web technologies to highlight software projects, machine learning work, leadership experiences, and technical achievements through a fast, scalable, and visually engaging user experience.",
    tech: ["Nextjs", "React19", "TypeScript", "TailwindCSS", "Framer_Motion", "Shadcn/ui"],
    image: "/images/projectWebd.png",
    reportUrl: "/documents/portfolio-report.pdf",
    githubUrl: "https://github.com/SARTHAKSS73/Sarthak-Website",
    glowGradient: "radial-gradient(60% 60% at 40% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)"
  },
  {
    id: "book-recommender",
    title: "Book Recommender System",
    subtitle: "Featured Project",
    description: "An intelligent recommendation system that transforms user reading patterns into personalized book suggestions through collaborative filtering, similarity modeling, and machine learning-based recommendation techniques.",
    tech: ["Scikit learn", "Flask", "Recommendation Systems", "Collaborative Filtering", "Cosine Similarity"],
    image: "/images/projectbook.png",
    reportUrl: "/documents/book-recommender-report.pdf",
    githubUrl: "https://github.com/SARTHAKSS73",
    glowGradient: "radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)"
  },
  {
    id: "eeg-emotion",
    title: "EEG-based emotion recognition",
    subtitle: "Featured Project",
    description: "An EEG-based emotion recognition system that processes brainwave signals, extracts spectral features, and classifies emotional states using advanced deep learning architectures including LSTM, DA-RNN, and xLSTM.",
    tech: ["Python", "TensorFlow", "Keras", "SciPy", "Scikit", "Scikit-learn"],
    image: "/images/projecteeg.png",
    reportUrl: "/documents/eeg-report.pdf",
    githubUrl: "https://github.com/SARTHAKSS73",
    glowGradient: "radial-gradient(60% 60% at 40% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-28 space-y-24 overflow-hidden">
      
      {/* 2. THE LOOP: This maps over your data and alternates the design left/right automatically based on the index! */}
      {PROJECTS_DATA.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <div key={project.id} className="relative">
            {/* Ambient Background Glow */}
            <div 
              className={`pointer-events-none absolute top-8 -z-10 h-[420px] opacity-40 blur-3xl w-full ${isEven ? 'right-0 left-1/3' : 'left-0 right-1/3'}`}
              style={{ background: project.glowGradient }}
            />
            
            <ScrollReveal stagger={0.12} delay={!isEven ? 0.2 : 0} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* TEXT CONTENT COLUMN */}
              <div className={`relative z-10 flex flex-col ${isEven ? 'text-left items-start' : 'md:order-2 text-right items-end'}`}>
                {/* Heading */}
                <div className="mb-6">
                  <p className="text-xs text-[#a48cc9] uppercase tracking-wider mb-1">{project.subtitle}</p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white/90">{project.title}</h3>
                </div>

                {/* Description Box */}
                <div className={`relative z-20 max-w-xl rounded-2xl p-5 bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,0.25)] text-left ${isEven ? 'md:mr-[-10%]' : 'md:ml-[-10%]'}`}>
                  <p className="text-sm text-white/75 leading-relaxed">{project.description}</p>
                  <div 
                    className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                    style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))' }}
                  />
                </div>
                
                {/* Tech Badges */}
                <div className={`mt-6 flex flex-wrap gap-2 text-white/60 ${isEven ? 'ml-2 justify-start' : 'mr-2 justify-end'}`}>
                  {project.tech.map((techName, i) => (
                    <span key={i} className="text-xs bg-white/10 px-3 py-1 rounded-full">{techName}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={`flex flex-wrap items-center gap-4 mt-6 ${isEven ? 'ml-2 justify-start' : 'mr-2 justify-end'}`}>
                  <a 
                    href={project.reportUrl}
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#a855f7] to-[#7e22ce] text-white text-xs font-semibold rounded-xl shadow-lg shadow-purple-950/40 hover:shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer'
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                    View Project File
                  </a>
                  <a 
                    href={project.githubUrl}
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-5 py-2.5 bg-[#120c24]/80 text-white border border-white/10 text-xs font-semibold rounded-xl hover:border-[#a855f7] hover:bg-[#180d30] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer'
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* PROJECT IMAGE COLUMN */}
              <div className={`w-full ${!isEven ? 'md:order-1' : ''}`}>
                <div tabIndex={0} className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1">
                  <div className="overflow-hidden h-[250px] md:h-[360px]">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={582} 
                      height={640} 
                      className="w-full h-auto transition-transform duration-[4500ms] ease-linear group-hover:-translate-y-[55%] group-focus:-translate-y-[55%]"
                    />
                  </div>
                </div>
              </div>

            </ScrollReveal>
          </div>
        );
      })}

    </section>
  )
}

export default ProjectsSection
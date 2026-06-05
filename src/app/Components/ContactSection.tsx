"use client";
import Link from "next/link";
import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import ScrollReveal from './ScrollReveal';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSendEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in all fields (Name, Email, and Message) before sending.");
      return;
    }

    const emailSubject = `Portfolio Contact from ${formData.name}`;
    const emailBody = `Hi Sarthak,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`;
    
    // Direct browser-to-browser Gmail Compose URL link format
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=shuklasarthak0703@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Forces Chrome to open a clean new browser tab directly to Gmail compose web UI
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative w-full border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-white">
        <ScrollReveal stagger={0.08}>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* LEFT SIDE */}
            <div className="flex flex-col space-y-6 lg:max-w-md w-full">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                Contact
              </h3>
              
              <div>
                <span className="text-xl md:text-2xl font-semibold text-white/90 block mb-3 leading-snug">
                  "In a world full of data, I build meaning."
                </span>
                <p className="text-sm md:text-base text-white/60 leading-relaxed">
                  Open to collaborations, opportunities, and conversations around data science, machine learning, and innovation.
                </p>
                <p className="text-xs uppercase tracking-wider text-[#a855f7] font-bold mt-4">
                  Let's Connect
                </p>
              </div>

              {/* Email Link */}
              <div className="text-white/80 text-lg font-medium pt-2">
                <a href="mailto:shuklasarthak0703@gmail.com" className="hover:text-[#a855f7] transition duration-200">
                  shuklasarthak0703@gmail.com
                </a>
              </div>

              {/* Social Icons Container */}
              <div className="flex items-center gap-5 text-white/70 text-xl pt-2">
                <Link href="https://www.linkedin.com/in/sarthak-shukla-5bb87424a/" target="_blank" rel="noopener noreferrer" className="hover:text-[#a855f7] transition duration-200">
                  <FaLinkedin className="size-6" />
                </Link>
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=shuklasarthak0703@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#a855f7] transition duration-200">
                  <FaEnvelope className="size-6" />
                </Link>
                <Link href="https://www.instagram.com/_sarthakss_/" target="_blank" rel="noopener noreferrer" className="hover:text-[#a855f7] transition duration-200">
                  <FaInstagram className="size-6" />
                </Link>
                <Link href="https://github.com/SARTHAKSS73" target="_blank" rel="noopener noreferrer" className="hover:text-[#a855f7] transition duration-200">
                  <FaGithub className="size-6" />
                </Link>
                <Link href="https://x.com/Sarthak0307" target="_blank" rel="noopener noreferrer" className="hover:text-[#a855f7] transition duration-200">
                  <FaXTwitter className="size-6" />
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-4 w-full lg:max-w-xl lg:ml-auto bg-[#110c1f]/40 p-6 md:p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
              <div>
                <input 
                  type="text" 
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#161024]/80 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition duration-200"
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#161024]/80 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition duration-200"
                />
              </div>
              
              <div>
                <textarea 
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#161024]/80 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition duration-200 resize-none"
                />
              </div>

              <button 
                type="button" 
                onClick={handleSendEmail}
                className="w-full sm:w-auto self-start px-8 py-4 bg-gradient-to-r from-[#a855f7] to-[#7e22ce] text-white font-semibold rounded-xl shadow-lg shadow-purple-900/20 hover:shadow-purple-500/30 hover:scale-[1.01] active:scale-[0.99] transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                Send Message <span>→</span>
              </button>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
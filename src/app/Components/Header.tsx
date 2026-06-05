"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { TbHexagon3D } from "react-icons/tb"
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled || isOpen ? "bg-[#0b0416]/70 backdrop-blur-md shadow-[0_0_40px_rgba(113, 39, 186, 0.20)]" : "bg-transparent"
        }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-black text-white hover:text-[#a855f7] transition duration-200 group">
          <TbHexagon3D className="size-7 text-[#a855f7] group-hover:rotate-12 transition-transform duration-300" />
          <span 
            className="tracking-wide text-2xl font-black bg-gradient-to-b from-white via-[#f3e8ff] to-[#a855f7] bg-clip-text text-transparent transition-all duration-300 relative tracking-wider"
            style={{
            filter: "drop-shadow(0 0 12px rgba(168, 85, 247, 0.65)) drop-shadow(0 0 30px rgba(147, 51, 234, 0.4))"
            }}
          >
            Sarthak
          <span className="text-white drop-shadow-[0_0_12px_#ffffff] ml-0.5 relative inline-block group-hover:scale-125 transition-transform duration-300">.</span>
          </span>
        </Link>
        {/* desktop wala naviation menu */}
        <nav className="hidden md:flex space-x-10 font-medium text-lg text-white/80">
          <Link href="#home" className="hover:text-[#a855f7] transition duration-200">Home</Link>
          <Link href="#about" className="hover:text-[#a855f7] transition duration-200">Work Experiences</Link>
          <Link href="#Tech Stack" className="hover:text-[#a855f7] transition duration-200">Tech Stack</Link>
          <Link href="#projects" className="hover:text-[#a855f7] transition duration-200">Projects</Link>
          <Link href="#contact" className="hover:text-[#a855f7] transition duration-200">Contact</Link>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded text-white/80 hover:text-[#a855f7] trasition duration-200">
          <HiBars3 className="size-6" />
        </button>
        </div>
        {/* mobile wala menu  */}
        {isOpen && (
          <div className="md:hidden px-6 pb-4">
            <div className="flex flex-col gap-3 text-base font-medium text-white/80">
            <Link href="#home" className="hover:text-[#a855f7] transition duration-200">Home</Link>
            <Link href="#about" className="hover:text-[#a855f7] transition duration-200">Work Experience</Link>
            <Link href="#Tech Stack" className="hover:text-[#a855f7] transition duration-200">Tech Stack</Link>
            <Link href="#projects" className="hover:text-[#a855f7] transition duration-200">Projects</Link>
            <Link href="#contact" className="hover:text-[#a855f7] transition duration-200">Contact</Link>
          </div>
        </div>
        )}
    </header>
  );
}

export default Header
"use client";
import React, { useEffect, useRef, useState } from "react";

export const CursorGlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true for safe server-side rendering
  
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 1. Check screen size dynamically
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Run check on mount
    handleResize();
    window.addEventListener("resize", handleResize);

    // If it's a mobile screen, do not bind mouse event tracking loops
    if (window.innerWidth < 768) {
      setIsVisible(false);
      return () => window.removeEventListener("resize", handleResize);
    }

    // 2. Desktop-only setup: Capture user mouse moves instantly
    const updateMousePosition = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    // 3. Desktop-only setup: Animation Loop
    let animationFrameId: number;
    
    const renderLoop = () => {
      const ease = 0.2; 

      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * ease;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * ease;

      if (elementRef.current) {
        elementRef.current.style.transform = `translate3d(${dotPos.current.x - 12}px, ${dotPos.current.y - 12}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };
    
    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, isMobile]);

  // 4. Return absolutely nothing (null) if the viewport layout drops below desktop view limits
  if (isMobile) return null;

  return (
    <div
      ref={elementRef}
      className="pointer-events-none fixed top-0 left-0 z-50 rounded-full mix-blend-screen"
      style={{
        width: "24px",
        height: "24px",
        backgroundColor: "#7633ac", 
        boxShadow: "0 0 20px #6b21a8, 0 0 40px #581c87, 0 0 60px #3b0764",
        opacity: isVisible ? 0.85 : 0,
        willChange: "transform",
        transition: "opacity 0.3s ease", 
      }}
    />
  );
};
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WORK_HISTORY = [
  { company: "Locksmith", role: "Full Stack Developer", period: "10 Weeks", location: "US" },
  { company: "Beauty Saloon", role: "Full Stack Developer", period: "8 weeks", location: "UK" },
  { company: "Iquality", role: "Backend Developer", period: "9 weeks", location: "US" },
  { company: "Centraal Beheer", role: "Frontend Developer", period: "8 weeks", location: "Qatar" },
  { company: "Erfgoed Gelderland", role: "UX Designer", period: "8 weeks", location: "Bahrain" },
];

export default function WorkedWith() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Heading Animation
      gsap.fromTo(headingRef.current, 
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%", // Jab heading screen ke 85% hissay par aaye
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      // 2. Individual Row Animation (Har line alag uth kar aayegi)
      rowsRef.current.forEach((row, i) => {
        gsap.fromTo(row,
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: row,
              start: "top 95%", // Jaise hi row screen mein neechay se enter ho, trigger ho jaye
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.05 // Thoda sa delay taake agar ek sath scroll ho toh staggered feel aye
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 w-full bg-white text-black py-20 px-6 md:py-32 md:px-12 font-sans flex justify-center rounded-b-[40px] shadow-sm">
      
      <div className="w-full max-w-[1400px]">
        
        {/* Heading */}
        <div ref={headingRef} className="mb-16 md:mb-24">
          <h2 className="text-[40px] md:text-[64px] font-semibold tracking-tight leading-none">
            Worked with
            <sup className="text-[18px] md:text-[24px] font-medium tracking-normal align-super ml-2 md:ml-3">
              ({WORK_HISTORY.length})
            </sup>
          </h2>
        </div>

        {/* Table Container */}
        <div className="w-full border-t border-black">
          {WORK_HISTORY.map((item, index) => (
            <div
              key={index}
              // 🔥 Yahan har row ko uske index ke mutabiq ref pass ho raha hai
              ref={(el) => (rowsRef.current[index] = el)} 
              className="group w-full grid grid-cols-1 md:grid-cols-4 gap-4 py-5 md:py-7 border-b border-black items-center hover:bg-zinc-50 transition-colors duration-300 cursor-pointer"
            >
              <div className="text-[16px] md:text-[18px] font-medium text-black">
                {item.company}
              </div>
              <div className="text-[15px] md:text-[16px] text-gray-800 text-left">
                {item.role}
              </div>
              <div className="text-[15px] md:text-[16px] text-gray-800 text-left">
                {item.period}
              </div>
              <div className="text-[15px] md:text-[16px] text-gray-800 text-left">
                {item.location}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}

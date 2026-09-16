

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 🔥 Vite "got: object" Error Fix
import MarqueeLib from "react-fast-marquee";
const Marquee = MarqueeLib.default || MarqueeLib;

import TiltLib from "react-parallax-tilt";
const Tilt = TiltLib.default || TiltLib;


import situationMirror from "../assets/situationmirriorworkavif.avif";
import bs from "../assets/bs.jpg"
import ls from "../assets/ls.jpg"
import hvac from "../assets/hvac.png"
gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: "AI Beauty Saloon",
    tags: ["AI Agent", "Booking System", "Full-Stack"],
    marquee: "BEAUTY SALOON",
    image: bs, // Yahan apni beauty saloon ki image ka variable lagana
    url: "https://beauty-saloon-two.vercel.app"
  },
  {
    title: "Quick Key Locksmith",
    tags: ["AI Automation", "React", "Node.js"],
    marquee: "LOCKSMITH",
    image: ls, // Yahan apni locksmith ki image ka variable lagana
    url: "https://locksmithpoc.vercel.app"
  },
  
{
    title: "HVAC Services",
    tags: ["AI Automation", "React", "Node.js"],
    marquee: "HVAC SERVICES",
    image: hvac, // Yahan apni HVAC ki image ka variable lagana
    url: "https://client-pqht.vercel.app"
  }
];

export default function Work() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const marqueesRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const marquees = marqueesRef.current;

      if (cards.length < 2) return;

      // 1. INITIAL STATES
      gsap.set(cards[0], { rotateX: 0, autoAlpha: 1, display: "block" });
      gsap.set(cards.slice(1), { rotateX: 90, autoAlpha: 0, display: "none" }); 
      
      gsap.set(marquees[0], { opacity: 1 });
      gsap.set(marquees.slice(1), { opacity: 0 });

      // 2. TIMELINE SETUP
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${PROJECTS.length * 100}%`, 
          scrub: 1, 
          pin: true, 
          anticipatePin: 1,
        },
      });

      // 3. PERFECT SOLID FLIP SEQUENCE
      PROJECTS.forEach((_, i) => {
        if (i === PROJECTS.length - 1) return;

        tl.to(cards[i], {
          rotateX: 90,
          duration: 1,
          ease: "power1.in",
        }, `flip${i}`)
        .to(marquees[i], {
          opacity: 0,
          duration: 1,
        }, `flip${i}`)
        .set(cards[i], { autoAlpha: 0, display: "none" })
        .set(cards[i + 1], { autoAlpha: 1, display: "block" })
        .fromTo(cards[i + 1],
          { rotateX: -90 },
          {
            rotateX: 0,
            duration: 1,
            ease: "power1.out",
          }, `flip${i}+=1`
        )
        .to(marquees[i + 1], {
          opacity: 1,
          duration: 1,
        }, `flip${i}+=1`);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // 🔥 Flex-col banaya hai taake header aur remaining space ko divide kar sakein
 <section  id="work" ref={containerRef} className="relative z-20 w-full h-screen bg-white overflow-hidden text-black font-sans flex flex-col rounded-t-[32px] md:rounded-t-[40px] lg:rounded-t-[48px]">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {PROJECTS.map((project, i) => (
          <div key={`marquee-${i}`} ref={(el) => (marqueesRef.current[i] = el)} className="absolute inset-0 flex items-center">
            <Marquee speed={40} gradient={false} autoFill={true} className="select-none overflow-hidden">
              <span className="mx-8 text-[7vw] md:text-[6vw] font-black leading-none tracking-tighter uppercase text-black">
                {project.marquee}
              </span>
            </Marquee>
          </div>
        ))}
      </div>
      
      {/* 🟢 HEADER (Ab yeh absolute nahi raha, apni space zameen par khud lega) */}
      <div className="relative z-40 pl-6 pt-8 md:pl-12 md:pt-10 shrink-0">
        <h2 className="text-[40px] md:text-[56px] font-semibold tracking-tight leading-none">
          Selected work 
          <sup className="text-lg md:text-[22px] font-medium tracking-normal align-super ml-1.5">
            ({PROJECTS.length})
          </sup>
        </h2>
      </div>

      {/* 🟢 3D SCENE CONTAINER (Flex-1 ki wajah se remaining space exact equal divide hogi) */}
      <div 
        className="relative flex-1 w-full flex items-center justify-center z-10" 
        style={{ perspective: "1500px" }}
      >
        {PROJECTS.map((project, i) => (
          <div
            key={`card-${i}`}
            ref={(el) => (cardsRef.current[i] = el)}
            // 🔥 Margin (mt) completely removed!
            className="absolute w-full max-w-[85%] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px]"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <Tilt
              glareEnable={false}
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              scale={1.01}
              transitionSpeed={1500}
              className="w-full cursor-pointer"
            >
            
              {/* 🔥 rounded-b-none hata kar simple rounded-[24px] kar diya hai taake chaaron taraf se gol ho */}
<div 
onClick={() => window.open(project.url, '_blank')}
className="flex flex-col rounded-[24px] md:rounded-[28px] bg-[#0a0a0a] shadow-2xl p-3 md:p-3.5">
                
                {/* Image Container */}
                {/* <div className="relative aspect-[16/11] md:aspect-[16/10] w-full rounded-t-[14px] rounded-b-none md:rounded-t-[18px] md:rounded-b-none overflow-hidden bg-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain "
                    draggable={false}
                  /> */}
                  
                  {/* The Top-Right Arrow Icon */}
                  {/* <div className="absolute top-0 right-0 bg-[#0a0a0a] rounded-bl-[18px] p-2.5 md:p-3 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div> */}
{/* Image Container */}
                <div className="relative aspect-video w-full rounded-t-[14px] rounded-b-none md:rounded-t-[18px] md:rounded-b-none overflow-hidden bg-[#0a0a0a]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top" 
                    draggable={false}
                  />
                  
                  {/* The Top-Right Arrow Icon */}
                  <div className="absolute top-0 right-0 bg-[#0a0a0a] rounded-bl-[18px] p-2.5 md:p-3 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
                {/* Title & White Tags Section */}
                <div className="flex flex-col gap-2.5 px-2 py-3 md:px-2 md:py-3.5">
                  <h3 className="text-[18px] md:text-[22px] font-bold text-white tracking-wide">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white px-3 py-1 text-[11px] md:text-[13px] font-semibold text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </Tilt>
          </div>
        ))}
      </div>
      
    </section>
  );
}


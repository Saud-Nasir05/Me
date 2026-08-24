

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Footer() {
//   const footerRef = useRef(null);
//   const footerContentRef = useRef(null);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       // Reveal Animation
//       gsap.fromTo(
//         footerContentRef.current,
//         { yPercent: -30 }, // Thoda kam upar se start hoga kyunki ab footer chota hai
//         {
//           yPercent: 0,
//           ease: "none",
//           scrollTrigger: {
//             trigger: footerRef.current,
//             start: "top bottom", 
//             end: "bottom bottom", 
//             scrub: true, 
//           },
//         }
//       );
//     }, footerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <footer
//       ref={footerRef}
//       className="relative z-0 w-full bg-white text-black overflow-hidden"
//     >
//       {/* 🔥 Padding kam kardi (pt-10 pb-6) taake height choti ho jaye */}
//       <div 
//         ref={footerContentRef} 
//         className="w-full pt-10 pb-6 px-6 md:px-12 flex flex-col justify-between"
//       >
//         <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          
//           {/* E.L. LOGO */}
//           <div className="w-full md:w-auto flex-shrink-0">
//             {/* 🔥 Text size thoda reduce kiya hai */}
//             <h1 className="text-[60px] md:text-[80px] lg:text-[90px] font-bold leading-[0.85] tracking-tighter text-black">
//               E.L.
//             </h1>
//           </div>

//           {/* LINKS & CREDITS COLUMNS */}
//           <div className="flex flex-wrap sm:flex-nowrap gap-8 sm:gap-10 lg:gap-16 w-full md:w-auto justify-between md:justify-end mt-4 md:mt-0">
            
//             {/* CREDITS */}
//             <div className="flex flex-col space-y-2">
//               <span className="text-gray-500 text-xs md:text-sm font-medium">Credits</span>
//               <span className="text-[#56147D] font-medium text-[14px] md:text-[15px]">© E.L. - 2026</span>
//             </div>

//             {/* MENU */}
//             <div className="flex flex-col space-y-2">
//               <span className="text-gray-500 text-xs md:text-sm font-medium">Menu</span>
//               <nav className="flex flex-col space-y-1 text-[14px] md:text-[15px] font-medium">
//                 <a href="#" className="hover:text-gray-500 transition-colors">Home</a>
//                 <a href="#" className="hover:text-gray-500 transition-colors">Work</a>
//                 <a href="#" className="hover:text-gray-500 transition-colors">About</a>
//               </nav>
//             </div>

//             {/* CONTACT */}
//             <div className="flex flex-col space-y-2">
//               <span className="text-gray-500 text-xs md:text-sm font-medium">Contact</span>
//               <nav className="flex flex-col space-y-1 text-[14px] md:text-[15px] font-medium">
//                 <a href="#" className="hover:text-gray-500 transition-colors">LinkedIn</a>
//                 <a href="#" className="hover:text-gray-500 transition-colors">Instagram</a>
//                 <a href="#" className="hover:text-gray-500 transition-colors">Email</a>
//               </nav>
//             </div>

//             {/* BACK TO TOP */}
//             <div className="flex flex-col space-y-2 items-start sm:items-center">
//               <span className="text-gray-500 text-xs md:text-sm font-medium">Back to top</span>
//               <button
//                 onClick={scrollToTop}
//                 className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#4a4a4a] flex justify-center items-center hover:bg-black transition-colors"
//               >
//                 <svg
//                   className="w-4 h-4 md:w-5 md:h-5 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M5 10l7-7m0 0l7 7m-7-7v18"
//                   />
//                 </svg>
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const footerContentRef = useRef(null);

  // 🔥 Smooth Scroll Function for Menu Links
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal Animation
      gsap.fromTo(
        footerContentRef.current,
        { yPercent: -30 }, 
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom", 
            end: "bottom bottom", 
            scrub: true, 
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative z-0 w-full bg-white text-black overflow-hidden"
    >
      <div 
        ref={footerContentRef} 
        className="w-full pt-10 pb-6 px-6 md:px-12 flex flex-col justify-between"
      >
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* E.L. LOGO */}
          <div className="w-full md:w-auto flex-shrink-0">
            <h1 className="text-[60px] md:text-[80px] lg:text-[90px] font-bold leading-[0.85] tracking-tighter text-black">
              S.N.
            </h1>
          </div>

          {/* LINKS & CREDITS COLUMNS */}
          <div className="flex flex-wrap sm:flex-nowrap gap-8 sm:gap-10 lg:gap-16 w-full md:w-auto justify-between md:justify-end mt-4 md:mt-0">
            
            {/* CREDITS */}
            <div className="flex flex-col space-y-2">
              <span className="text-gray-500 text-xs md:text-sm font-medium">Credits</span>
              <span className="text-[#56147D] font-medium text-[14px] md:text-[15px]">© S.N. - 2026</span>
            </div>

            {/* MENU */}
            <div className="flex flex-col space-y-2">
              <span className="text-gray-500 text-xs md:text-sm font-medium">Menu</span>
              <nav className="flex flex-col space-y-1 text-[14px] md:text-[15px] font-medium">
                {/* 🔥 Proper section IDs with smooth scroll handler */}
                <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="hover:text-gray-500 transition-colors">Home</a>
                <a href="#work" onClick={(e) => handleNavClick(e, "work")} className="hover:text-gray-500 transition-colors">Work</a>
                <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="hover:text-gray-500 transition-colors">About</a>
              </nav>
            </div>

            {/* CONTACT */}
            <div className="flex flex-col space-y-2">
              <span className="text-gray-500 text-xs md:text-sm font-medium">Contact</span>
              <nav className="flex flex-col space-y-1 text-[14px] md:text-[15px] font-medium">
                {/* 🔥 Updated Contact Links */}
                <a href="https://www.linkedin.com/in/saud-nasir-80182727a/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">LinkedIn</a>
                <a href="tel:+923034018901" className="hover:text-gray-500 transition-colors">Phone</a>
                <a href="mailto:saudnasir05@gmail.com" className="hover:text-gray-500 transition-colors">Email</a>
              </nav>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
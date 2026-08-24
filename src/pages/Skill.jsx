// import { motion } from 'framer-motion';
// import Tilt from 'react-parallax-tilt';

// // 👇 Edit this to match your real stack — grouped by category
// const skillCategories = [
//   {
//     label: 'Frontend',
//     items: ['React','Next.js', 'Tailwind CSS', 'TypeScript' , 'Framer Motion', 'GSAP', 'Lennis'],
//   },
//   {
//     label: 'Backend',
//     items: ['Node.js', 'Express', 'TypeScript', 'Django'],
//   },
//   {
//     label: 'Database',
//     items: ['PostgreSQL', 'Supabase', 'Prisma' , 'MongoDB', 'Firebase'],
//   },
//   {
//     label: 'AI / ML',
//     items: ['n8n', 'Vapi', 'Twilio','Computer Vision','LangChain', 'Pinecone', 'Hugging Face', 'Replicate'],
//   },
//   {
//     label: 'Tools',
//     items: ['Figma', 'After Effects', 'Spline', 'Lottie','Cinema 4D', 'Blender'],
//   },
// ];

// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.12 } },
// };

// const cardVariant = {
//   hidden: { opacity: 0, y: 24 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// export default function Skill() {
//   return (
//     <section className="relative bg-black py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
//       {/* ambient glow */}
//       <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#7c5cfc]/10 blur-[120px]" />

//       <div className="relative max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
//           <div>
//             <p className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
//               <span className="h-1.5 w-1.5 rounded-full bg-[#7c5cfc] animate-pulse" />
//               My Stack
//             </p>
//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
//               Tools I build with<span className="text-[#7c5cfc]"></span>
//             </h2>
//           </div>
//           <p className="max-w-sm text-gray-400 text-sm leading-relaxed">
//             Full-stack + AI — picked for speed, reliability, and shipping fast.
//           </p>
//         </div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
//         >
//           {skillCategories.map((category) => (
//             <motion.div key={category.label} variants={cardVariant} className="h-full">
//               <Tilt
//                 tiltMaxAngleX={4}
//                 tiltMaxAngleY={4}
//                 glareEnable={false}
//                 scale={1.01}
//                 transitionSpeed={1500}
//                 className="h-full"
//               >
//                 <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
//                   <div className="flex items-center gap-2 mb-5">
//                     <span className="h-1.5 w-1.5 rounded-full bg-[#7c5cfc]" />
//                     <h3 className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold">
//                       {category.label}
//                     </h3>
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     {category.items.map((item) => (
//                       <span
//                         key={item}
//                         className="font-mono text-sm text-gray-200 bg-white/[0.04] border border-white/10 rounded-lg px-3 py-1.5 hover:border-[#7c5cfc]/50 hover:text-white transition-colors duration-200"
//                       >
//                         {item}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </Tilt>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

// 👇 Edit this to match your real stack — grouped by category
const skillCategories = [
  {
    label: 'Frontend',
    items: ['React','Next.js', 'Tailwind CSS', 'TypeScript' , 'Framer Motion', 'GSAP', 'Lennis'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'TypeScript', 'Django'],
  },
  {
    label: 'Database',
    items: ['PostgreSQL', 'Supabase', 'Prisma' , 'MongoDB', 'Firebase'],
  },
  {
    label: 'AI / ML',
    items: ['n8n', 'Vapi', 'Twilio','Computer Vision','LangChain', 'Pinecone', 'Hugging Face', 'Replicate'],
  },
  {
    label: 'Tools',
    items: ['Figma', 'After Effects', 'Spline', 'Lottie','Cinema 4D', 'Blender'],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Skill() {
  return (
    <section className="relative bg-black py-24 px-6 md:px-12 overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#7c5cfc]/10 blur-[120px]" />

      <div className="relative max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7c5cfc] animate-pulse" />
              My Stack
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Tools I build with<span className="text-[#7c5cfc]">.</span>
            </h2>
          </div>
          <p className="max-w-sm text-gray-400 text-sm leading-relaxed">
            Full-stack + AI — picked for speed, reliability, and shipping fast.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.label} variants={cardVariant} className="h-full">
              <Tilt
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                glareEnable={false}
                scale={1.01}
                transitionSpeed={1500}
                className="h-full"
              >
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7c5cfc]" />
                    <h3 className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold">
                      {category.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-sm text-gray-200 bg-white/[0.04] border border-white/10 rounded-lg px-3 py-1.5 hover:border-[#7c5cfc]/50 hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

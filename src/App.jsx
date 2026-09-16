// // import React from 'react';
// // import Hero from './pages/Hero';
// // import Work from './pages/Work'
// // import WorkedWith from './pages/WorkedWith';
// // import About from './pages/About'
// // import Footer from './pages/Footer'

// // function App() {
// //   return (
// //     // 🪄 Magic Trick: Fragment <> ki jagah ek div lagaya jiska background black hai.
// //     // Is se hoga yeh ke jahan bhi white section round hoga, uske peechay se black nazar aayega.
// //     <div className="bg-black min-h-screen">
// //       <Hero />
// //       <Work />
      
// //       {/* WorkedWith ka bottom rounded hai (rounded-b-[40px]), toh wo is black background par cut-out banayega */}
// //       <WorkedWith /> 
      
// //       {/* About section ab black background ke upar aayega */}
// //       <About />
      
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;
// import React from 'react';
// // 🔧 Lenis ko import kiya
// import { ReactLenis } from '@studio-freight/react-lenis';

// import Hero from './pages/Hero';
// import Work from './pages/Work';
// import WorkedWith from './pages/WorkedWith';
// import About from './pages/About';
// import Footer from './pages/Footer';

// function App() {
//   return (
//     // 🎯 ReactLenis wrapper: 'root' prop lagane se yeh poori window/body ka scroll hijack kar ke smooth kar dega
//     // ⚙️ options: 'lerp' ki value jitni kam hogi (e.g., 0.05), scroll utna zyada smooth aur buttery hoga.
//     <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: false }}>
      
//       {/* 🪄 Magic Trick: Fragment <> ki jagah ek div lagaya jiska background black hai. */}
//       <div className="bg-black min-h-screen">
//         <Hero />
//         <Work />
//         <WorkedWith />
//         <About />
//         <Footer />
//       </div>

//     </ReactLenis>
//   );
// }

// export default App;
import React from 'react';
// 🎯 FIX: Naye Lenis version mein import ka tareeqa yeh hai
import { ReactLenis } from 'lenis/react';
import Skill from './pages/Skill';
import Hero from './pages/Hero';
import Work from './pages/Work';
import WorkedWith from './pages/WorkedWith';
import About from './pages/About';
import Footer from './pages/Footer';

function App() {
  return (
    // 🪄 root prop se yeh poori website par lag jayega
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: false }}>
      
      <div className="bg-black min-h-screen">
        <Hero />
        <About />
        <Work />
        <WorkedWith />
        <Skill />
        <Footer />
      </div>

    </ReactLenis>
  );
}

export default App;
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experiences", "testimonials", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "experiences", label: "Experiences" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full bg-white/30 backdrop-blur-md shadow-md  z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-amber-700">AMZH</div>
        <ul className="hidden md:flex gap-8 text-gray-700 font-semibold">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-amber-700 transition ${
                active === item.id ? "text-amber-700 border-b-2 border-amber-700" : ""
              }`}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


// // import {Camera} from 'lucide-react'

// const Nav = () => {
//   return (
//     <div className="div-rl">
//       {/* <Camera color='red' size={48}/> */}
      
//       <div className="right-div">
//         <nav>
//           <ul>
//             <li>AMZH</li>
//           </ul>
//         </nav>
//       </div>

//       <div className="left-div">
//         <ul>
//           <li>HOME</li>
//           <li>ABOUT ME</li>
//           <li>EXPERIENCES</li>
//           <li>TESTIMONIALS</li>
//           <li>CONTACT</li>
//         </ul>

//         <div className="hero-text text-amber-700">
//           <p>WELCOME TO MY WEBSITE</p>
//           <h4>Hello, I am AmazingHope currently based in Lagos State.</h4>
//           <p>
//             Donec auctor arcu at efficitur lacinia. Praesent bibendum efficitur
//             ipsum, et mattis tellus interdum in. Ut a dictum purus. Vestibulum
//             non pellentesque felis, sed dignissim urna. Vestibulum id accumsan
//             quam.
//           </p>
//         </div>
//         <button>GET STARTED</button>
//       </div>
//     </div>
//   );
// };

// export default Nav;

const Hero = () => {
  const heroImg =
    "https://res.cloudinary.com/dd9mhvnbt/image/upload/v1762867282/edited_futurelook_hwle5j.jpg";

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row min-h-screen pt-12 md:pt-0"
    >
      {/* Image Left */}
      <div
        className="md:w-1/2 h-[60vh] md:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      {/* Text Right */}
      <div className="md:w-1/2 flex flex-col justify-center bg-amber-50 p-8 md:p-16">
        <h1 className="text-amber-700 text-xl font-semibold">
          WELCOME TO MY WEBSITE
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
          Hello, I am{" "}
          <span className="underline decoration-amber-700">Idoteyin Ubaha</span>{" "}
          <span className="text-amber-600 italic">aka AmazingHope</span>, based
          in Lagos State.
        </h2>

        <p className="text-gray-700 mt-6 text-base md:text-lg">
          I’m a Fullstack Developer building modern, responsive web applications. 
          I work with React, HTML, CSS, and Tailwind on the frontend, and Node.js, 
          Express, and databases on the backend. I focus on creating user-friendly,
           efficient applications while continuously exploring new tools and frameworks.  
           </p>

        <a
          href="https://portfolio-alt-khaki.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-700 text-white p-3 text-center rounded-full w-48 mt-6 hover:bg-amber-800 transition"
        >
          Explore Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;

// const Hero = () => {
//   const heroImg =
//     "https://res.cloudinary.com/dd9mhvnbt/image/upload/v1762867282/edited_futurelook_hwle5j.jpg";

//   return (
//     <section id="home" className="flex flex-col md:flex-row min-h-screen pt-16 md:pt-0">
//       {/* Image Left */}
//       <div
//         className="md:w-1/2 h-80 md:h-auto bg-cover bg-center"
//         style={{ backgroundImage: `url(${heroImg})` }}
//       ></div>

//       {/* Text Right */}
//       <div className="md:w-1/2 flex flex-col justify-center bg-amber-50 p-8 md:p-16">
//         <h1 className="text-amber-700 text-xl font-semibold">
//           WELCOME TO MY WEBSITE
//         </h1>
//         {/* <h2 className="text-3xl md:text-4xl font-bold mt-4">
//           Hello, I am AmazingHope, currently based in Lagos State.
//         </h2> */}
//         <h2 className="text-3xl md:text-4xl font-bold mt-4">
//           Hello, I am{" "}
//           <span className="underline decoration-amber-700">Idoteyin Ubaha</span>{" "}
//           <span className="text-amber-600 italic">aka AmazingHope</span>,
//           currently based in Lagos State.
//         </h2>
//         <p className="text-gray-700 mt-6 text-base md:text-lg">
//           I’m a passionate Fullstack Developer who enjoys building modern,
//           responsive websites and robust backend systems using technologies like
//           Node.js, Express, and databases. I craft intuitive UI/UX and
//           continuously explore new tools and frameworks to improve my skills.
//         </p>
//         {/* <a href="https://portfolio-alt-khaki.vercel.app/"
//         className="bg-amber-700 text-white py-3 px-6 rounded-full w-40 mt-6 hover:bg-amber-800 transition">
          
//           Get Started
//         </a> */}
//         <a
//           href="https://portfolio-alt-khaki.vercel.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-amber-700 text-white p-3 text-center rounded-full w-50 mt-6 hover:bg-amber-800 transition"
//         >Explore Projects
//           {/* View My Other Portfolio */}
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

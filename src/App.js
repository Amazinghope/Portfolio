import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;

// import './App.css';
// import '../src/pages/nav.css'
// import Nav from '../src/pages/nav.jsx';
// function App() {
//   return (
//     <div className="App">
//      <Nav/> 
//     </div>
//   );
// }

// export default App;

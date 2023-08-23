import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
// import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <div className="mb-[100px]">
        <Skills />
      </div>
      {/* <Hireme /> */}
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

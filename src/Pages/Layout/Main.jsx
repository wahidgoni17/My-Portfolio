import React from "react";
import Header from "../Header&Footer/Header";
import Footer from "../Header&Footer/Footer";
import Banner from "../Banner/Banner";
import Portfolio from "../Resume/Portfolio";
import Contact from "../Contact/Contact";
import About from "../About/About";

const Main = () => {
  return (
    <>
      <Header />
      <div id="Banner">
        <Banner />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Main;

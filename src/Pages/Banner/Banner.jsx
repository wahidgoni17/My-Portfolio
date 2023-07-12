import React from "react";
import { TypeAnimation } from "react-type-animation";
import image from "../../assets/profile.jpg";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-black bg-opacity-5">
        <div className="hero-content px-5 flex-col lg:flex-row gap-20">
          <img
            data-aos="zoom-in"
            data-aos-duration="1500"
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <TypeAnimation
              style={{
                whiteSpace: "pre-line",
                height: "160px",
                fontSize: "50px",
                fontWeight: "bold",
                display: "block",
              }}
              sequence={[`Hi, I'm Wahid\nFull Stack Web Developer`, 1000, ""]}
              repeat={Infinity}
            />
            <p className="pt-16 lg:pt-10 pb-5 text-xl">
              I have a passion for continuous learning and exploring various
              fields and interests, which led me to pursue web development.
            </p>
            <Link to="Portfolio" spy={true} smooth={true}>
              <button className="btn bg-blue-800 border-none mr-5 text-white">
                See My Work
              </button>
            </Link>
            <NavLink to="https://drive.google.com/file/d/1zJWCT6mAd2wxeQ0WtjQ9amKlPdJWIMkq/view?usp=sharing">
              <button className="btn bg-blue-800 border-none text-white">
                My Resume
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

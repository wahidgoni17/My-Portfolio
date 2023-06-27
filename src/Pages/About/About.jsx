import React from "react";
import javaScript from "../../assets/111794-javascript.gif";
import Node from "../../assets/69376-javascript.gif";
import MongoDb from "../../assets/63210-mongo.gif";
import ReactLogo from "../../assets/296-react-logo.gif";
const About = () => {
  return (
    <>
      <div data-aos="flip-up" data-aos-duration="1500" className="hero min-h-screen mt-10 bg-slate-100">
        <div className="hero-content text-center py-10">
          <div className="">
            <h1 className="text-5xl pb-5 font-bold uppercase">About Me</h1>
            <p className="py-6 text-xl">
              With a diverse background, I have gained experience in web
              development, focusing on HTML, CSS, JavaScript, and React. I also
              have some knowledge of Node.js and MongoDB. Moreover, I have a
              keen interest in expanding my skillset by exploring technologies
              such as JWT, Axios, and payment gateway systems like Stripe. I
              find joy in tackling challenges and collaborating with others to
              discover innovative solutions.
            </p>
            <h1 className="text-3xl pb-3 font-bold">Skills</h1>
            <div className="flex flex-row pt-4 justify-around gap-5">
              <div>
                <img src={javaScript} />
                <p className="mt-2 text-xl">JavaScript</p>
              </div>
              <div>
                <img src={ReactLogo} />
                <p className="mt-2 text-xl">React</p>
              </div>
              <div>
                <img src={Node} />
                <p className="mt-2 text-xl">Node Js.</p>
              </div>
              <div>
                <img src={MongoDb} />
                <p className="mt-2 text-xl">MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

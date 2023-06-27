import React from "react";
import Title from "../../Components/Title";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Title title={"contact"}></Title>
      <div className="bg-slate-50 flex flex-col lg:flex-row justify-around items-center">
        <div data-aos="fade-up-right" data-aos-duration="1500">
          <h1 className="text-3xl pb-4">Social Profile</h1>
          <div className="flex pb-2 flex-row gap-3 items-center text-xl">
            <FaGoogle />
            imwahidgoni17@gmail.com
          </div>
          <div className="flex flex-row pb-2 gap-3 items-center text-xl">
            <FaLinkedin />
            www.linkedin.com/in/ wahid-goni-40a81a27b
          </div>
          <div className="flex flex-row pb-2 gap-3 items-center text-xl">
            <FaFacebook />
            wahid.goni.395
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-duration="1500"
          className="card my-10 py-3 lg:w-[500px] shadow-2xl bg-base-100 bg-opacity-20"
        >
          <div className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Enter Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="form-control mt-4">
              <button className="btn bg-blue-800 border-none text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

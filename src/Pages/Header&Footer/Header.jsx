import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
const Header = () => {
  const handleDownloadCV = () => {
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <div data-aos="fade-down" data-aos-duration="1500" className="navbar z-10 top-0 py-4 px-5 bg-black bg-opacity-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <li>
                <Link to="Portfolio" smooth={true}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="Contact" smooth={true}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="About" smooth={true}>About</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-4xl">DevFolio</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-xl px-1">
            <li>
              <Link to="Portfolio" smooth={true}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="Contact" smooth={true}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="About" smooth={true}>About</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={handleDownloadCV}
            className="btn bg-blue-800 border-none text-white"
          >
            Download CV <FaDownload />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

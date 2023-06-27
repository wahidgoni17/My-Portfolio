import React from "react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer
        data-aos="zoom-out-down"
        data-aos-duration="1500"
        className="footer footer-center p-10 bg-black text-white rounded"
      >
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaGoogle className="fill-current w-[24px] h-[24px]" />
            </a>
            <a>
              <FaLinkedin className="fill-current w-[24px] h-[24px]" />
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

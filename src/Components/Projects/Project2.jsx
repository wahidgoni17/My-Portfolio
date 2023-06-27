import React from "react";
import pic1 from "../../assets/assignment-11-3915d.web.app_ 1.png";
import pic2 from "../../assets/assignment-11-3915d.web.app_ 2.png";
import pic3 from "../../assets/assignment-11-3915d.web.app_ (1).png";
import pic4 from "../../assets/assignment-11-3915d.web.app_ (2).png";
import pic5 from "../../assets/assignment-11-3915d.web.app_ (3).png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
const Project2 = () => {
  return (
    <>
      <div
        data-aos="zoom-out"
        data-aos-duration="1500"
        className="card card-side bg-slate-100 my-10 mx-10 shadow-xl"
      >
        <figure>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper w-[500px] h-[450px]"
          >
            <SwiperSlide>
              <img src={pic1} className="h-full w-fit mx-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic2} className="h-full w-fit mx-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic3} className="h-full w-fit mx-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic4} className="h-full w-fit mx-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic5} className="h-full w-fit mx-auto" />
            </SwiperSlide>
          </Swiper>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">
            ToyHub - CRUD Operation Website
          </h2>
          <div className="my-3">
            <ul className="text-xl list-disc">
              <li>This Project is developed with MERN and Firebase.</li>
              <li>it's made for Kids to Buy Toys.</li>
              <li>This project has eye soothing Animation in the homepage.</li>
              <li>it's Authenticate by Firebase Authentication System.</li>
              <li>Toys are Catagorized in the tab Secton.</li>
              <li>Anybody can add Toys in Add Toys page.</li>
              <li>
                My Toy page is Showed the toys which are added by the logged
                user.
              </li>
              <li>User can update their added toys in the Update toy page.</li>
              <li>Login and Signup system are also added in this project.</li>
            </ul>
          </div>
          <div className="card-actions justify-end">
            <Link to="https://assignment-11-3915d.web.app/">
              <button className="btn bg-blue-800 border-none text-white">
                Live Preview
              </button>
            </Link>
            <Link to="https://github.com/wahidgoni17/Assignment-11-client-side">
              <button className="btn bg-blue-800 border-none text-white">
                Client
              </button>
            </Link>
            <Link to="https://github.com/wahidgoni17/Assignment-11-server-side">
              <button className="btn bg-blue-800 border-none text-white">
                Server
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project2;

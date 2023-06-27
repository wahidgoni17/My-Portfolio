import React from "react";
import pic1 from "../../assets/summer-camp-73556.web.app1_.png";
import pic2 from "../../assets/summer-camp-73556.web.app2_.png";
import pic3 from "../../assets/summer-camp-73556.web.app_ (1).png";
import pic4 from "../../assets/summer-camp-73556.web.app_ (2).png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
const Project1 = () => {
  return (
    <>
      <div data-aos="fade-right" data-aos-duration="1500" className="card card-side my-10 bg-slate-100 mx-10 shadow-xl">
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
          </Swiper>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">Fluentia - Full Stack Website</h2>
          <div className="my-3">
            <ul className="text-xl list-disc">
              <li>
                This Project is developed with MERN, Payment Gateway, JWT and
                axios.
              </li>
              <li>
                it's made for students to learn new things in their Summer Camp.
              </li>
              <li>it's Authenticate by Firebase Authentication System.</li>
              <li>it has an Admin panel for Admin.</li>
              <li>
                Classes and Instructors are Showcased on the Class and
                Instructor page
              </li>
              <li>it has a QnA Part at the end of homepage</li>
              <li>
                it also has a Dashboard for the Student, Instructor and Admin
              </li>
              <li>Students can select their classes from the class page</li>
              <li>Login and Signup system are also added in this project</li>
            </ul>
          </div>
          <div className="card-actions justify-end">
            <Link to="https://summer-camp-73556.web.app">
              <button className="btn bg-blue-800 border-none text-white">
                Live Preview
              </button>
            </Link>
            <Link to="https://github.com/wahidgoni17/Assignment-12-client-side">
              <button className="btn bg-blue-800 border-none text-white">
                Client
              </button>
            </Link>
            <Link to="https://github.com/wahidgoni17/Assignment-12-server-side">
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

export default Project1;

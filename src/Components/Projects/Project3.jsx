import React from "react";
import pic1 from "../../assets/assignment-10-client-sid-c03ea.web.app1_.png";
import pic2 from "../../assets/assignment-10-client-sid-c03ea.web.app_ (1).png";
import pic3 from "../../assets/assignment-10-client-sid-c03ea.web.app_ (2).png";
import pic4 from "../../assets/assignment-10-client-sid-c03ea.web.app_ (3).png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
const Project3 = () => {
  return (
    <>
      <div data-aos="fade-left" data-aos-duration="1500" className="card card-side bg-slate-100 my-10 mx-10 shadow-xl">
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
          <h2 className="card-title text-4xl">
            Epicurious - Authetication Website
          </h2>
          <div className="my-3">
            <ul className="text-xl list-disc">
              <li>This Project is developed with React and Firebase.</li>
              <li>It's made for them who are love to try Foreign Cuisine.</li>
              <li>User can explore Foreign Chefs Recipe</li>
              <li>it's Authenticate by Firebase Authentication System.</li>
              <li>
                Chefs are Showed in the Homepage.
              </li>
              <li>After Clicking the Recipe Button user should be redirect in the Recipe page.</li>
              <li>Login and Signup system are also added in this project.</li>
              <li>
                Google and Github login are available in the login page
              </li>
              <li>In the Blog, there are Some question and answer</li>
            </ul>
          </div>
          <div className="card-actions justify-end">
            <Link to="https://assignment-10-client-sid-c03ea.web.app/">
              <button className="btn bg-blue-800 border-none text-white">
                Live Preview
              </button>
            </Link>
            <Link to="https://github.com/wahidgoni17/Assignment-10-client-side">
              <button className="btn bg-blue-800 border-none text-white">
                Client
              </button>
            </Link>
            <Link to="https://github.com/wahidgoni17/Assignment-10-server-side">
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

export default Project3;

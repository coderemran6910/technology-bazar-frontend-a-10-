import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../SliderBanner/Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="carousel w-full  h-[95vh]">
            <div id="slide1" className="carousel-item relative w-full">
              <div
                className="hero h-full"
                style={{
                  backgroundImage: `url("https://i.ibb.co/p1P401y/jonas-leupe-Ggw9-Tkdr-AA0-unsplash.jpg")`,
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold"> Welcome to Our New Shop </h1>
                    <p className="mb-5"> Thank You so much for comming our new Shop </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel w-full  h-[95vh]">
            <div id="slide1" className="carousel-item relative w-full">
              <div
                className="hero h-full"
                style={{
                  backgroundImage: `url("https://i.ibb.co/3Yt869g/martin-katler-7w-Cxl-Bf-GMdk-unsplash.jpg")`,
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold"> Are You A Technology LOver ?</h1>
                    <p className="mb-5">Good News For You. Yeahhhhhhhh!!!! </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel w-full  h-[95vh]">
            <div id="slide1" className="carousel-item relative w-full">
              <div
                className="hero h-full"
                style={{
                  backgroundImage: `url("https://i.ibb.co/VBrdFPP/nikita-kostrykin-i1-Q9pphr-WUw-unsplash.jpg")`,
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold"> What Do You need ???? </h1>
                    <p className="mb-5"> Mobile Computer, Laptop ???? </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel w-full  h-[95vh]">
            <div id="slide1" className="carousel-item relative w-full">
              <div
                className="hero h-full"
                style={{
                  backgroundImage: `url("https://i.ibb.co/ZTxX5Ny/conor-luddy-IVa-Kks-EZm-ZA-unsplash.jpg")`,
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold"> DO you need any Electronics Products </h1>
                    <p className="mb-5">We have all Technology products </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
  </Swiper>
        </>
  );
}

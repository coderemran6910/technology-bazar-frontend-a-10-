
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../SliderBanner/Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
       <SwiperSlide> <img  src="https://i.ibb.co/3yt6KXh/alex-presa-At-Xt2o-Lq-Yns-unsplash.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/p1P401y/jonas-leupe-Ggw9-Tkdr-AA0-unsplash.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/3Yt869g/martin-katler-7w-Cxl-Bf-GMdk-unsplash.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/VBrdFPP/nikita-kostrykin-i1-Q9pphr-WUw-unsplash.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/ZTxX5Ny/conor-luddy-IVa-Kks-EZm-ZA-unsplash.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/pdVPJFN/daniel-korpai-OI0-G3-K6-KVM-unsplash.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/MkWz2Gb/zana-latif-QCBy84h-Le-JU-unsplash.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/njpQXgz/alexandru-bogdan-ghita-e-M6-WUs4n-KMY-unsplash.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/Xkp4z8Y/khoa-nguyen-Jdp-Gvuy1n-RQ-unsplash.jpg" alt="" /> </SwiperSlide>
      </Swiper>
    </>
  );
}

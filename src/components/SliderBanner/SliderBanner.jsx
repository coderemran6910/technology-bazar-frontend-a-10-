import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../SliderBanner/Slider.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="https://i.ibb.co/0BJFdGy/anh-nhat-yqclo-Mb3-Abw-unsplash.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/0BJFdGy/anh-nhat-yqclo-Mb3-Abw-unsplash.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/0BJFdGy/anh-nhat-yqclo-Mb3-Abw-unsplash.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/0BJFdGy/anh-nhat-yqclo-Mb3-Abw-unsplash.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/0BJFdGy/anh-nhat-yqclo-Mb3-Abw-unsplash.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/0BJFdGy/anh-nhat-yqclo-Mb3-Abw-unsplash.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/0BJFdGy/anh-nhat-yqclo-Mb3-Abw-unsplash.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/0BJFdGy/anh-nhat-yqclo-Mb3-Abw-unsplash.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/0BJFdGy/anh-nhat-yqclo-Mb3-Abw-unsplash.jpg" alt="" /> </SwiperSlide>
      </Swiper>
    </>
  );
}

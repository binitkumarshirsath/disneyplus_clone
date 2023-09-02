import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import imageOne from "../../assets/images/slider-badag.jpg";
import imageTwo from "../../assets/images/slider-badging.jpg";
import imageThree from "../../assets/images/slider-scale.jpg";
import imageFour from "../../assets/images/slider-scales.jpg";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const ImageSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imageOne} alt="" srcSet="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageTwo} alt="" srcSet="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageThree} alt="" srcSet="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageFour} alt="" srcSet="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageSlider;

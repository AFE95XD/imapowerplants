import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Hero = () => {
  return (
    <>
      <Swiper>
        <SwiperSlide className="bg-cover bg-center h-screen bg-[url('src/assets/img/carrousel/usar4.jpg')]">
          <div className=""></div>
        </SwiperSlide>
        <SwiperSlide className="bg-cover bg-center h-screen bg-[url('src/assets/img/carrousel/img1.jpg')]"></SwiperSlide>
        <SwiperSlide className="bg-cover bg-center h-screen bg-[url('src/assets/img/carrousel/usar1.jpg')]"></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;

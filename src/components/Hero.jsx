import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <>
      <Swiper
        id="sec0"
        tag="section"
        modules={[Navigation, Autoplay]}
        navigation={true}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="relative flex justify-start items-center">
            <div>
              <img
                className="h-screen w-screen object-cover brightness-75"
                src="/assets/img/carrousel/slide1.jpg"
                alt="slide1"
              />
            </div>
            <div
              className="absolute z-50 ml-20 lg:ml-32 flex flex-col"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h2 className="font-barlow font-bold text-white text-3xl md:text-5xl lg:text-7xl pb-4">
                Energía
              </h2>
              <p className="font-roboto font-normal text-white text-sm md:text-base md:font-bold w-3/5 tracking-[0.3px]">
                Diseñamos y Ejecutamos Proyectos de Generación y Cogeneración a
                base de Gas Natural y Energía Solar
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex justify-start items-center">
            <div>
              <img
                className="h-screen w-screen object-cover brightness-75"
                src="/assets/img/carrousel/slide2.jpg"
                alt="slide1"
              />
            </div>
            <div
              className="absolute z-50 ml-20 lg:ml-32 flex flex-col"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h2 className="font-barlow font-bold text-white text-3xl md:text-5xl lg:text-7xl pb-4">
                Construcción
              </h2>
              <p className="font-roboto font-normal text-white text-sm md:text-base md:font-bold w-3/5 tracking-[0.3px]">
                Desarrollamos Proyectos y Obra Civil, Mecánica, Eléctrica y de
                Control de Plantas Industriales
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex justify-start items-center">
            <div>
              <img
                className="h-screen w-screen object-cover brightness-75"
                src="/assets/img/carrousel/slide3.jpg"
                alt="slide1"
              />
            </div>
            <div
              className="absolute z-50 ml-20 lg:ml-32 flex flex-col"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h2 className="font-barlow font-bold text-white text-3xl md:text-5xl lg:text-7xl pb-4">
                Mantenimiento
              </h2>
              <p className="font-roboto font-normal text-white text-sm md:text-base md:font-bold w-3/5 tracking-[0.3px]">
                Brindamos Mantenimiento a Sub Estaciones Eléctricas, Plantas de
                Cogeneración y Planta Fotovoltaicas
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;

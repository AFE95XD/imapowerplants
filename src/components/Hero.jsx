import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <>
      <Swiper
        tag="section"
        modules={[Navigation]}
        navigation={true}
        loop={true}
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <div className="relative flex justify-start items-center">
            <div>
              <img
                className="h-screen w-screen object-cover brightness-75"
                src="src/assets/img/carrousel/slide1.jpg"
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
                src="src/assets/img/carrousel/slide2.jpg"
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
                src="src/assets/img/carrousel/slide3.jpg"
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
      {/* <div className="relative h-screen">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-[url(https://via.placeholder.com/1920x1080)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Título del carrousel
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Descripción del carrousel
          </p>
        </div>
        <div className="absolute top-1/2 -mt-6 left-0 w-full flex items-center justify-between">
          <button className="ml-4 md:ml-8 px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.72 15.78l-1.06-1.06L12.88 10L7.66 4.78l1.06-1.06L14 10l-5.28 5.28z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="mr-4 md:mr-8 px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.28 15.78l5.28-5.28l-5.28-5.28l-1.06 1.06L12.88 10l-4.66 4.66l1.06 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Hero;

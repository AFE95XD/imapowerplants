import React from "react";

const SecInfo1 = () => {
  return (
    <section
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      id="sec2"
    >
      <div
        className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div>
          <p className="inline-block px-3 py-px mb-4 tracking-wider uppercase rounded-full bg-teal-accent-400 font-roboto text-lg font-bold text-[#0000FF]">
            Otras Áreas de Negocio
          </p>
        </div>
        <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-[#1b1a1a] sm:text-4xl md:mx-auto font-barlow">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Gestión</span>
          </span>{" "}
          completa de proyectos.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          En IMA Mechanical Engineers le ofrecemos solución a su Proyecto Bajo
          la Modalidad Llave en Mano. Integramos todas las Ingenierías de
          Proyecto.
        </p>
      </div>
      <div
        className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="src/assets/img/carrousel/usar7.jpg"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="src/assets/img/carrousel/usar8.jpg"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="src/assets/img/carrousel/usar3.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 font-semibold leading-5">
              Planta de Alimentos
            </h6>
            <p className="text-sm text-gray-900">
              Desde modernización de instalaciones e incremento de capacidad
              productiva hasta construcción parcial o total de plantas de
              alimentos.
            </p>
          </div>
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 font-semibold leading-5">Mantenimiento</h6>
            <p className="text-sm text-gray-900">
              Brindamos mantenimiento a motores de gas natural o Diésel,
              subestaciones eléctricas en media tensión y suministramos químicos
              a calderas de vapor. También vendemos refaccionamiento.
            </p>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">
              Tratamiento de Calderas
            </h6>
            <p className="text-sm text-gray-900">
              Ofrecemos Tratamiento Químico del Agua de Alimentación o Caldera
              para Evitar Incrustaciones y Corrosión en los Internos de su
              Generador de Vapor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecInfo1;

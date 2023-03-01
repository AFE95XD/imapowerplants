import "./SecSliderInfinito.css";

const SecSliderInfinito = () => {
  return (
    <section>
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
      <div className="contenedor">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/flagasa-1.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/ipn-1.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/man.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/martin.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/mwm.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/prodiel-1.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/rr.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/thermax.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            {/* DOBLE */}
            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/flagasa-1.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/ipn-1.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/man.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/martin.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/mwm.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/prodiel-1.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/rr.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/thermax.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecSliderInfinito;

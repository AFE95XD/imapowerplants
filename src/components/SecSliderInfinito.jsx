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
        <p className="inline-block px-3 py-px mb-4 tracking-wider uppercase rounded-full bg-teal-accent-400 font-roboto text-lg font-bold text-[#0000FF]">
          Clientes y Alianzas Estratégicas
        </p>
        <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-[#1b1a1a] sm:text-4xl md:mx-auto font-barlow">
          ¡Conoce con quien hemos trabajado!
        </h2>
      </div>
      {/* SliderInf */}
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
                src="src/assets/img/sliderInfinite/plami.png"
                height="100"
                width="250"
                className="md:pt-8 md:pl-3"
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
                src="src/assets/img/sliderInfinite/mwm.png"
                height="100"
                width="250"
                alt=""
              />
            </div>

            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/conrad.png"
                height="100"
                width="150"
                className="sm:ml-10"
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
                src="src/assets/img/sliderInfinite/prodiel-1.png"
                height="100"
                width="250"
                className="sm:pl-8 sm:pr-2 sm:pt-2"
                alt=""
              />
            </div>

            {/* SEGUNDA ILERA */}
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
                src="src/assets/img/sliderInfinite/plami.png"
                height="100"
                width="250"
                className="md:pt-8 md:pl-3"
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
                src="src/assets/img/sliderInfinite/mwm.png"
                height="100"
                width="250"
                alt=""
              />
            </div>

            <div className="slide">
              <img
                src="src/assets/img/sliderInfinite/conrad.png"
                height="100"
                width="150"
                className="sm:ml-10"
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
                src="src/assets/img/sliderInfinite/prodiel-1.png"
                height="100"
                width="250"
                className="sm:pl-8 sm:pr-2 sm:pt-2"
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

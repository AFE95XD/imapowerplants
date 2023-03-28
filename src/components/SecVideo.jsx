const SecVideo = () => {
  return (
    <>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
            data-aos="fade-up-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="inline-block px-3 py-px mb-4 tracking-wider uppercase rounded-full bg-teal-accent-400 font-roboto text-lg font-bold text-[#0000FF]">
              Nuestro Trabajo
            </p>
            <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-[#1b1a1a] sm:text-4xl font-barlow">
              ¡Garantizamos el éxito de su proyecto!
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Contamos con Software Especializado para el Diseño y Simulación de
              Procesos Industriales, AVEVA Pro II. Nuestra Ingeniería Garantiza
              el Funcionamiento de sus Proyectos.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
            <video className="w-fit h-[29rem] max-w-full" controls>
              <source src="/assets/media/videoIMA.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecVideo;

const Footer = () => {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-gray-100"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <img
            src="https://imapowerplants.com/wp-content/uploads/2021/09/IMA_logo.png"
            alt="logoIMA"
          />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          En IMA Mechanical Engineers le ofrecemos solución a su Proyecto Bajo
          la Modalidad Llave en Mano. Integramos todas las Ingenierías de
          Proyecto.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

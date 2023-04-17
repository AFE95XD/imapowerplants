const Footer = () => {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-gray-100"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="flex flex-col items-center mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-52 h-14">
          <img
            src="/assets/img/logo_IMA2.png"
            alt="logoIMA"
            className="w-full h-full object-contain"
          />
        </div>

        <p className="mx-auto mt-6 max-w-lg text-center leading-relaxed text-gray-500">
          IMA Mechanical Engineers es una Firma de Ingeniería comprometida con
          la Excelencia. Para solicitar asistencia, contáctenos al siguiente
          correo:{" "}
          <span className="text-[#0000FF]">contacto@imapowerplants.com</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

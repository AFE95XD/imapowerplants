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
          IMA Mechanical Engineers es una Firma de Ingeniería comprometida con
          la Excelencia. Para solicitar asistencia, contáctenos al siguiente
          correo y números telefónicos:{" "}
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800">
            55-3717-1132
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

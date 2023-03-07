import { useState } from "react";

import { MdEngineering } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { FaIndustry } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";

import Modal from "./svg/Modal";

const cards = [
  {
    id: 1,
    icono: MdEngineering,
    titulo: "Ingeniería",
    descripcion:
      "Proyectos de cogeneración a base de motor de combustión interna, turbinas de gas y vapor. Garantizamos éxito y rendimiento energético.",
    // imagen: "src/"
  },
  {
    id: 2,
    icono: SlEnergy,
    titulo: "Plantas de Energía",
    descripcion:
      "Diseñamos, Proyectamos y Construimos Maquinaria Especializada para sus Procesos Productivos, como lo pueden ser Tolvas, Tanques, Calandretas, Recipientes a presión, entre los principales.",
  },
  {
    id: 3,
    icono: FaIndustry,
    titulo: "Plantas Industriales",
    descripcion:
      "Realizamos Estudios Eléctricos Especializados, Diagnósticos Energéticos e Ingeniería Básica de Proyectos Industriales.",
  },
  {
    id: 4,
    icono: GiAutoRepair,
    titulo: "Mantenimiento Industrial",
    descripcion:
      "Realizamos Estudios Eléctricos Especializados, Diagnósticos Energéticos e Ingeniería Básica de Proyectos Industriales.",
  },
];

const SecCardsInfo = () => {
  const [modalId, setModalId] = useState(null);

  const handleButtonClick = (id) => {
    setModalId(id);
  };

  const handleCloseModal = () => {
    setModalId(null);
  };

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };
  return (
    <section
      className="bg-contain bg-center h-auto bg-[url('src/assets/img/map.png')]"
      id="sec1"
    >
      <div className="mx-auto max-w-7xl px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8 text-center py-32">
        <div
          className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <p className="inline-block px-3 py-px mb-4 tracking-wider uppercase rounded-full bg-teal-accent-400 font-roboto text-lg font-bold text-[#0000FF]">
            Áreas de negocio
          </p>
          <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-[#1b1a1a] sm:text-4xl md:mx-auto font-barlow">
            ¡Garantizamos el exito de su proyecto!
          </h2>
        </div>

        <div
          className="mx-auto mt-12 grid max-w-lg gap-y-12 lg:max-w-none lg:grid-cols-2"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {/* CARD */}
          {cards.map((card) => (
            <div
              className="group relative w-3/4 h-96 mx-auto rounded-lg shadow-2xl bg-white transform hover:-translate-y-2 transition-all duration-300"
              key={generarId()}
            >
              <img
                src="https://source.unsplash.com/random/800x600"
                alt="imaAl"
                className="w-full h-full object-cover absolute top-0 left-0 z-0 transition duration-500 ease-in-out opacity-0 group-hover:opacity-40 group-hover:rounded-lg"
              />
              {/* CONTENIDO */}
              <div className="absolute top-0 left-0 z-10 w-full h-full p-6 text-lg font-medium text-black hover:bg-gradient-to-r hover:from-[#0000ff8f] hover:to-[#0000ff2c] group-hover:rounded-lg hover:text-white">
                <card.icono className="h-20 w-20 mx-auto mb-6" />
                <h3 className="mb-4 font-barlow font-semibold text-xl">
                  {card.titulo}
                </h3>
                <p className="mb-4 font-roboto font-normal text-base">
                  {card.descripcion}
                </p>
                <button
                  onClick={() => handleButtonClick(card.id)}
                  className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                >
                  Leer más
                </button>
                {/* Ventanas modales */}
                {modalId === 1 && (
                  <Modal onClose={handleCloseModal}>
                    {/* Aquí va el contenido de la ventana modal 1 */}
                    {/* ... */}
                  </Modal>
                )}
                {modalId === 2 && (
                  <Modal onClose={handleCloseModal}>
                    {/* Aquí va el contenido de la ventana modal 2 */}
                    {/* ... */}
                  </Modal>
                )}
                {modalId === 3 && (
                  <Modal onClose={handleCloseModal}>
                    {/* Aquí va el contenido de la ventana modal 3 */}
                    {/* ... */}
                  </Modal>
                )}
                {modalId === 4 && (
                  <Modal onClose={handleCloseModal}>
                    {/* Aquí va el contenido de la ventana modal 4 */}
                    {/* ... */}
                  </Modal>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecCardsInfo;

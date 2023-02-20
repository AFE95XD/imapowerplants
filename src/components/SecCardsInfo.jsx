import { useState } from "react";

import Energia from "./svg/Energia";
import FrabricaAlimentos from "./svg/FrabricaAlimentos";
import Mantenimiento from "./svg/Mantenimiento";

const cards = [
  {
    // icono: <Energia />,
    titulo: "Energía",
    descripcion:
      "Proyectos de cogeneración a base de motor de combustión interna, turbinas de gas y vapor. Garantizamos éxito y rendimiento energético.",
    // imagen: "src/"
  },
  {
    // icono: <FrabricaAlimentos />,
    titulo: "Fabricación de Maquinaria",
    descripcion:
      "Diseñamos, Proyectamos y Construimos Maquinaria Especializada para sus Procesos Productivos, como lo pueden ser Tolvas, Tanques, Calandretas, Recipientes a presión, entre los principales.",
  },
  {
    // icono: <Mantenimiento />,
    titulo: "Ingeniería de Proyectos",
    descripcion:
      "Realizamos Estudios Eléctricos Especializados, Diagnósticos Energéticos e Ingeniería Básica de Proyectos Industriales.",
  },
];

const SecCardsInfo = () => {
  // const [isHovered, setHovered] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };
  return (
    <section className="bg-contain bg-center h-auto bg-[url('src/assets/img/map.png')]">
      <div className="mx-auto max-w-7xl px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8 text-center py-32">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <p className="inline-block px-3 py-px mb-4 tracking-wider uppercase rounded-full bg-teal-accent-400 font-roboto text-lg font-bold text-[#0000FF]">
            Realizamos Proyectos Eficientes
          </p>
          <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-[#1b1a1a] sm:text-4xl md:mx-auto font-barlow">
            Soluciones Rápidas, Inteligentes y Excelentes para hacer crecer su
            negocio.
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {/* CARD */}
          {cards.map((card) => (
            <div
              className="group relative w-80 h-96 mx-auto rounded-lg shadow-2xl bg-white transform hover:-translate-y-2 transition-all duration-300"
              key={generarId()}
            >
              <img
                src="https://source.unsplash.com/random/800x600"
                alt="imaAl"
                className="w-full h-full object-cover absolute top-0 left-0 z-0 transition duration-500 ease-in-out opacity-0 group-hover:opacity-40 group-hover:rounded-lg"
              />
              {/* CONTENIDO */}
              <div className="absolute top-0 left-0 z-10 w-full h-full p-6 text-lg font-medium text-black hover:bg-gradient-to-r hover:from-[#0000ff8f] hover:to-[#0000ff2c] group-hover:rounded-lg hover:text-white">
                <h3 className="mb-4 font-barlow font-semibold text-xl">
                  {card.titulo}
                </h3>
                <p className="mb-4 font-roboto font-normal text-base">
                  {card.descripcion}
                </p>
              </div>
            </div>
          ))}

          {/* <div className="relative bg-white rounded-md overflow-hidden shadow-lg w-80 h-96 transform hover:-translate-y-2 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-800 bg-opacity-50 flex flex-col justify-center items-center text-center text-white opacity-0 hover:opacity-100 transition duration-300">
              <h2 className="text-3xl font-bold mb-2">Título de la tarjeta</h2>
              <p className="text-xl mb-4">Descripción de la tarjeta</p>
              <button className="bg-white text-blue-800 hover:text-white font-bold py-2 px-4 rounded-md">
                Botón
              </button>
            </div>
            <div
              className={`absolute top-0 left-0 w-full h-full bg-cover bg-center ${
                isHovered ? "opacity-0" : "opacity-50"
              } bg-[url('https://source.unsplash.com/random/800x600')]`}
            ></div>
          </div> */}

          {/* {cards.map((card) => (
            <div
              className="relative w-80 h-96 mx-auto rounded-lg overflow-hidden shadow-lg bg-white transition-[all] duration-[0.5s] ease-in
            before:content-[''] before:absolute before:block before:w-full before:h-full before:z-[2] before:transition-[all] before:duration-[0.5s] before:ease-in before:opacity-0 before:left-0 before:top-0 hover:-translate-y-5 hover:before:opacity-100 before:bg-gradient-to-r before:from-[#0000ff8f] before:to-[#0000ff2c]"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              key={generarId()}
            >
              <img
                src="https://source.unsplash.com/random/800x600"
                alt=""
                className="w-full h-full object-cover absolute top-0 left-0 z-0 transition duration-500 ease-in opacity-0"
                style={{ opacity: isHovered ? "0.75" : "0" }}
              />
              <div
                className={`absolute top-0 left-0 z-10 w-full h-full p-6 text-lg font-medium text-${
                  isHovered ? "white" : "black"
                } transition duration-500 ease-in-out`}
              >
                <h3 className="mb-4">{card.titulo}</h3>
                <p className="mb-4">{card.descripcion}</p>
              </div>
            </div>
          ))} */}
          {/* <div
            className="card relative w-80 h-96 mx-auto rounded-lg overflow-hidden shadow-lg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src="https://source.unsplash.com/random/800x600"
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0 z-0 transition duration-500 ease-in-out opacity-0"
              style={{ opacity: isHovered ? "0.75" : "0" }}
            />
            <div
              className={`card-content absolute top-0 left-0 z-10 w-full h-full p-6 text-lg font-medium text-${
                isHovered ? "white" : "black"
              } transition duration-500 ease-in-out`}
            >
              <h3 className="mb-4">Título de la tarjeta</h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lobortis magna quis diam auctor euismod.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600"
              >
                Botón de la tarjeta
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SecCardsInfo;

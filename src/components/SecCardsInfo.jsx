import { useState } from "react";

import Energia from "./svg/Energia";
import FrabricaAlimentos from "./svg/FrabricaAlimentos";
import Mantenimiento from "./svg/Mantenimiento";

const posts = [
  {
    icono: <Energia />,
    titulo: "Energia",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    icono: <FrabricaAlimentos />,
    titulo: "Frabrica de Alimentos",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    icono: <Mantenimiento />,
    titulo: "Mantenimiento",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
];

const SecCardsInfo = () => {
  const [isHovered, setHovered] = useState(false);
  return (
    <section className="bg-contain bg-center h-auto bg-[url('src/assets/img/map.png')]">
      <div className="mx-auto max-w-7xl px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8 text-center py-32">
        <span className="font-roboto text-lg font-bold text-[#0000FF]">
          Realizamos Proyectos Eficientes
        </span>
        <h2 className="font-barlow text-3xl font-bold text-[#1b1a1a] capitalize">
          Soluciones Rápidas, Inteligentes y Excelentes para hacer crecer su
          negocio.
        </h2>

        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          <div
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
          </div>
          {/* <div className="relative overflow-hidden rounded shadow-[0_5px_83px_0_rgb(40_40_40_/_4%)] transition-all duration-[0.4s] ease-linear bg-white mb-[30px] px-10 py-[50px]">
            <div className="relative z-[2]">contenido</div>
            <div className="bg-[url('../assets/img/service-overlay.png')] bg-cover bg-center absolute w-full h-full opacity-0 text-center z-[1] transition-all duration-[0.5s] ease-linear left-0 bottom-0 before:bg-[rgba(254,90,14,0.85)]"></div>|
          </div> */}
          {/* <div className="relative overflow-hidden w-[400px] h-[360px] px-4 py-8 bg-white flex items-end shadow-[0px_7px_10px_rgba(0,0,0,0.5)] transition-[ease-in-out] duration-[0.5s] m-2.5 hover:-translate-y-5 before:content-[''] before:absolute before:top-0 before:left-0 before:block before:w-full before:h-full before:bg-gradient-to-b before:from-[#0000FF] before:to-[#0000FF] before:z-[2] before:transition-[0.5s] before:duration-[all] before:opacity-0 hover:before:opacity-10">
            <img
              src="src/assets/img/img1.jpg"
              alt="card1"
              className="bg-cover w-full h-full object-cover absolute left-0 top-0 hover:opacity-100"
            />
            <div className="relative z-[3] text-white opacity-0 translate-y-[30px] transition-[0.5s] duration-[all] hover:opacity-100 hover:translate-y-0">
              <h1 className="tracking-[1px] text-[15px] mt-2 mb-5">Heading</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                eaque exercitationem earum odio sed nesciunt, dolor cumque! Esse
                inventore nemo hic soluta iure reiciendis repudiandae,
                praesentium itaque expedita quo tempore.
              </p>
              <a
                href=""
                className="hover:opacity-100 hover:translate-y-0 no-underline text-black text-sm font-[bold] cursor-pointer transition-[0.4s] duration-[ease-in-out] px-4 py-2 bg-white hover:shadow-[0px_7px_10px_rgba(0,0,0,0.5)]"
              >
                Read More
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SecCardsInfo;

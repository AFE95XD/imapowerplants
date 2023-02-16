import { useState } from "react";
import "tailwindcss/tailwind.css";

function Card() {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className="card relative w-80 h-96 mx-auto rounded-lg overflow-hidden shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src="https://source.unsplash.com/random/800x600"
        alt=""
        className="w-full h-full object-cover opacity-75 absolute top-0 left-0 z-0 transition duration-500 ease-in-out"
        style={{
          filter: isHovered ? "brightness(0.7) hue-rotate(180deg)" : "",
        }}
      />
      <div
        className={`card-content absolute top-0 left-0 z-10 w-full h-full p-6 text-lg font-medium text-${
          isHovered ? "white" : "black"
        } transition duration-500 ease-in-out`}
      >
        <h3 className="mb-4">Título de la tarjeta</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis
          magna quis diam auctor euismod.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600"
        >
          Botón de la tarjeta
        </a>
      </div>
    </div>
  );
}

export default Card;

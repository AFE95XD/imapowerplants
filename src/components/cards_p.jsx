import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.jpg";
import "./estilos.css";

const CardsP = () => {
  return (
    <>
      <div className="wrapper">
        <div className="card">
          <img src={img1} alt="" />
          <div className="info">
            <h1>Heading</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              eaque exercitationem earum odio sed nesciunt, dolor cumque! Esse
              inventore nemo hic soluta iure reiciendis repudiandae, praesentium
              itaque expedita quo tempore.
            </p>
            <a href="" className="btn">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <img src={img2} alt="" />
          <div className="info">
            <h1>Heading</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              eaque exercitationem earum odio sed nesciunt, dolor cumque! Esse
              inventore nemo hic soluta iure reiciendis repudiandae, praesentium
              itaque expedita quo tempore.
            </p>
            <a href="" className="btn">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <img src={img3} alt="" />
          <div className="info">
            <h1>Heading</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              eaque exercitationem earum odio sed nesciunt, dolor cumque! Esse
              inventore nemo hic soluta iure reiciendis repudiandae, praesentium
              itaque expedita quo tempore.
            </p>
            <a href="" className="btn">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsP;

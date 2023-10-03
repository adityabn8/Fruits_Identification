import React from "react";
import FruitsRight from "../images/Fruits_Right.png";
import FruitsLeft from "../images/Fruits_Left.png";
import Leaf from "../images/leaf.png";
import Logo from "../images/newLogo.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="topPart">
          <div className="box">
          <div className="logo">
            <img className="logoimg" src={Logo} alt="Logo" />
          </div>
          <div className="title">
            <h1>
              FRUITS <br /> CLASSIFICATION <br /> USING CNN
            </h1>
          </div>
          </div>
          <div className="FruitsRight">
            <img src={FruitsRight} alt="Fruits" />
          </div>
        </div>
        <div className="bottomPart">
          <img className="FruitsLeft" src={FruitsLeft} alt="Fruits" />
          <img className="Leaf" src={Leaf} alt="Fruits" />
        </div>
      </div>
    </>
  );
};

export default Hero;

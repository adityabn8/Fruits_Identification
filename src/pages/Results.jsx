import React from "react";
import Heading from "../Components/Heading";
import img from "../images/apple.png";
import { LeftLeaves, RightLeaves } from "../Components/Leaves";

const Results = () => {
  return (
    <>
      <div className="content">
      <LeftLeaves count={2}/>
        <div className="resultContainer">
          <Heading title="Results" />
          <div className="resultBox">
            <div className="upperPart">
              <img className="fruitimg" src={img} alt="Fruit Image" />
              <div className="generalInfo">
                <h2 className="points">Name : </h2>
                <h2 className="points">Binomial name : </h2>
                <h2 className="points">Genus : </h2>
                <h2 className="points">Family : </h2>
                <h2 className="points">Origin : </h2>
                <h2 className="points">Category : </h2>
              </div>
            </div>
            <div className="lineDivider"></div>

            <div className="lowerPart">
              <h2 className="points">Description : </h2>
              <h2 className="points">Nutritional Information : </h2>
              <h2 className="points">Health Benefits :</h2>
              <h2 className="points">Seasonality :</h2>
              <h2 className="points">Allergenicity :</h2>
              <h2 className="points">Current price :</h2>
            </div>
          </div>
        </div>
        <RightLeaves count={2}/>
      </div>
    </>
  );
};

export default Results;

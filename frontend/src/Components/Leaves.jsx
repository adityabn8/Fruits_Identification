import React from "react";
import Leaf from "../images/leaf.png";

const LeftLeaves = ({ count }) => {
  const divs = Array.from({ length: count }, (_, index) => (
    <div className="leaves">
      <img className="left" src={Leaf} alt="Leaf" />
    </div>
  ));
  return (
    <div>
      <div className="leaves">{divs}</div>
    </div>
  );
};

const RightLeaves = ({ count }) => {
  const divs = Array.from({ length: count }, (_, index) => (
    <div className="leaves">
      <img className="right" src={Leaf} alt="Leaf" />
    </div>
  ));
  return (
    <div>
      <div className="leaves">{divs}</div>
    </div>
  );
};

export { LeftLeaves, RightLeaves };

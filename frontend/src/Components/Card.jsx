import React from "react";

const Card = (props) => {
  const data = props.answer;
  return (
    <>
      <div className="card1">
        <h2 className="Question1">{props.question}</h2>
        <p className="Answer1">{props.brief}</p>
        <ul className="list">
          {data.map((items, index) => {
            return (
              <>
                <li className="items">
                  <span className="subHeading"> {items.subHeading}</span>
                  {items.description}
                  <p className="desc"></p>
                </li>
              </>
            );
          })}

          {console.log(data)}
        </ul>
      </div>
    </>
  );
};

export default Card;

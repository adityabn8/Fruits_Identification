import React from "react";
import Heading from "../Components/Heading";
import Card from "../Components/Card";
import { faq } from "../Components/dataJSON/faq";
import { LeftLeaves, RightLeaves } from "../Components/Leaves";

const About = () => {
  return (
    <>
      <div className="content">
        <LeftLeaves count="10"/>
        <div className="aboutContainer">
          <Heading title="What our project does?" />

          {faq.map((data, index) => {
            return (
              <Card key={index}
                question={data.question}
                brief={data.brief}
                answer={data.answer}
              />
            );
          })}
        </div>
        <RightLeaves count="10" />
      </div>
    </>
  );
};

export default About;

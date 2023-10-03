import React from "react";
import ContactCard from "../Components/ContactCard";
import Heading from "../Components/Heading";
import { LeftLeaves, RightLeaves } from "../Components/Leaves";
import vinay from "../images/Vinay.jpg";
import aditya from "../images/aditya.jpg";
import dev1 from "../images/dev1.png";

const Contact = () => {
  return (
    <div>
      <div className="content">
        <LeftLeaves count={4}/>
        <div className="contactContainer">
          <Heading title="Get In touch" />
          <ContactCard
            name="Varun Urs M S"
            photo={dev1}
            githublink="https://github.com/VarunUrs4"
            linkedinlink="https://www.linkedin.com/in/varun-urs-m-s-060706225/"
            instagramlink="https://www.instagram.com/varun_urs_7/"
            maillink="varunurs4589@gmail.com"
          />
          <ContactCard
            name="Vinay Kulkarni"
            photo={vinay}
            githublink="https://github.com/vinaykulk621"
            linkedinlink="https://www.linkedin.com/in/vinay-kulkarni-725184245/"
            instagramlink="http://instagram.com/vinaykulka_"
            maillink="kulkarnivinay621@gmail.com"
          />
          <ContactCard
            name="Tushar B T"
            photo={dev1}
            githublink=""
            linkedinlink=""
            instagramlink=""
            maillink="varunurs4589@gmail.com"
          />
          <ContactCard
            name="Aditya B N"
            photo={aditya}
            githublink="https://github.com/Coderadi777"
            linkedinlink="https://www.linkedin.com/in/aditya-nagathan-ba0729218"
            instagramlink="https://instagram.com/adityabasavrajn?igshid=NGExMmI2YTkyZg=="
            maillink="adityabasavarajn@gmail.com"
          />
        </div>
        <RightLeaves count={4}/>
      </div>
    </div>
  );
};

export default Contact;


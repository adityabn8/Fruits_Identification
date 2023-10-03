import React from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import mail from "../images/mail.png";

const ContactCard = ({name,githublink,linkedinlink,photo,instagramlink,maillink}) => {
  return (
    <>
      <div className="DevButton">
        <img className="devPics" src={photo} alt="upload button" />
        <h2 className="name">{name}</h2>
        <p className="socialDiv">
          <a href={githublink} target="_blank">
            <img className="socialIcon" src={github} alt="Github" />
          </a>
          <a href={linkedinlink} target="_blank">
            <img className="socialIcon" src={linkedin} alt="linkedin" />
          </a>
          <a href={instagramlink} target="_blank">
            <img className="socialIcon" src={instagram} alt="instagram" />
          </a>
          <a href={`mailto:${maillink}`} target="_blank">
            <img className="socialIcon" src={mail} alt="mail" />
          </a>
        </p>
      </div>
    </>
  );
};

export default ContactCard;

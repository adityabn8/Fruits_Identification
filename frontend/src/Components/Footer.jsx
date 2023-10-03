import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p className="navItems">Copyright ©️ {new Date().getFullYear()}</p>
        <p className="navItems">Made with ♥️ by VVTA</p>
        <a className="navItems" href="#">
          Get In Touch
        </a>
      </div>
    </>
  );
};

export default Footer;

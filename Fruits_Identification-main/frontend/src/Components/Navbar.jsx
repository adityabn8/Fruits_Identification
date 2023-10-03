import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link className="navItems" to="/">
          Home
        </Link>
        <Link className="navItems" to="/about">
          About
        </Link>
        <Link className="navItems" to="/usage">
          Try Now
        </Link>
        <Link className="navItems" to="/contact">
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;

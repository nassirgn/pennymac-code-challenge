import React from "react";
import logo from "../logo.svg";

const logoStyle = {
  height: "60px",
  width: "60px",
};

const Logo = (props) => {
  return <img alt="Logo" src={logo} style={logoStyle} {...props} />;
};

export default Logo;

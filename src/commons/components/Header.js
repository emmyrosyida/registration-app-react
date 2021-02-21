import React from "react";
import "./Header.css";

const Header = ({ title }) => {
  return (
    <div className="header">
      <img
        className="img"
        src={window.location.origin + "/logo192.png"}
        alt="emmyrosyida.me"
        width="70"
        height="70"
      />
      <h1>{title}</h1>
    </div>
  );
};

export default Header;

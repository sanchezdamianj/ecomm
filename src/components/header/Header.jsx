import React from "react";
import logo from "../../assets/logo.png";

const Header = () => (
  <div className="header">
    <div className="logo-container" to="/">
      <img src={logo} alt="loguito" />
    </div>
    <input className="search" type="text" placeholder="Looking something" />
    <div className="options" to="/shop">
      <div className="option" to="/shop">
        SHOP
      </div>
      <div className="option" to="/shop">
        CONTACT
      </div>
    </div>
  </div>
);

export default Header;

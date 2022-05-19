import React from "react";
// import "./header.css";
import "./hdr.css"
import Wrbler from "../../src/image/Warbler.png";
import Tdt from "../../src/image/tdt.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="hdr_font_1">
      <div className="ul_li">
        <ul>
          <Link to="header">
            <li>Home</li>
          </Link>
          <Link to="about">
            <li>About</li>
          </Link>
          <Link to="product">
            <li>Product</li>
          </Link>
        </ul>
      </div>
      <div className="hdr_logo">
        <img src={Wrbler} alt="image not found" />
      </div>
      <div className="hdr_font_2">
        <img src={Tdt} alt="image not found" />
        <h1 className="hdr_info_2">
          Tea and Botanical solution Supplies gives optimum satisfaction
          <br /> to your taste buds.
        </h1>
      </div>
    </div>
  );
}

export default Header;

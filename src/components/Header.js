import React from "react";
import "../style/header.css";
import logo from "../eduford_img/logo.png"


const Header = ({hideMenu, showMenu}) => {
    return (
      <section className="header">
        <nav>
          <a href="index.html">
            <img src={logo}  alt="Logo" />
          </a>
          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li>
                {" "}
                <a href="">HOME</a>
              </li>
              <li>
                {" "}
                <a href="">ABOUT</a>
              </li>
              <li>
                {" "}
                <a href="">COURSE</a>
              </li>
              <li>
                {" "}
                <a href="">BLOG</a>
              </li>
              <li>
                {" "}
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={showMenu}></i>
        </nav>
        <div className="text-box">
          <h1>World's Biggest University</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
            numquam assumenda animi{" "}
          </p>
          <a href="" className="hero-btn">
            Visit Us To Know More
          </a>
        </div>
      </section>
    );
};

export default Header;

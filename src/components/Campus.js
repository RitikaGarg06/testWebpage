import React from "react";
import "../style/campus.css";
import london from "../eduford_img/london.png";
import newyork from "../eduford_img/newyork.png";
import washington from "../eduford_img/washington.png";

const Campus = () => {
    return (
      <section className="campus">
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="campus-col">
            <img src={london} />
            <div className="layer">
              <h3>LONDON</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src={newyork} alt="New York" />
            <div className="layer">
              <h3>NEW YORK</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src={washington} alt="Washington" />
            <div className="layer">
              <h3>WASHINGTON</h3>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Campus;
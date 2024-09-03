import React from "react";
import "../css/innovate.css"
import star from "../img/star-7.svg";

const Innovate = () => {
  return (
    <>
      <section className="innovatee">
        <div className="container">
          <div class="innovate-parent">
            <div class="innovate">Innovate</div>
            <img class="frameee-child" alt="" src={star} />
            <div class="innovate">Inspire</div>
            <img class="frameee-child" alt="" src={star} />
            <div class="innovate">Create</div>
          </div>
        
        <div class="line-parent">
          <div class="frame-line"></div>
          <img class="frame-item" alt="" src={star} />
          <div class="frame-line"></div>
        </div>
        </div>
      </section>
    </>
  );
}
export default Innovate
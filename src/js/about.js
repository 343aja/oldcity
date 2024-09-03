import React from "react";
import "../App.css"

const  About =() => {
  return (
    <div className="container">
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-content-title">
            <h2>Digital thinkers. Small studios build awesome design.</h2>
          </div>
          <div className="about-content-description">
            <p>
              Despite being a small team, we believe that our size gives us an
              advantage, allowing us to be nimble, adaptable, and able to work
              closely with our clients to deliver truly awesome designs.
            </p>
          </div>
        </div>
      </section>
      <div className="img-content">
        <div className="img-one"></div>
        <div className="img-two"></div>
      </div>
    </div>
  );
}

export default About
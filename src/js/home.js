import React from "react";
import "../App.css";

const Home = () => {
  return (
    <header id="home" className="header">
      <div className="container">
        <div className="header-content">
          <div className="home-title">
            <div className="oldcity-studio">
              <div className="bg_text">
                <div className="oldcity-studio">Oldcity</div>
              </div>
              <div className="studio">Studio</div>
            </div>
            <div className="main_t">
              <h2>Tashkent-Based Digital Agency</h2>
            </div>
          </div>
        </div>
        <div className="main_description">
          <h4>
            Oldcity Design Studio is a dynamic and innovative design agency that
            brings creative ideas to life. We works with a wide range of clients
            to develop unique and effective branding, web design, and graphic
            design solutions.
          </h4>
        </div>
        <div className="rectangel_container">
          <div className="rectangle-div"></div>
          <div className="rectangle-div2"></div>
          <div className="rectangle-div3"></div>
          <div className="rectangle-div4"></div>
        </div>
      </div>
    </header>
  );
};

export default Home;

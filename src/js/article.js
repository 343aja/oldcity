import React from "react";
import articlee from "../img/article.png";
import { Button } from "@mui/material";
import {
    FaCalendar,
    FaEye
  } from "react-icons/fa";

const Article =( ) => {
  return (
    <section id="article" className="article-section">
      <div className="container">
        <div className="article-title">
          <h2>Article</h2>
        </div>
        <div className="article-btn">
          <Button variant="contained " className="contained text-white">
            All
          </Button>
          <Button variant="outlined" color="#D1D1D6" className="btn_out">
            All
          </Button>
          <Button variant="outlined" color="#D1D1D6" className="btn_out">
            All
          </Button>
          <Button variant="outlined" color="#D1D1D6" className="btn_out">
            All
          </Button>
          <Button variant="outlined" color="#D1D1D6" className="btn_out">
            All
          </Button>
        </div>
        <div className="article-item">
          <div className="atricle-img">
            <img src={articlee} alt="articleImg" />
          </div>
          <div className="articleList">
            <div className="articleItem">
              <div className="articleTitle">
                <h4>
                  How to design a product that can grow itself 10x in year:
                </h4>
              </div>
              <div className="articleView">
                <div className="articleIcon">
                  <FaCalendar size={24} />
                  <p>5 June</p>
                </div>
                <div className="articleIcon2">
                  <FaEye size={24} /> <p>215</p>
                </div>
              </div>
            </div>
            <div className="articleItem">
              <div className="articleTitle">
                <h4>
                  Understanding color theory: the color wheel and finding
                  complementary colors
                </h4>
              </div>
              <div className="articleView">
                <div className="articleIcon">
                  <FaCalendar size={24} />
                  <p>5 June</p>
                </div>
                <div className="articleIcon2">
                  <FaEye size={24} /> <p>215</p>
                </div>
              </div>
            </div>
            <div className="articleItem">
              <div className="articleTitle">
                <h4>Any mechanical keyboard enthusiasts in design?</h4>
              </div>
              <div className="articleView">
                <div className="articleIcon">
                  <FaCalendar size={24} />
                  <p>5 June</p>
                </div>
                <div className="articleIcon2">
                  <FaEye size={24} /> <p>215</p>
                </div>
              </div>
            </div>
            <div className="articleItem">
              <div className="articleTitle">
                <h4>
                  Yo Reddit! What’s a small thing that anyone can do at nearly
                  anytime to improve their mood and make them happier?
                </h4>
              </div>
              <div className="articleView">
                <div className="articleIcon">
                  <FaCalendar size={24} />
                  <p>5 June</p>
                </div>
                <div className="articleIcon2">
                  <FaEye size={24} /> <p>215</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Article
import React from "react";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import Card from "./card";
import { Button } from "@mui/material";
import '../App.css'
import Line from "./line";
const  Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <div className="container">
          <div className="main-text">
            <div className="text-subtitle">
              <span className="bg-text">Testimonials</span> that
            </div>
            Speak to Our Results
            <span className="text-comment">
              Read through our testimonials to see why our clients love working
              with us and how we can help you achieve your business goals
              through creative and effective design.
            </span>
          </div>
        </div>
        {/* <Card/> */}
        <Card />
        <div className="container">
            <div className="next-slide">

          <Button variant="outlined"  className="next-Right">
            <span className="">
              <FaArrowLeft size={22} />
            </span>
          </Button>
          <Button variant="outlined"  className="next-Right">
            <span className="">
              <FaArrowRight size={22} />
            </span>
          </Button>
            </div>
        </div>
      </section>
        <Line/>
    </>
  );
}
export default Testimonials

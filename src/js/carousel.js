import React, { useState } from "react";
import "../../src/App.css";
import { Button } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Rasmlar manzillari ro'yxati
  const slides = [
    { id: 1, image: "https://picsum.photos/500/400?random=4" },
    { id: 2, image: "https://picsum.photos/500/400?random=3" },
    { id: 3, image: "https://picsum.photos/500/400?random=2" },
    { id: 4, image: "https://picsum.photos/500/400?random=1" },
    // Ko'proq rasmlar qo'shishingiz mumkin
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide + 2 >= slides.length ? 0 : prevSlide + 2
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide - 2 < 0 ? slides.length - 2 : prevSlide - 2
    );
  };

  return (
    <>
      <section className="best-works">
        <div className="container">
          <div className="best-works-title">
            <div className="worksTitle-container">
              <div className="work-title">
                Our
                <div className="work-subtitle">
                   Best Work
                </div>
                Of
              </div>
              <div className="best-works-subtitle">
                <h2>Successful Projects</h2>
              </div>
            </div>
            <Button variant="outlined" color="#D1D1D6" className="seeMore">
              See More{" "}
              <span className="arrow_work">
                <FaArrowRight size={16} />
              </span>
            </Button>
          </div>
          <div className="carousel">
            <button className="carousel-button left" onClick={prevSlide}>
              ←
            </button>
            <div className="carousel-slides">
              {slides.slice(currentSlide, currentSlide + 4).map((slide) => (
                <div key={slide.id} className="slide">
                  <img src={slide.image} alt={`Slide ${slide.id}`} />
                </div>
              ))}
            </div>
            <button className="carousel-button right" onClick={nextSlide}>
              →
            </button>
          </div>
          <div class="we-start-by-container">
            <div className="slide-text">
            <div class="we-start-byy">
              We start by getting to know our clients, their business goals, and
              their
            </div>
            <p class="we-start-by">
              We start by getting to know our clients, their business goals, and
              theiraudience. This involves conducting research, analyzing data,
              and discussing ideas with our clients to gain a deep understanding
              of their needs.
            </p>
            </div>
            <div className="slide-text">
            <div class="we-start-byy">
              We start by getting to know our clients, their business goals, and
              their
            </div>
            <p class="we-start-by">
              We start by getting to know our clients, their business goals, and
              theiraudience. This involves conducting research, analyzing data,
              and discussing ideas with our clients to gain a deep understanding
              of their needs.
            </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;

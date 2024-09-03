import React from "react";
import {
    FaMobileAlt,
    FaLaptopCode,
    FaUserCircle,
    FaGlobe,
    FaPalette,
    FaRegObjectGroup,
   
  } from "react-icons/fa";
  import illustrator from "../img/illustrator.jpg";
import figma from "../img/figma.jpg";
import framer from "../img/framer.jpg";
import sketch from "../img/sketch.jpg";
import '../App.css'

const  Services =() => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="app-container">
          <div className="services-container">
            <div className="services-title">
              <div className="services-subtitle">
                Our
              </div>
              <div className="services-subtitle2">
                Services
              </div>
            </div>
            <div className="services-description">
              <p>
                Oldcity Studio offers a range of design services that are
                tailored to meet the unique needs of each client
              </p>
            </div>

            <div className="services-list">
              <div class="service-item-active">
                <span class="service-numberr">01</span>
                <span class="service-titlee">UI/UX Design</span>
                <span class="service-arroww">→</span>
              </div>

              <ServiceItem number="02" title="Web Developer" />
              <ServiceItem number="03" title="Mobile Developer" />
              <ServiceItem number="04" title="Optimization Infrastructure" />
            </div>
          </div>
          <div className="design-info">
            <h2 className="design-title">
              Our company takes a human-centered approach to design
            </h2>
            <div className="design-categories">
              {categories.map((category, index) => (
                <Category
                  key={index}
                  title={category.title}
                  icon={category.icon}
                />
              ))}
            </div>
            <div className="technologies">
              <h3>Technologies</h3>
              <div className="tech-icons">
                {tech.map((tech, index) => (
                  <TechIcon key={index} title={tech.title} logo={tech.logo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services

const ServiceItem = ({ number, title }) => (
    <div className="service-item">
      <div className="service-number ">{number}</div>
      <div className="service-title">{title}</div>
      <div className="service-arrow">→</div>
    </div>
  );
  
  const categories = [
    { title: "Mobile Design", icon: <FaMobileAlt /> },
    { title: "Prototyping", icon: <FaRegObjectGroup /> },
    { title: "UX", icon: <FaUserCircle /> },
    { title: "Web Design", icon: <FaGlobe /> },
    { title: "Atomic Design", icon: <FaPalette /> },
    { title: "UI", icon: <FaLaptopCode /> },
  ];
  const Category = ({ title, icon }) => (
    <div className="category-item">
      <div className="category-icon">{icon}</div>
      <div className="category-title">{title}</div>
    </div>
  );
  
  const tech = [
    { title: "Illustrator", logo: illustrator },
    { title: "Sketch", logo: sketch },
    { title: "Figma", logo: figma },
    { title: "Framer", logo: framer },
  ];
  const TechIcon = ({ title, logo }) => (
    <div className="tech-item">
      <img src={logo} className="tech-img" />
      <div>{title}</div>
    </div>
  );
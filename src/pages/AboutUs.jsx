import React from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./styles/AboutUs.css";

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="page about-us">
      <h1>About JSTechHub </h1>
      <p>
        JSTechHub is a forward-thinking technology company dedicated to delivering innovative software solutions.
        With a passion for excellence and a commitment to quality, we serve clients across multiple industries.
      </p>
      <p>
        Our team is composed of experienced engineers, designers, and strategists who work collaboratively to
        create impactful digital products.
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;

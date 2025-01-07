import React, { useState, useEffect } from "react";
import "./Introdemo.css";

// Import images
import image1 from "../../assets/image1.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image9 from "../../assets/image9.jpg";
import A from "../../assets/A.jpg";
import B from "../../assets/B.jpg";
import C from "../../assets/C.jpg";
import D from "../../assets/D.jpg";

const Intro = () => {
  const images = [image1, image7, image6, image6, A, B, C, D];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="intro-component">
      {/* Left Container */}
      <div className="intro-component-left">
        <div
          className="image-slider"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        ></div>
      </div>

      {/* Right Container */}
      <div className="intro-component-right">
        <h2>Find Art You Love</h2>
        <p>
          “At Kubaza Market, we connect you with a vibrant community of local
          artisans and vendors offering a diverse range of unique, high-quality
          products. Whether you're shopping for handmade crafts, fresh produce,
          or exploring cultural treasures, Kubaza Market is your gateway to
          authenticity and creativity.”
        </p>
        <p className="signature">The Kubaza Team</p>
        <p>Leaders in Community Growth & Artisan Support</p>
        <a href="#" className="cta-link">
          EXPLORE OUR VENDORS
        </a>
      </div>
    </div>
  );
};

export default Intro;

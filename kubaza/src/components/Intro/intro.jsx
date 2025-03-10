import React, { useState } from "react";
import "./intro.css";

const Intro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    { name: "Technology", link: "#tech" },
    { name: "Health", link: "#health" },
    { name: "Education", link: "#education" },
    { name: "Sports", link: "#sports" },
    { name: "Entertainment", link: "#entertainment" },
  ];

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1>Welcome to Kubaza Market</h1>
        <h5>
          A place where creative showcase there work and art lovers find the art
          that speaks to them. Enjoy..
        </h5>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search products..."
            className="search-bar"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;

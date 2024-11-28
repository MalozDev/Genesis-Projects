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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="intro-container">
      <video className="intro-video" autoPlay muted loop>
        <source src="your-video-url.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="intro-content">
        <h1>Welcome to Kubaza Market</h1>
        <p>Your one-stop shop for all your needs. Explore a variety of products!</p>

        <div className="search-bar-container">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="search-bar" 
          />
        </div>

        <div className="products-carousel">
          <button className="carousel-button prev" onClick={handlePrevSlide}>
            &#8592; Prev
          </button>
          <div className="product-item">
            <h3>{products[currentIndex].name}</h3>
            <a href={products[currentIndex].link} className="product-link">
              {/* Add icons here when you get them */}
              {/* Example: <FaLaptop /> */}
              {products[currentIndex].name} Product
            </a>
          </div>
          <button className="carousel-button next" onClick={handleNextSlide}>
            Next &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;

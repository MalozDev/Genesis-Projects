import React from "react";
import "./about.css"; // Make sure to link your CSS file

const About = () => {
  const products = [
    {
      name: "Technology",
      description: "Explore the latest in tech gadgets, electronics, and more.",
    },
    {
      name: "Health",
      description: "Find health and wellness products to improve your lifestyle.",
    },
    {
      name: "Education",
      description: "Books, online courses, and resources for educational growth.",
    },
    {
      name: "Sports",
      description: "Everything for your active lifestyle, from equipment to apparel.",
    },
    {
      name: "Entertainment",
      description: "Movies, music, games, and everything you need for entertainment.",
    },
  ];

  return (
    <div className="about-container">
      <h2 className="about-header">Products</h2>

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

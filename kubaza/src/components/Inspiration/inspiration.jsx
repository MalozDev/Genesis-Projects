import React from "react";
import "./inspiration.css";

const Inspiration = () => {
  const mediaContent = [
    {
      type: "image",
      src: "/src/assets/_A730120- Living and dining angle 2 fix.webp",
      alt: "Living and Dining",
      description: "Living and Dining Area",
    },
    {
      type: "image",
      src: "/src/assets/Air Conditioner.jpg",
      alt: "Air Conditioner",
      description: "Cooling System",
    },
    {
      type: "image",
      src: "/src/assets/Couple hugging.webp",
      alt: "Couple Hugging",
      description: "Romantic Moment",
    },
    {
      type: "image",
      src: "/src/assets/gabrielberntson.webp",
      alt: "Gabriel Berntson",
      description: "Abstract Art",
    },
    {
      type: "image",
      src: "/src/assets/Great room 1.webp",
      alt: "Great Room",
      description: "Spacious Living",
    },
    {
      type: "image",
      src: "/src/assets/IMG_5489_final.webp",
      alt: "Image Final",
      description: "Modern Design",
    },
    {
      type: "image",
      src: "/src/assets/Kinght character Concept Full Render.webp",
      alt: "Knight Character Concept",
      description: "Knight Concept Art",
    },
    {
      type: "image",
      src: "/src/assets/LIVING 2.webp",
      alt: "Living Room 2",
      description: "Cozy Living Room",
    },
    {
      type: "image",
      src: "/src/assets/Scene 3.jpg",
      alt: "Scene 3",
      description: "Peaceful Scene",
    },
    {
      type: "image",
      src: "/src/assets/view6_fix5.webp",
      alt: "View Fix",
      description: "Beautiful View",
    },
  ];

  return (
    <div className="inspiration-container">
      <h2 className="inspiration-header">Get inspired by the work done on Kubaza</h2>
      <div className="inspiration-grid">
        {mediaContent.map((item, index) => (
          <div className="inspiration-item" key={index}>
            <div className="image-container">
              <img src={item.src} alt={item.alt} className="inspiration-image" />
              <div className="image-description">{item.description}</div>
              <div className="add-to-cart">❤️ Add to Cart</div>
              <div className="options-menu">
                <span className="options-dots">...</span>
                <div className="options-dropdown">
                  <a href="#">Get Painting</a>
                  <a href="#">View Artist</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inspiration;

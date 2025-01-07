import React from "react";
import "./inspiration.css";

const Inspiration = () => {
  const mediaContent = [
    {
      id: 1,
      src: "/src/assets/image6.jpg",
      alt: "Image 1",
      title: "Living Room",
      dimensions: "150 W x 110 H x 5 D cm",
      artist: "John Doe",
      price: "ZMW 3,350",
      location: "Zambia",
    },
    {
      id: 2,
      src: "/src/assets/Air Conditioner.jpg",
      alt: "Image 2",
      title: "Air Conditioner",
      dimensions: "120 W x 90 H x 4 D cm",
      artist: "Jane Smith",
      price: "ZMW 2,944",
      location: "South Africa",
    },
    {
      id: 3,
      src: "/src/assets/Couple hugging.webp",
      alt: "Image 3",
      title: "Couple Hugging",
      dimensions: "140 W x 120 H x 6 D cm",
      artist: "Emily White",
      price: "ZMW 13,944",
      location: "Kenya",
    },
    {
      id: 4,
      src: "/src/assets/image7.jpg",
      alt: "Image 4",
      title: "Abstract Art",
      dimensions: "130 W x 110 H x 3 D cm",
      artist: "Takahiro Yamamoto",
      price: "ZMW 6,750",
      location: "Japan",
    },
    {
      id: 5,
      src: "/src/assets/Great room 1.webp",
      alt: "Image 5",
      title: "Ocean Breeze",
      dimensions: "160 W x 100 H x 4 D cm",
      artist: "Sophia Turner",
      price: "ZMW 7,899",
      location: "Mozambique",
    },
    {
      id: 6,
      src: "/src/assets/image5.jpg",
      alt: "Image 6",
      title: "Mountain View",
      dimensions: "110 W x 80 H x 3 D cm",
      artist: "Liam Scott",
      price: "ZMW 9,550",
      location: "Tanzania",
    },
    {
      id: 7,
      src: "/src/assets/image4.jpg",
      alt: "Image 7",
      title: "City Lights",
      dimensions: "130 W x 95 H x 5 D cm",
      artist: "Amara Johnson",
      price: "ZMW 5,400",
      location: "Nigeria",
    },
    {
      id: 8,
      src: "/src/assets/LIVING 2.webp",
      alt: "Image 8",
      title: "Golden Hour",
      dimensions: "125 W x 100 H x 4 D cm",
      artist: "Oliver Smith",
      price: "ZMW 8,999",
      location: "Malawi",
    },
    {
      id: 9,
      src: "/src/assets/image9.jpg",
      alt: "Image 9",
      title: "Serene Forest",
      dimensions: "140 W x 120 H x 5 D cm",
      artist: "Emma Brown",
      price: "ZMW 12,100",
      location: "Botswana",
    },
    {
      id: 10,
      src: "/src/assets/image.webp",
      alt: "Image 10",
      title: "Night Sky",
      dimensions: "150 W x 110 H x 6 D cm",
      artist: "Ethan Davis",
      price: "ZMW 10,500",
      location: "Uganda",
    },
    {
      id: 11,
      src: "/src/assets/image2.jpg",
      alt: "Image 11",
      title: "Sunset Over Ocean",
      dimensions: "120 W x 90 H x 5 D cm",
      artist: "Sophia Jackson",
      price: "ZMW 12,800",
      location: "Kenya",
    },

    {
      id: 12,
      src: "/src/assets/image3.jpg",
      alt: "Image 12",
      title: "Mountain Peaks",
      dimensions: "140 W x 100 H x 7 D cm",
      artist: "Michael Roberts",
      price: "ZMW 15,200",
      location: "Tanzania",
    },
  ];

  return (
    <div className="inspiration-container">
      <h2 className="inspiration-header">
        Get inspired by the work done on Kubaza
      </h2>
      {mediaContent.map((item) => (
        <div key={item.id} className={`inspiration-item item-${item.id}`}>
          {/* Icons Div (hover effect) */}
          <div className="hover-icons">
            <span className="icon love">❤️</span>
            <span className="icon chart">📊</span>
            <span className="icon options">⚙️</span>
          </div>
          <img src={item.src} alt={item.alt} className="inspiration-image" />
          <div className="item-details">
            <div className="description">
              <p className="item-title">{item.title}</p>
              <p className="item-location">{item.location}</p>
              <p className="item-dimensions">{item.dimensions}</p>
              <p className="item-artist">{item.artist}</p>
            </div>
            <p className="item-price">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Inspiration;

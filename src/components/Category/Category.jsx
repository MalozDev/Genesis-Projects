import React, { useState } from "react";
import "./Category.css";
import Icon from "../Icon/Icon";
import CategoryFilter from "./CategoryFilter";

// Import images
import image6 from "../../assets/image6.jpg";
import airConditioner from "../../assets/Air Conditioner.jpg";
import coupleHugging from "../../assets/Couple hugging.webp";
import image7 from "../../assets/image7.jpg";
import greatRoom from "../../assets/Great room 1.webp";
import image5 from "../../assets/image5.jpg";
import image4 from "../../assets/image4.jpg";
import living2 from "../../assets/LIVING 2.webp";
import image9 from "../../assets/image9.jpg";
import imageWebp from "../../assets/image.webp";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const Category = () => {
  const mediaContent = [
    {
      id: 1,
      src: image6,
      alt: "Image 1",
      title: "Living Room",
      dimensions: "150 W x 110 H x 5 D cm",
      artist: "John Doe",
      price: "ZMW 3,350",
      location: "Zambia",
    },
    {
      id: 2,
      src: airConditioner,
      alt: "Image 2",
      title: "Air Conditioner",
      dimensions: "120 W x 90 H x 4 D cm",
      artist: "Jane Smith",
      price: "ZMW 2,944",
      location: "South Africa",
    },
    {
      id: 3,
      src: coupleHugging,
      alt: "Image 3",
      title: "Couple Hugging",
      dimensions: "140 W x 120 H x 6 D cm",
      artist: "Emily White",
      price: "ZMW 13,944",
      location: "Kenya",
    },
    {
      id: 4,
      src: image7,
      alt: "Image 4",
      title: "Abstract Art",
      dimensions: "130 W x 110 H x 3 D cm",
      artist: "Takahiro Yamamoto",
      price: "ZMW 6,750",
      location: "Japan",
    },
    {
      id: 5,
      src: greatRoom,
      alt: "Image 5",
      title: "Ocean Breeze",
      dimensions: "160 W x 100 H x 4 D cm",
      artist: "Sophia Turner",
      price: "ZMW 7,899",
      location: "Mozambique",
    },
    {
      id: 6,
      src: image5,
      alt: "Image 6",
      title: "Mountain View",
      dimensions: "110 W x 80 H x 3 D cm",
      artist: "Liam Scott",
      price: "ZMW 9,550",
      location: "Tanzania",
    },
    {
      id: 7,
      src: image4,
      alt: "Image 7",
      title: "City Lights",
      dimensions: "130 W x 95 H x 5 D cm",
      artist: "Amara Johnson",
      price: "ZMW 5,400",
      location: "Nigeria",
    },
    {
      id: 8,
      src: living2,
      alt: "Image 8",
      title: "Golden Hour",
      dimensions: "125 W x 100 H x 4 D cm",
      artist: "Oliver Smith",
      price: "ZMW 8,999",
      location: "Malawi",
    },
    {
      id: 9,
      src: image9,
      alt: "Image 9",
      title: "Serene Forest",
      dimensions: "140 W x 120 H x 5 D cm",
      artist: "Emma Brown",
      price: "ZMW 12,100",
      location: "Botswana",
    },
    {
      id: 10,
      src: imageWebp,
      alt: "Image 10",
      title: "Night Sky",
      dimensions: "150 W x 110 H x 6 D cm",
      artist: "Ethan Davis",
      price: "ZMW 10,500",
      location: "Uganda",
    },
    {
      id: 11,
      src: image2,
      alt: "Image 11",
      title: "Sunset Over Ocean",
      dimensions: "120 W x 90 H x 5 D cm",
      artist: "Sophia Jackson",
      price: "ZMW 12,800",
      location: "Kenya",
    },
    {
      id: 12,
      src: image3,
      alt: "Image 12",
      title: "Mountain Peaks",
      dimensions: "140 W x 100 H x 7 D cm",
      artist: "Michael Roberts",
      price: "ZMW 15,200",
      location: "Tanzania",
    },
  ];

  const [filters, setFilters] = useState({
    priceRange: [0, 20000],
    selectedLocations: [],
    searchQuery: "",
  });

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  const filteredContent = mediaContent.filter((item) => {
    const itemPrice = parseFloat(
      item.price.replace("ZMW", "").replace(",", "").trim()
    );
    const matchesPrice =
      itemPrice >= filters.priceRange[0] && itemPrice <= filters.priceRange[1];
    const matchesLocation =
      filters.selectedLocations.length === 0 ||
      filters.selectedLocations.includes(item.location);
    const matchesSearch =
      filters.searchQuery === "" ||
      item.title.toLowerCase().includes(filters.searchQuery.toLowerCase());

    return matchesPrice && matchesLocation && matchesSearch;
  });

  return (
    <div className="category-container">
      <div className="category-sidebar">
        <CategoryFilter onFilterChange={handleFilterChange} />
      </div>
      <div className="category-main">
        <h2 className="category-header">Category</h2>
        <div className="category-grid">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`category-item category-item-${item.id}`}
            >
              <div className="category-hover-icons">
                <div className="icon-wrapper">
                  <Icon name="add" className="search-icon" size={20} />
                </div>
                <div className="icon-wrapper">
                  <Icon name="heart" className="search-icon" size={20} />
                </div>
                <div className="icon-wrapper">
                  <Icon
                    name="horizontalElipsis"
                    className="search-icon"
                    size={20}
                  />
                </div>
              </div>

              <img src={item.src} alt={item.alt} className="category-image" />
              <div className="category-item-details">
                <div className="category-description">
                  <p className="category-title">{item.title}</p>
                  <p className="category-location">{item.location}</p>
                  <p className="category-dimensions">{item.dimensions}</p>
                  <p className="category-artist">{item.artist}</p>
                </div>
                <p className="category-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

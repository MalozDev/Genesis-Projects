import React, { useState } from "react";
import "./CategoryFilter.css";

const CategoryFilter = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePriceChange = (e) => {
    const newRange = [...priceRange];
    newRange[e.target.name === "min" ? 0 : 1] = Number(e.target.value);
    setPriceRange(newRange);
    onFilterChange({ priceRange: newRange, selectedLocations, searchQuery });
  };

  const handleLocationChange = (e) => {
    const location = e.target.value;
    const updatedLocations = e.target.checked
      ? [...selectedLocations, location]
      : selectedLocations.filter((loc) => loc !== location);
    setSelectedLocations(updatedLocations);
    onFilterChange({
      priceRange,
      selectedLocations: updatedLocations,
      searchQuery,
    });
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onFilterChange({ priceRange, selectedLocations, searchQuery: query });
  };

  return (
    <div className="category-filter">
      <h3>Filter</h3>
      <div className="filter-section">
        <label>Price Range:</label>
        <input
          type="number"
          name="min"
          placeholder="Min"
          value={priceRange[0]}
          onChange={handlePriceChange}
        />
        <input
          type="number"
          name="max"
          placeholder="Max"
          value={priceRange[1]}
          onChange={handlePriceChange}
        />
      </div>
      <div className="filter-section">
        <label>Location:</label>
        <div>
          <input
            type="checkbox"
            value="Zambia"
            onChange={handleLocationChange}
          />{" "}
          Zambia
        </div>
        <div>
          <input
            type="checkbox"
            value="South Africa"
            onChange={handleLocationChange}
          />{" "}
          South Africa
        </div>
        {/* Add more locations */}
      </div>
      <div className="filter-section">
        <label>Search:</label>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default CategoryFilter;

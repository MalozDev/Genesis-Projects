import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/KUBAZA-MARKET-LOGO-cb-edit.png";
import Icon from "../Icon/Icon";
import Dropdown from "../Dropdown/Dropdown";

const navbarData = {
  paintings: {
    styles: ["Impressionism", "Realism", "Abstract"],
    subjects: ["Nature", "Portrait", "Still Life"],
    mediums: ["Oil", "Acrylic", "Watercolor"],
  },
  photography: {
    styles: ["Black & White", "Color", "Digital"],
    subjects: ["Landscape", "Portrait", "Street"],
    mediums: ["Digital", "Film", "Polaroid"],
  },
  sculpture: {
    styles: ["Modern", "Classical", "Abstract"],
    subjects: ["Human", "Animal", "Abstract"],
    mediums: ["Bronze", "Marble", "Wood"],
  },
  drawings: {
    styles: ["Charcoal", "Pencil", "Ink"],
    subjects: ["Portrait", "Nature", "Abstract"],
    mediums: ["Paper", "Canvas", "Board"],
  },
  prints: {
    styles: ["Lithograph", "Screenprint", "Etching"],
    subjects: ["Nature", "Abstract", "Geometric"],
    mediums: ["Paper", "Canvas", "Fabric"],
  },
  inspiration: {
    styles: ["Modern", "Classic", "Eclectic"],
    subjects: ["Nature", "Urban", "Abstract"],
    mediums: ["Photography", "Painting", "Digital"],
  },
  advisory: {
    styles: ["Contemporary", "Old Master", "Modern"],
    subjects: ["Portrait", "Landscape", "Abstract"],
    mediums: ["Oil", "Acrylic", "Mixed Media"],
  },
  trade: {
    styles: ["Realism", "Impressionism", "Abstract"],
    subjects: ["Human", "Nature", "Urban"],
    mediums: ["Oil", "Acrylic", "Watercolor"],
  },
  giftcard: {
    styles: ["Modern", "Classic", "Eclectic"],
    subjects: ["All Occasions", "Birthdays", "Celebrations"],
    mediums: ["Digital", "Physical", "Custom"],
  },
};

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const navbarRef = useRef(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
    setDropdownVisible(true);
    document.getElementById("main-content").classList.add("main-content-faded");
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
    setDropdownVisible(false);
    document
      .getElementById("main-content")
      .classList.remove("main-content-faded");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setHoveredLink(null);
        setDropdownVisible(false);
        document
          .getElementById("main-content")
          .classList.remove("main-content-faded");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navbarRef} onMouseLeave={handleMouseLeave}>
      <div className="navbar-top">
        <div className="navbar-left">
          <img src={logo} alt="Kubaza Market Logo" className="navbar-logo" />
          <span className="navbar-company-name">Kubaza Market</span>
        </div>
        <div className="navbar-right">
          <div className="search-container">
            <Icon name="search" className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search art or artist"
              className="navbar-search"
            />
          </div>
          <Icon name="chart" size="54" className="navbar-icon" />
          <Icon name="user" size="54" className="navbar-icon" />
        </div>
      </div>
      <div className="navbar-bottom">
        {Object.keys(navbarData).map((link) => (
          <div
            key={link}
            className="navbar-link-wrapper"
            onMouseEnter={() => handleMouseEnter(link)}
          >
            <a href={`#${link}`} className="navbar-link">
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </div>
        ))}
      </div>
      {dropdownVisible && (
        <div className="dropdown-container">
          {hoveredLink && <Dropdown data={navbarData[hoveredLink]} visible />}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

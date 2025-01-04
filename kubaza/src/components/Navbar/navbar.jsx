import React, { useState, useRef, useEffect } from "react";
import "./navbar.css"; // Import the corresponding CSS file
import logo from "../../assets/KUBAZA-MARKET-LOGO-cb-edit.png"; // Import the logo
import Icon from "../Icon/Icon";

const Navbar = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  const categoriesButtonRef = useRef(null);
  const exploreButtonRef = useRef(null);
  const navbarRef = useRef(null);

  const closeDropdowns = () => {
    setCategoriesOpen(false);
    setExploreOpen(false);
  };

  const toggleCategories = () => {
    setCategoriesOpen((prev) => !prev);
    if (!categoriesOpen) setExploreOpen(false);
  };

  const toggleExplore = () => {
    setExploreOpen((prev) => !prev);
    if (!exploreOpen) setCategoriesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        !categoriesButtonRef.current.contains(event.target) &&
        !exploreButtonRef.current.contains(event.target)
      ) {
        closeDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
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
        <a href="#paintings" className="navbar-link">
          Paintings
        </a>
        <a href="#photography" className="navbar-link">
          Photography
        </a>
        <a href="#sculpture" className="navbar-link">
          Sculpture
        </a>
        <a href="#drawings" className="navbar-link">
          Drawings
        </a>
        <a href="#prints" className="navbar-link">
          Prints
        </a>
        <a href="#inspiration" className="navbar-link">
          Inspiration
        </a>
        <a href="#advisory" className="navbar-link">
          Art Advisory
        </a>
        <a href="#trade" className="navbar-link">
          Trade
        </a>
        <a href="#giftcard" className="navbar-link gift-link">
          Gift Card
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

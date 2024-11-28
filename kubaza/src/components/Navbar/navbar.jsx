import React, { useState, useRef, useEffect } from 'react';
import './navbar.css'; // Import the corresponding CSS file
import logo from '../../assets/KUBAZA-MARKET-LOGO-cb-edit.png'; // Import the logo

const Navbar = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  // Refs for dropdown buttons
  const categoriesButtonRef = useRef(null);
  const exploreButtonRef = useRef(null);
  const navbarRef = useRef(null); // Reference to the navbar container

  // Function to close all dropdowns
  const closeDropdowns = () => {
    setCategoriesOpen(false);
    setExploreOpen(false);
  };

  const toggleCategories = () => {
    if (categoriesOpen) {
      setCategoriesOpen(false); // Close categories if it's already open
    } else {
      setCategoriesOpen(true);
      setExploreOpen(false); // Close explore when opening categories
    }
  };

  const toggleExplore = () => {
    if (exploreOpen) {
      setExploreOpen(false); // Close explore if it's already open
    } else {
      setExploreOpen(true);
      setCategoriesOpen(false); // Close categories when opening explore
    }
  };

  // Close the dropdowns when clicking outside the navbar or the buttons
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current && 
        !navbarRef.current.contains(event.target) && 
        !categoriesButtonRef.current.contains(event.target) && 
        !exploreButtonRef.current.contains(event.target)
      ) {
        closeDropdowns(); // Close all dropdowns if click is outside the navbar or buttons
      }
    };

    // Add event listener on component mount
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <img src={logo} alt="Logo" className="navbar-logo" />

      <div className="navbar-menu">
        {/* Categories Dropdown Button */}
        <div className="navbar-dropdown">
          <button 
            className="navbar-dropdown-button" 
            onClick={toggleCategories}
            ref={categoriesButtonRef}
          >
            Categories 
            <span className={`arrow ${categoriesOpen ? 'rotate' : ''}`}>▼</span>
          </button>
          {categoriesOpen && (
            <div className="navbar-dropdown-content">
              <a href="#tech">Technology</a>
              <a href="#health">Health</a>
              <a href="#education">Education</a>
              <a href="#sports">Sports</a>
              <a href="#entertainment">Entertainment</a>
            </div>
          )}
        </div>

        {/* Explore Dropdown Button */}
        <div className="navbar-dropdown">
          <button 
            className="navbar-dropdown-button" 
            onClick={toggleExplore}
            ref={exploreButtonRef}
          >
            Explore
            <span className={`arrow ${exploreOpen ? 'rotate' : ''}`}>▼</span>
          </button>
          {exploreOpen && (
            <div className="navbar-dropdown-content">
              <a href="#trending">Trending</a>
              <a href="#new">What's New</a>
              <a href="#top-picks">Top Picks</a>
              <a href="#community">Community</a>
              <a href="#events">Events</a>
            </div>
          )}
        </div>

        {/* Sign In and Login */}
        <a href="#sign-in" className="navbar-link">Sign In</a>
        <button className="navbar-login-button">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;

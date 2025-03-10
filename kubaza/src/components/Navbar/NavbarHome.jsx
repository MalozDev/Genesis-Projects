import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import "./navbar.css";
import logo from "../../assets/KUBAZA-MARKET-LOGO-cb-edit.png";
import Icon from "../Icon/Icon";
import Dropdown from "../Dropdown/Dropdown"; // Ensure this component is correctly implemented

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

const NavbarHome = () => {
  const [user, setUser] = useState(null); // Store user info
  const [hoveredLink, setHoveredLink] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const auth = getAuth();

  // Get user information from Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null); // Handle both logged-in and logged-out states
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, [auth]);

  // Handle sign out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate("/"); // Redirect to home page on sign out
      })
      .catch((error) => console.error("Sign Out Error:", error));
  };

  // Dropdown visibility handling
  const handleMouseEnter = (link) => {
    setHoveredLink(link);
    setDropdownVisible(true);
    const mainContent = document.getElementById("main-content");
    if (mainContent) mainContent.classList.add("main-content-faded");
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
    setDropdownVisible(false);
    const mainContent = document.getElementById("main-content");
    if (mainContent) mainContent.classList.remove("main-content-faded");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setHoveredLink(null);
        setDropdownVisible(false);
        const mainContent = document.getElementById("main-content");
        if (mainContent) mainContent.classList.remove("main-content-faded");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-top">
        <div className="navbar-left" onClick={() => navigate("/")}>
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
            <div className="chart-div">
              <div className="item-in-chart">
                <p>6</p>
              </div>
              <Icon name="chart" size={16} className="chart-icon" />{" "}
              <Link to="/checkout" className="navbar-link checkout-link">
                Checkout
              </Link>
            </div>
          </div>

          {/* User's profile section */}
          {user ? (
            <div className="navbar-user">
              <img
                src={user.photoURL || "/default-avatar.png"} // Ensure a fallback avatar
                alt="User Profile"
                className="navbar-user-image"
              />
              <span className="navbar-username">{user.displayName}</span>
              <button className="navbar-button" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <div
        className="navbar-links-dropdown-wrapper"
        onMouseLeave={handleMouseLeave}
      >
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

        {dropdownVisible && hoveredLink && (
          <div className="dropdown-container">
            <Dropdown data={navbarData[hoveredLink]} visible />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarHome;

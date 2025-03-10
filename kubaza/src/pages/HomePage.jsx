import React from "react";
import Introdemo from "../components/Intro/Introdemo";
import Footer from "../components/Footer/Footer";
import NavbarHome from "../components/Navbar/NavbarHome";
import Category from "../components/Category/Category";

const LandingPage = () => {
  return (
    <div>
      <NavbarHome />
      <Introdemo />
      <Category />
      <Footer />
    </div>
  );
};

export default LandingPage;

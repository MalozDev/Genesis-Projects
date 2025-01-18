import React from "react";
import Navbar from "../components/Navbar/navbar";
import Intro from "../components/Intro/intro";
import Introdemo from "../components/Intro/Introdemo";
import About from "../components/About/about";
import Inspiration from "../components/Inspiration/inspiration";
import BlogsReviews from "../components/Reviews/blogsReviews";
import LastRemarks from "../components/LastRemarks/lastRemarks";
import Footer from "../components/Footer/footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Introdemo />
      <About />
      <Inspiration />
      <BlogsReviews />
      <LastRemarks />
      <Footer />
    </div>
  );
};

export default LandingPage;

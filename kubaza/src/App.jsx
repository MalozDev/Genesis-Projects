import React from "react";
import Intro from "./components/Intro/intro";
import Introdemo from "./components/Intro/Introdemo";
import About from "./components/About/about";
import Inspiration from "./components/Inspiration/inspiration";
import BlogsReviews from "./components/Reviews/blogsReviews";
import Footer from "./components/Footer/footer";
import LastRemarks from "./components/LastRemarks/lastRemarks";
import Navbar from "./components/Navbar/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="main-content">
        <Intro />
        <Introdemo />
        <About />
        <Inspiration />
        <BlogsReviews />
        <LastRemarks />
        <Footer />
      </div>
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "./components/navbar/navbar"; // Correctly import Navbar component
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Inspiration from "./components/Inspiration/inspiration";
import BlogsReviews from "./components/Reviews/blogsReviews";
import Footer from "./components/Footer/footer";
import LastRemarks from "./components/LastRemarks/lastRemarks";
import Dropdown from "./components/Dropdown/Dropdown";
import Icon from "./components/Icon/Icon";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Inspiration />
      <BlogsReviews />
      <LastRemarks />
      <Footer />
      <Dropdown />
      <Icon />
    </div>
  );
};

export default App;

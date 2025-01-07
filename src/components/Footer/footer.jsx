import React from "react";
import "./Footer.css"; // Create a separate CSS file or use a style-in-JS solution

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>Categories</h3>
          <ul>
            <li>Graphics & Design</li>
            <li>Digital Marketing</li>
            <li>Writing & Translation</li>
            <li>Video & Animation</li>
            <li>Music & Audio</li>
            <li>Programming & Tech</li>
            <li>AI Services</li>
            <li>Consulting</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>For Clients</h3>
          <ul>
            <li>How Kubaza Works</li>
            <li>Customer Success Stories</li>
            <li>Trust & Safety</li>
            <li>Quality Guide</li>
            <li>Kubaza Learn</li>
            <li>Kubaza Guides</li>
            <li>Kubaza Answers</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>For Freelancers</h3>
          <ul>
            <li>Become a Kubaza Freelancer</li>
            <li>Become an Agency</li>
            <li>Kickstart</li>
            <li>Community Hub</li>
            <li>Forum</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Business Solutions</h3>
          <ul>
            <li>Kubaza Pro</li>
            <li>Project Management Service</li>
            <li>Creative Content Marketing</li>
            <li>Working Not Working</li>
            <li>AutoDS Tool</li>
            <li>Kubaza Logo Maker</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Kubaza Market</li>
            <li>Help & Support</li>
            <li>Social Impact</li>
            <li>Careers</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Partnerships</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Kubaza Market Ltd. 2024</p>
        <div className="social-icons">
          <i className="icon tiktok"></i>
          <i className="icon instagram"></i>
          <i className="icon linkedin"></i>
          <i className="icon facebook"></i>
          <i className="icon pinterest"></i>
          <i className="icon twitter"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

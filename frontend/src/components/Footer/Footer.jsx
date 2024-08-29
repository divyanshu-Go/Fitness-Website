import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <footer className="footer-main">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>We are a company dedicated to providing the best service.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@company.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
      {/* Footer End */}
    </>
  );
};

export default Footer;

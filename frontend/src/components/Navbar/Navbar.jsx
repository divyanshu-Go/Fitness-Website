import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const toggleModeIcon = () => {
      const modeIcon = document.querySelector("#dark-icon");
      if (modeIcon.innerHTML === "light_mode") {
        modeIcon.innerHTML = "dark_mode";
      } else {
        modeIcon.innerHTML = "light_mode";
      }
    };

    const toggleLogoColor = () => {
      document.querySelector(".nav-left .img").classList.toggle("white");
    };

    const toggleClass = () => {
      const root = document.documentElement;

      const currentMode = getComputedStyle(root)
        .getPropertyValue("--mode")
        .trim();
      const currentModeInverted = getComputedStyle(root)
        .getPropertyValue("--mode-inverted")
        .trim();

      if (
        currentMode === "white" &&
        currentModeInverted === "rgba(37, 40, 44, 0.974)"
      ) {
        root.style.setProperty("--mode", "rgba(37, 40, 44, 0.974)");
        root.style.setProperty("--mode-inverted", "white");
      } else {
        root.style.setProperty("--mode", "white");
        root.style.setProperty("--mode-inverted", "rgba(37, 40, 44, 0.974)");
      }

      toggleModeIcon();
      toggleLogoColor();
    };

    document.getElementById("dark-icon").addEventListener("click", toggleClass);

    return () => {
      document
        .getElementById("dark-icon")
        .removeEventListener("click", toggleClass);
    };
  }, []);

  return (
    <div className="top" id="top">
      <div className="nav-left logo">
        <img src="Logo.png" alt="Logo" className="img" />{" "}
        {/* Replace with your logo image */}
        <h2>
          <span className="danger cp">Website</span>
        </h2>
        <div className="cp home-icon">
          <span className="material-symbols-outlined">
            <Link to="/">home</Link>
          </span>

          <p>
            <Link to="/">Home </Link>
          </p>
        </div>
      </div>

      <div className="nav-right">
        <div className="search-container">
          <input
            type="text"
            id="search-bar"
            placeholder="Search"
            className="search-input"
          />
          <span className="cp search-icon material-symbols-outlined">
            search
          </span>
        </div>

        <div className="dark-mode-toggle">
          <span className="cp cart material-symbols-outlined">
            <Link to="/cart">shopping_cart</Link>
          </span>

          <span id="dark-icon" className="cp material-symbols-outlined">
            dark_mode
          </span>
        </div>

        <span className="signup cp">
          <h3>Signup</h3>
        </span>
      </div>
    </div>
  );
};

export default Navbar;

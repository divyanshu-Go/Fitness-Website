import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import AboutUs from "../../components/AboutUs/AboutUs";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="bmiPage-container">
        <LeftSidebar className="left-sidebar" />
        <AboutUs/>
      </div>
      <Footer className="footer" />
    </>
  );
};

export default AboutUsPage;

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Bmi from "../../components/Bmi/Bmi";
import Footer from "../../components/Footer/Footer";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import './BmiPage.css'

const BmiPage = () => {
  return (
    <>
      <Navbar />
      <div className="bmiPage-container">
        <LeftSidebar className="left-sidebar" />
        <Bmi className="bmi" />
      </div>
      <Footer className="footer" />
    </>
  );
};

export default BmiPage;

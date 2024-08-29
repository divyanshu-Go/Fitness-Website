import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Calorie from "../../components/Calorie/Calorie";

const CaloriePage = () => {
  return (
    <>
      <Navbar />
      <div className="bmiPage-container">
        <LeftSidebar className="left-sidebar" />
        <Calorie/>
      </div>
      <Footer className="footer" />
    </>
  );
};

export default CaloriePage;

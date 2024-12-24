import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Steps from "../../components/Steps/Steps";

const BmiPage = () => {
  return (
    <>
      <Navbar />
      <div className="bmiPage-container">
        <LeftSidebar className="left-sidebar" />
        <Steps/>
      </div>
      <Footer className="footer" />
    </>
  );
};

export default BmiPage;

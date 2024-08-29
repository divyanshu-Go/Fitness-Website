import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import './ShopPage.css'
import Shop from "../../components/Shop/Shop";

const ShopPage = () => {
  return (
    <>
      <Navbar />
      <div className="shopPage-container">
        <LeftSidebar className="left-sidebar" />
        <Shop/>
      </div>
      <Footer className="footer" />
    </>
  );
};

export default ShopPage;

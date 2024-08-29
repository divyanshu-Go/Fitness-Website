import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import CenterMain from "../../components/CenterMain/CenterMain";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      
        <Navbar />
        <div className="home-container">
          <LeftSidebar />
          <CenterMain />
          <RightSidebar />
        </div>
        <Footer />
     
    </>
  );
}

export default Home;

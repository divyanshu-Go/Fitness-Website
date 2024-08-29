import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import './NewsPage.css'
import News from "../../components/News/News";

const NewsPage = () => {
  return (
    <>
      <Navbar />
      <div className="newsPage-container">
        <LeftSidebar className="left-sidebar" />
        <News/>
      </div>
      <Footer className="footer" />
    </>
  );
};

export default NewsPage;

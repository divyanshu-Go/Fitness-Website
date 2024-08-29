import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import ContactUs from "../../components/ContactUs/ContactUs";

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="bmiPage-container">
        <LeftSidebar className="left-sidebar" />
        <ContactUs/>
      </div>
      <Footer className="footer" />
    </>
  );
};

export default ContactUsPage;

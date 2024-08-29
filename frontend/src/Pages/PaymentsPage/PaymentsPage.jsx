import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Payments from "../../components/Payments/Payments";
import './PaymentsPage.css'

const PaymentsPage = () => {
  return (
    <>
      <Navbar />
      <div className="paymentsPage-container">
        <LeftSidebar className="left-sidebar" />
        <Payments/>
      </div>
      <Footer className="footer" />
    </>
  );
};

export default PaymentsPage;

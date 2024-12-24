import React from "react";
import './LeftSidebar.css';
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <>
      {/* Aside Start */}
      <aside>
        {/* Sidebar Start */}
        <div className="left-sidebar">
          <Link to="/" className="left-active">
            <span className="material-symbols-sharp">grid_view</span>
            <h3>Dashboard</h3>
          </Link>
          <Link to="/bmipage">
            <span className="material-symbols-sharp">monitor_weight</span>
            <h3>BMI</h3>
          </Link>
          <Link to="/steps">
            <span className="material-symbols-sharp">steps</span>
            <h3>Steps</h3>
          </Link>
          <Link to="/calorie">
            <span className="material-symbols-sharp">nutrition</span>
            <h3>Fitness Diet</h3>
          </Link>
          <Link to="/news">
            <span className="material-symbols-sharp">newspaper</span>
            <h3>News</h3>
          </Link>
          <Link to="/shop">
            <span className="material-symbols-sharp">
              local_convenience_store
            </span>
            <h3>Shop</h3>
          </Link>
          <Link to="/payments">
            <span className="material-symbols-sharp">payments</span>
            <h3>Payments</h3>
          </Link>
          <Link to="/cart">
            <span className="material-symbols-sharp">shopping_cart</span>
            <h3>Cart</h3>
          </Link>
          <Link to="/contactUs">
            <span className="material-symbols-sharp">support_agent</span>
            <h3>Contact Us</h3>
          </Link>
          <Link to="#">
            <span className="material-symbols-sharp">tv_signin</span>
            <h3>Social</h3>
          </Link>
          <Link to="/aboutUs">
            <span className="material-symbols-sharp">groups</span>
            <h3>About Us</h3>
          </Link>
          <Link to="#">
            <span className="material-symbols-sharp">logout</span>
            <h3>Logout</h3>
          </Link>
        </div>
        {/* Sidebar End */}
      </aside>
      {/* Aside End */}
    </>
  );
};

export default LeftSidebar;

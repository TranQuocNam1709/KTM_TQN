import React from "react";
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>E-Commerce</h1>
      <input type="text" placeholder="Enter your search shoes..." />
      <div className="navbar-icons">
        <FaHeart />
        <FaShoppingCart />
        <FaUser />
      </div>
    </div>
  );
};

export default Navbar;

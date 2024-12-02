import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Category</h3>
      <ul>
        <li>All</li>
        <li>Sneakers</li>
        <li>Flats</li>
        <li>Sandals</li>
        <li>Heels</li>
      </ul>
      <h3>Price</h3>
      <ul>
        <li>All</li>
        <li>$0 - $50</li>
        <li>$50 - $100</li>
        <li>$100 - $150</li>
        <li>Over $150</li>
      </ul>
      <h3>Colors</h3>
      <ul>
        <li>All</li>
        <li>Black</li>
        <li>Blue</li>
        <li>Red</li>
        <li>Green</li>
        <li>White</li>
      </ul>
    </div>
  );
};

export default Sidebar;

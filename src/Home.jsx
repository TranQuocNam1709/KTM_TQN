import React from "react";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";

const Home = () => (
  <div className="home">
    <Sidebar />
    <div className="product-grid">
      <h2>Recommended</h2>
      <div className="product-list">
        {Array(8)
          .fill()
          .map((_, index) => (
            <ProductCard key={index} />
          ))}
      </div>
    </div>
  </div>
);

export default Home;

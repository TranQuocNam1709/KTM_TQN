import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>⭐⭐⭐⭐ 4</p>
      <p>
        <span className="original-price">${product.originalPrice}</span> $
        {product.discountedPrice}
      </p>
    </div>
  );
};

export default ProductCard;

import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import "./App.css";

const products = [
  {
    name: "Nike Air Monarch IV",
    image:
      "https://cdn-images.farfetch-contents.com/16/71/41/34/16714134_40767499_1000.jpg",
    originalPrice: 300,
    discountedPrice: 200,
    brand: "Nike", // Thêm thuộc tính brand
  },
  {
    name: "Nike Air Vapormax Plus",
    image:
      "https://th.bing.com/th/id/OIP.jLRz4QwrQirzXW8XlT98gAHaJQ?rs=1&pid=ImgDetMain",
    originalPrice: 300,
    discountedPrice: 200,
    brand: "Nike", // Thêm thuộc tính brand
  },
  {
    name: "Adidas Running Shoe",
    image:
      "https://th.bing.com/th/id/OIP.Hc98ddH_B28AfR6rQXs8MgHaFM?rs=1&pid=ImgDetMain",
    originalPrice: 250,
    discountedPrice: 180,
    brand: "Adidas", // Thêm thuộc tính brand
  },
  {
    name: "adidas Switch Fwd 2",
    image: "https://i.ebayimg.com/images/g/Ht0AAOSwGxtk0JtZ/s-l1600.webp",
    originalPrice: 260,
    discountedPrice: 200,
    brand: "Adidas", // Thêm thuộc tính brand
  },
  {
    name: "Puma Sneakers",
    image:
      "https://cdna.lystit.com/photos/puma/21e8a2ef/puma-Puma-Black-Puma-White-Viz-Runner-Mens-Running-Shoes.jpeg",
    originalPrice: 200,
    discountedPrice: 150,
    brand: "Puma", // Thêm thuộc tính brand
  },
  {
    name: "Puma Deviate NITRO™ Elite 3",
    image:
      "https://product.hstatic.net/1000284478/product/01_310554_1_c11c8d5fe8b74faaa6cea87c64bb71bf.jpg",
    originalPrice: 200,
    discountedPrice: 150,
    brand: "Puma", // Thêm thuộc tính brand
  },
  {
    name: "Vans Classic",
    image:
      "https://th.bing.com/th/id/OIP.QGFbQO8B2j4gcnR6xzBpswHaFj?rs=1&pid=ImgDetMain",
    originalPrice: 130,
    discountedPrice: 100,
    brand: "Vans", // Thêm thuộc tính brand
  },
  {
    name: "VANS UPLAND WHITE/BLACK",
    image:
      "https://th.bing.com/th/id/OIP.RSEXt-vNq8UOyAksGBLdtQHaDg?rs=1&pid=ImgDetMain",
    originalPrice: 120,
    discountedPrice: 90,
    brand: "Vans", // Thêm thuộc tính brand
  },
  // Thêm các sản phẩm khác nếu cần
];

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(products); // State để lưu danh sách sản phẩm hiển thị

  // Hàm xử lý khi nhấn vào nút "All Products"
  const handleAllProducts = () => {
    setFilteredProducts(products); // Hiển thị tất cả sản phẩm
  };

  // Hàm xử lý khi nhấn vào các nút thương hiệu
  const handleFilterByBrand = (brand) => {
    const filtered = products.filter((product) => product.brand === brand);
    setFilteredProducts(filtered); // Hiển thị sản phẩm của thương hiệu được chọn
  };

  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="product-section">
          <h2>Recommended</h2>
          <div className="filter-buttons">
            <button onClick={handleAllProducts}>All Products</button>
            <button onClick={() => handleFilterByBrand("Nike")}>Nike</button>
            <button onClick={() => handleFilterByBrand("Adidas")}>
              Adidas
            </button>
            <button onClick={() => handleFilterByBrand("Puma")}>Puma</button>
            <button onClick={() => handleFilterByBrand("Vans")}>Vans</button>
          </div>
          <div className="product-grid">
            {/* Hiển thị sản phẩm từ state filteredProducts */}
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useRef } from "react";
import SectionHeader from "../SectionHeader";
import ProductCard from "../common/ProductCard";
import Button from "../common/Button";
import img1 from "../../assets/products/image1.png";
import "./ExploreProducts.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ExploreProducts() {
  const scrollRef = useRef(null);

  const products = [
    {
      id: 1,
      image: img1,
      title: "Breed Dry Dog Food",
      price: "100",
      oldPrice: "120",
      discount: 20,
    },
    {
      id: 2,
      image: img1,
      title: "CANON EOS DSLR Camera",
      price: "360",
      oldPrice: "400",
      discount: 10,
    },
    {
      id: 3,
      image: img1,
      title: "ASUS FHD Gaming Laptop",
      price: "700",
      oldPrice: "800",
      discount: 12,
    },
    {
      id: 4,
      image: img1,
      title: "Curology Product Set",
      price: "500",
    },
    {
      id: 5,
      image: img1,
      title: "Kids Electric Car",
      price: "960",
      isNew: true,
    },
    {
      id: 6,
      image: img1,
      title: "Jr. Zoom Soccer Cleats",
      price: "1160",
    },
    {
      id: 7,
      image: img1,
      title: "GP11 Shooter USB Gamepad",
      price: "660",
      isNew: true,
    },
    {
      id: 8,
      image: img1,
      title: "Quilted Satin Jacket",
      price: "660",
    },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="explore-products-section">
      <div className="explore-products__header">
        <SectionHeader tag="Our Products" title="Explore Our Products" showTimer={false} />

        <div className="explore-products__controls">
          <button onClick={() => scroll("left")} className="scroll-btn">
            <FaArrowLeft />
          </button>
          <button onClick={() => scroll("right")} className="scroll-btn">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="explore-products__scroll" ref={scrollRef}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="explore-products__scroll" ref={scrollRef}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Button label="View All Products" variant="primary" />
      </div>
    </section>
  );
}

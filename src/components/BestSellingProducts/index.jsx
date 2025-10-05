import React, { useRef } from "react";
import "./BestSellingProducts.css";
import ProductCard from "../common/ProductCard";
import SectionHeader from "../SectionHeader";
import Button from "../common/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/products/image1.png";

export default function BestSellingProducts() {
  const scrollRef = useRef(null);

  const products = [
    {
      id: 1,
      image: img1,
      title: "The north coat",
      price: "260",
      oldPrice: "360",
      discount: 30,
    },
    {
      id: 2,
      image: img1,
      title: "Gucci duffle bag",
      price: "960",
      oldPrice: "1160",
      discount: 35,
    },
    {
      id: 3,
      image: img1,
      title: "RGB liquid CPU Cooler",
      price: "160",
      oldPrice: "170",
      discount: 10,
    },
    {
      id: 4,
      image: img1,
      title: "Small BookSelf",
      price: "360",
      oldPrice: "400",
      discount: 25,
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
    <section className="best-selling-section">
      <div className="best-selling__header">
        <SectionHeader title="Best Selling Products" tag="This Month" showTimer={false} />
        <div className="best-selling__controls">
          <button onClick={() => scroll("left")} className="scroll-btn">
            <FaArrowLeft />
          </button>
          <button onClick={() => scroll("right")} className="scroll-btn">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="best-selling__scroll" ref={scrollRef}>
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

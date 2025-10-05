import React, { useRef } from "react";
import "./FlashSales.css";
import ProductCard from "../common/ProductCard";
import SectionHeader from "../SectionHeader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/products/image1.png";
import Button from "../common/Button";
import Divider from "../common/Divider";
// import img2 from "../../assets/products/image2.png";
// import img3 from "../../assets/products/image3.png";
// import img4 from "../../assets/products/image4.png";

export default function FlashSales() {
  const scrollRef = useRef(null);

  const products = [
    {
      image: img1,
      title: "HAVIT HV-G92 Gamepad",
      price: "120",
      oldPrice: "160",
      discount: 40,
    },
    {
      image: img1,
      title: "AK-900 Wired Keyboard",
      price: "960",
      oldPrice: "1160",
      discount: 35,
    },
    {
      image: img1,
      title: "IPS LCD Gaming Monitor",
      price: "370",
      oldPrice: "400",
      discount: 30,
    },
    {
      image: img1,
      title: "S-Series Comfort Chair",
      price: "375",
      oldPrice: "400",
      discount: 25,
    },
    {
      image: img1,
      title: "Sony Headphones",
      price: "250",
      isNew: true,
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
    <section className="flash-sales-section">
      <SectionHeader title="Flash Sales" tag="Today’s" showTimer={true} />

      <div className="flash-sales__controls">
        <button onClick={() => scroll("left")} className="scroll-btn">
          <FaArrowLeft />
        </button>
        <button onClick={() => scroll("right")} className="scroll-btn">
          <FaArrowRight />
        </button>
      </div>

      <div className="flash-sales__scroll" ref={scrollRef}>
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
       <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Button label="View All Products" variant="primary" />
      </div>

      <Divider />
    </section>
  );
}

import React from "react";
import "./HeroSection.css";
import { FaChevronRight } from "react-icons/fa";
import iphoneImage from "../../assets/iphone.jpg";
import appleIcon from "../../assets/apple-icon.png";

export default function HeroSection() {
  const categories = [
    { name: "Woman’s Fashion", hasArrow: true },
    { name: "Men’s Fashion", hasArrow: true },
    { name: "Electronics", hasArrow: false },
    { name: "Home & Lifestyle", hasArrow: false },
    { name: "Medicine", hasArrow: false },
    { name: "Sports & Outdoor", hasArrow: false },
    { name: "Baby’s & Toys", hasArrow: false },
    { name: "Groceries & Pets", hasArrow: false },
    { name: "Health & Beauty", hasArrow: false },
  ];

  return (
    <section className="hero">
      <div className="hero__container">
        {/* Sidebar */}
        <aside className="hero__categories">
          <ul>
            {categories.map((item, idx) => (
              <li key={idx}>
                <span>{item.name}</span>
                {item.hasArrow && <FaChevronRight className="hero__arrow" />}
              </li>
            ))}
          </ul>
        </aside>

        {/* Banner */}
        <div className="hero__banner">
          <div className="hero__content">
            <div className="hero__series">
              <img src={appleIcon} alt="Apple" className="hero__apple" />
              <span>iPhone 14 Series</span>
            </div>
            <h1>Up to 10% off Voucher</h1>
            <a href="#" className="hero__button">
              Shop Now →
            </a>
          </div>

          <div className="hero__image">
            <img src={iphoneImage} alt="iPhone 14" />
          </div>

          {/* Dots */}
          <div className="hero__dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

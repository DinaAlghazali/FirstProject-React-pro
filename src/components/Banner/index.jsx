import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h4>iPhone 14 Series</h4>
        <h2>Experience the future of smartphones</h2>
        <button className="shop-btn">Shop Now</button>
      </div>
      <img
        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14pro"
        alt="iPhone"
        className="banner-img"
      />
    </section>
  );
}
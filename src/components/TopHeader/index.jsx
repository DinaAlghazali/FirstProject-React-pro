import React from "react";
import "./TopHeader.css";

export default function TopHeader() {
  return (
    <header className="top-header">
      <div className="top-header__container">
        <p className="top-header__text">
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
          <a href="#" className="top-header__link">
            ShopNow
          </a>
        </p>
        <div className="top-header__lang">
          <select className="top-header__lang-select">
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
          </select>
        </div>
      </div>
    </header>
  );
}

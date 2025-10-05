import React from "react";
import "./Header.css";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Search from "../common/Search";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h2>Exclusive</h2>
        </div>

        <nav className="header__nav">
          <a href="#" className="header__link active">Home</a>
          <a href="#" className="header__link">Contact</a>
          <a href="#" className="header__link">About</a>
          <a href="#" className="header__link">Sign Up</a>
        </nav>

        <div className="header__actions">
          <Search />
          <FaRegHeart className="header__icon" />
          <FaShoppingCart className="header__icon" />
        </div>
      </div>
    </header>
  );
}

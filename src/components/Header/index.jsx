import React from "react";
import "./Header.css";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Search from "../common/Search";
import { useNavigate , NavLink } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const goToWichList = () => {
    navigate("/wishlist"); // 👈 navigate programmatically
  };

  const goToCart = () => {
    navigate("/cart"); // 👈 navigate programmatically
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h2>Exclusive</h2>
        </div>

        <nav className="header__nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "") }>Contact</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>About</NavLink>
          <NavLink to="/signup" className={({ isActive }) => (isActive ? "active-link" : "")} >Sign Up</NavLink>
        </nav>

        <div className="header__actions">
          <Search />
          <FaRegHeart className="header__icon" onClick={goToWichList}/>
          <FaShoppingCart className="header__icon" onClick={goToCart} />
        </div>
      </div>
    </header>
  );
}

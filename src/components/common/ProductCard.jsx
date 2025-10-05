import React from "react";
import "./ProductCard.css";
import { FaHeart, FaEye } from "react-icons/fa";

export default function ProductCard({
  image,
  title,
  price,
  oldPrice,
  discount,
  rating,
  reviews,
  hasAddToCart = true,
  label, // optional: e.g. "NEW", "HOT", "BEST", etc.
}) {
  return (
    <div className="product-card">
      {/* Discount or Label */}
      {(discount || label) && (
        <div
          className={`product-card__badge ${
            label ? "product-card__badge--green" : ""
          }`}
        >
          {label ? label : `-${discount}%`}
        </div>
      )}

      {/* Product Image */}
      <div className="product-card__image-wrapper">
        <img src={image} alt={title} className="product-card__image" />
        <div className="product-card__icons">
          <button className="icon-btn">
            <FaHeart />
          </button>
          <button className="icon-btn">
            <FaEye />
          </button>
        </div>

        {/* Add to Cart (hover) */}
        {hasAddToCart && (
          <button className="product-card__add-btn">Add To Cart</button>
        )}
      </div>

      {/* Product Details */}
      <div className="product-card__details">
        <h3 className="product-card__title">{title}</h3>
        <div className="product-card__prices">
          <span className="price">${price}</span>
          {oldPrice && <span className="old-price">${oldPrice}</span>}
        </div>

        {/* Rating */}
        <div className="product-card__rating">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`star ${i < rating ? "active" : ""}`}>
              ★
            </span>
          ))}
          <span className="reviews">({reviews})</span>
        </div>
      </div>
    </div>
  );
}

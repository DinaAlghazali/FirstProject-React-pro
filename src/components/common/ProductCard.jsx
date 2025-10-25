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
  showHeartIcon = true,
  showEyeIcon = true,
  showDeleteIcon = false,
  showRating = true,
  showAddToCart = false
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
          {showHeartIcon && (<button className="icon-btn">
            <FaHeart />
          </button>
          )}
          {showEyeIcon && (<button className="icon-btn">
            <FaEye />
          </button>)}
          {showDeleteIcon && (<button className="icon-btn">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.7798 3.35143H2.11312L3.44645 18.78H14.1131L15.4465 3.35143H0.779785M8.77979 7.20857V14.9229M12.1131 7.20857L11.4465 14.9229M5.44645 7.20857L6.11312 14.9229M6.11312 3.35143L6.77979 0.779999H10.7798L11.4465 3.35143" stroke="currentColor" strokeWidth="1.56" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>)}
        </div>

        {/* Add to Cart (hover) */}
        {hasAddToCart && (
          <button className={`product-card__add-btn ${showAddToCart?"show":''}`}>Add To Cart</button>
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
        {showRating && (<div className="product-card__rating">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`star ${i < rating ? "active" : ""}`}>
              ★
            </span>
          ))}
          <span className="reviews">({reviews})</span>
        </div>
        )}
      </div>
    </div>
  );
}

import React from "react";
import "./CategoryCard.css";

export default function CategoryCard({ icon, title, active }) {
  return (
    <div className={`category-card ${active ? "active" : ""}`}>
      <div className="category-card__icon">{icon}</div>
      <h4 className="category-card__title">{title}</h4> 
    </div>
  );
}

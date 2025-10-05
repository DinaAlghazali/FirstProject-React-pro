import React from "react";
import "./ProductLabel.css";

export default function ProductLabel({ text, type = "red" }) {
  if (!text) return null;

  return (
    <div className={`product-label ${type}`}>
      {text}
    </div>
  );
}

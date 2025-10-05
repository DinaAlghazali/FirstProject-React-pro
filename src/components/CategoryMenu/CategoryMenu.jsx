
import React from "react";
import "./CategoryMenu.css";

export default function CategoryMenu() {
  const categories = ["Woman's Fashion", "Men's Fashion", "Electronics", "Home", "Beauty"];
  return (
    <aside className="category-menu">
      <ul>
        {categories.map((cat, i) => (
          <li key={i}>{cat}</li>
        ))}
      </ul>
    </aside>
  );
}

import React from "react";
import "./ProductGrid.css";

export default function ProductGrid({ title }) {
  const products = Array(8).fill(0).map((_, i) => ({
    id: i,
    // name: Product ${i + 1},
    // price: $${(i + 1) * 20},
    img: "https://via.placeholder.com/200"
  }));

  return (
    <section className="product-grid">
      <h2>{title}</h2>
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="grid-card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
import React from "react";
import "./Services.css";

export default function Services() {
  const services = [
    { icon: "🚚", title: "Free Delivery", desc: "Get free delivery on all orders" },
    { icon: "💳", title: "Secure Payment", desc: "100% secure payment" },
    { icon: "🎧", title: "24/7 Support", desc: "We are here to help anytime" },
  ];

  return (
    <section className="services">
      {services.map((s, i) => (
        <div key={i} className="service-card">
          <span className="icon">{s.icon}</span>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </section>
  );
}
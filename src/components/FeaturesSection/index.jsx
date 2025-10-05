import React from "react";
import { FaTruck, FaHeadphonesAlt, FaShieldAlt } from "react-icons/fa";
import "./FeaturesSection.css";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: <FaTruck />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon: <FaHeadphonesAlt />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      icon: <FaShieldAlt />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-section__container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-card__icon">{feature.icon}</div>
            <h3 className="feature-card__title">{feature.title}</h3>
            <p className="feature-card__description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

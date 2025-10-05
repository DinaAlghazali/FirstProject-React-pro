import React from "react";
import SectionHeader from "../SectionHeader";
import CategoryCard from "../common/CategoryCard";
import { FaMobileAlt, FaLaptop, FaCamera, FaHeadphones, FaGamepad, FaClock } from "react-icons/fa";
import "./BrowseByCategory.css";
import Divider from "../common/Divider";

export default function BrowseByCategory() {
  const categories = [
    { id: 1, icon: <FaMobileAlt />, title: "Phones" },
    { id: 2, icon: <FaLaptop />, title: "Computers" },
    { id: 3, icon: <FaClock />, title: "SmartWatch" },
    { id: 4, icon: <FaCamera />, title: "Camera", active: true },
    { id: 5, icon: <FaHeadphones />, title: "HeadPhones" },
    { id: 6, icon: <FaGamepad />, title: "Gaming" },
  ];

  return (
    <section className="browse-category">
      <SectionHeader title="Browse By Category" tag="Categories" showTimer={false} />

      <div className="browse-category__wrapper">
        <div className="browse-category__cards">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} icon={cat.icon} title={cat.title} active={cat.active} />
          ))}
        </div>

        <div className="browse-category__arrows">
          <button className="arrow-btn">←</button>
          <button className="arrow-btn">→</button>
        </div>
      </div>
      <Divider />
    </section>
  );
}

import React from "react";
import "./NewArrival.css";

// استبدل الصور بمساراتك
import ps5 from "../../assets/ps5.png"
import woman from "../../assets/woman-collection.jpg";
import speakers from "../../assets/speakers.png";
import perfume from "../../assets/perfume.png";

export default function NewArrival() {
  const cards = [
    {
      id: 1,
      image: ps5,
      title: "PlayStation 5",
      desc: "Black and White version of the PS5 coming out on sale.",
    },
    {
      id: 2,
      image: woman,
      title: "Women’s Collections",
      desc: "Featured woman collections that give you another vibe.",
    },
    {
      id: 3,
      image: speakers,
      title: "Speakers",
      desc: "Amazon wireless speakers",
    },
    {
      id: 4,
      image: perfume,
      title: "Perfume",
      desc: "GUCCI INTENSE OUD EDP",
    },
  ];

  return (
    <section className="new-arrival">
      <div className="new-arrival__header">
        <div className="dot"></div>
        <p className="featured">Featured</p>
      </div>
      <h2 className="title">New Arrival</h2>

      <div className="new-arrival__grid">
        {cards.map((card, i) => (
          <div key={card.id} className={`card card-${i + 1}`}>
            <img src={card.image} alt={card.title} className="card__img" />
            <div className="overlay"></div>
            <div className="card__content">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <button>Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import "./PromoBanner.css";
import speakerImg from "../../assets/jbl-speaker.png";

export default function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="promo-banner__content">
        <span className="promo-banner__category">Categories</span>
        <h2 className="promo-banner__title">
          Enhance Your <br /> Music Experience
        </h2>

        <div className="promo-banner__timer">
          {[
            { number: "23", label: "Hours" },
            { number: "05", label: "Days" },
            { number: "59", label: "Minutes" },
            { number: "35", label: "Seconds" },
          ].map((item, i) => (
            <div key={i}>
              <h4>{item.number}</h4>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <button className="promo-banner__btn">Buy Now!</button>
      </div>

      <div className="promo-banner__image">
        <img src={speakerImg} alt="JBL Speaker" />
      </div>
    </section>
  );
}

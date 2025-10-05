import React from "react";
import "./SectionHeader.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function SectionHeader({ tag = "Today's", title, showTimer = true }) {
  return (
    <div className="section-header">
      {/* --- Top (Today's) --- */}
      <div className="section-header__top">
        <div className="section-header__tag-box"></div>
        <span className="section-header__tag-text">{tag}</span>
      </div>

      {/* --- Bottom Row --- */}
      <div className="section-header__bottom">
        <div className="section-header__left">
          <h2 className="section-header__title">{title}</h2>

          {showTimer && (
            <div className="section-header__timer">
              <div>
                <span>Days</span>
                <h3>03</h3>
              </div>
              <span className="colon">:</span>
              <div>
                <span>Hours</span>
                <h3>23</h3>
              </div>
              <span className="colon">:</span>
              <div>
                <span>Minutes</span>
                <h3>19</h3>
              </div>
              <span className="colon">:</span>
              <div>
                <span>Seconds</span>
                <h3>56</h3>
              </div>
            </div>
          )}
        </div>

        <div className="section-header__arrows">
          <button className="arrow-btn"><FaArrowLeft /></button>
          <button className="arrow-btn"><FaArrowRight /></button>
        </div>
      </div>
    </div>
  );
}

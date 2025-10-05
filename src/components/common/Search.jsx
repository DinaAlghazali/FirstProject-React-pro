import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

export default function Search({ placeholder = "What are you looking for?" }) {
  return (
    <div className="search-component">
      <input
        type="text"
        className="search-component__input"
        placeholder={placeholder}
      />
      <FaSearch className="search-component__icon" />
    </div>
  );
}

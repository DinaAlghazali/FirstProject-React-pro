import React from "react";
import "./Button.css";

export default function Button({
  label,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`lovable-btn lovable-btn--${variant} ${className}`}
    >
      {label}
    </button>
  );
}

import React from "react";
import "./Divider.css";

export default function Divider({ margin = "40px 0" }) {
  return <hr className="divider" style={{ margin }} />;
}

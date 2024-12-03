import React from "react";
import { useLocation } from "react-router-dom";
import "./More.css";

const More = () => {
  const location = useLocation();
  const { title, content } = location.state || {};
  return (
    <div className="more-container">
      <h1 className="more-title">{title}</h1>
      <p className="more-content">{content}</p>
    </div>
  );
};

export default More;

import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spin"></div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default Spinner;

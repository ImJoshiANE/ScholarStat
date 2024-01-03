import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <svg viewBox="25 25 50 50">
          <circle cx={50} cy={50} r={20} fill="none" className="path" />
        </svg>
      </div>
    </div>
  );
};

export default Loading;

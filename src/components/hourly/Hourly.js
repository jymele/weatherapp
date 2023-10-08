import React from "react";
import "./hourly.scss";

export default function Hourly() {
  return (
    <div className="hourly-section">
      <h3>Hourly</h3>
      <div className="hourlist">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <div key={index} className="hour placeholder"></div>
        ))}
      </div>
    </div>
  );
}

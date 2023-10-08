import React from "react";
import "./weekly.scss";

export default function Weekly() {
  return (
    <div className="weekly-section">
      <header>
        <h3>This Week</h3>
      </header>
      <div className="weeklist">
        {[0, 1, 2, 3, 4, 5].map((item, index) => (
          <div className="week" key={index}></div>
        ))}
      </div>
    </div>
  );
}

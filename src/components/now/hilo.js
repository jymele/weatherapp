import React from "react";
import { ArrowUp, ArrowDown } from "../Icons";

export default function Hilo({ loading, weather, settings }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="range">
      <div className="hilo min">
        <ArrowDown className="minIcon" />
        <div>
          <span>Min</span>
          {settings.temp === "c" && <h3>23&deg;</h3>}
        </div>
      </div>
      <div className="hilo max">
        <ArrowUp className="maxIcon" />

        <div>
          <span>Max</span>
          {settings.temp === "c" && <h3>28&deg;</h3>}
        </div>
      </div>
    </div>
  );
}

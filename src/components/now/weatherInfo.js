import React from "react";

export default function WeatherInfo({ loading, weather }) {
  return (
    <div>
      {!loading && <h2>{weather.current.temp_c}&deg;</h2>}
      {!loading && <span>{weather.current.condition.text}</span>}
    </div>
  );
}

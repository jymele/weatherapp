import React from "react";

export default function WeatherInfo({ settings, loading, weather }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {settings.temp === "c" && (
        <h2>{Math.round(weather.current.temp_c)}&deg;C</h2>
      )}
      {settings.temp === "f" && (
        <h2>{Math.round(weather.current.temp_f)}&deg;F</h2>
      )}
      <span>{weather.current.condition.text}</span>
    </div>
  );
}

import React from "react";

export default function WeatherIcon({ loading, weather }) {
  return (
    <>
      {loading && <div className="placeholder weatherIcon"></div>}
      {!loading && (
        <img
          className="weatherIcon"
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
        />
      )}
    </>
  );
}

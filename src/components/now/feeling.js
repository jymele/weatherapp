import React from "react";

export default function Feeling({ loading, weather, settings }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {settings.temp === "c" && (
        <div className="feeling">
          Feels like {Math.round(weather.current.feelslike_c)}&deg;C
        </div>
      )}
      {settings.temp === "f" && (
        <div className="feeling">
          Feels like {Math.round(weather.current.feelslike_f)}&deg;F
        </div>
      )}
    </>
  );
}

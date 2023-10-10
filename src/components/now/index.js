import React, { useEffect } from "react";
import WeatherIcon from "./weatherIcon";
import WeatherInfo from "./weatherInfo";
import Hilo from "./hilo";
import Feeling from "./feeling";

export default function Now({ loading, weather, settings }) {
  useEffect(() => {
    if (weather !== undefined) {
      console.log(weather);
    }
  }, [weather]);

  return (
    <div className="now">
      <div className="main">
        <WeatherIcon loading={loading} weather={weather} />
        <WeatherInfo loading={loading} weather={weather} />
        <div>
          <Hilo loading={loading} weather={weather} settings={settings} />
          <Feeling loading={loading} weather={weather} settings={settings} />
        </div>
      </div>
    </div>
  );
}

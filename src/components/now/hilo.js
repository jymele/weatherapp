import React from "react";
import { ArrowUp, ArrowDown } from "../Icons";
import styles from "./now.module.scss";

export default function Hilo({ loading, weather, settings }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.range}>
      <div className={`${styles.hilo} min`}>
        <ArrowDown className={styles.icon} />
        <div>
          <span>Min</span>
          {settings.temp === "c" && (
            <h3>
              {Math.round(weather.forecast.forecastday[0].day.mintemp_c)}&deg;
            </h3>
          )}
          {settings.temp === "f" && (
            <h3>
              {Math.round(weather.forecast.forecastday[0].day.mintemp_f)}&deg;
            </h3>
          )}
        </div>
      </div>
      <div className={`${styles.hilo} max`}>
        <ArrowUp className={styles.icon} />

        <div>
          <span>Max</span>
          {settings.temp === "c" && (
            <h3>
              {Math.round(weather.forecast.forecastday[0].day.maxtemp_c)}&deg;
            </h3>
          )}
          {settings.temp === "f" && (
            <h3>
              {Math.round(weather.forecast.forecastday[0].day.maxtemp_f)}&deg;
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

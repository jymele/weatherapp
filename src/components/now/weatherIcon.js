import React from "react";
import styles from "./now.module.scss";

export default function WeatherIcon({ loading, weather }) {
  return (
    <>
      {loading && <div className={`placeholder ${styles.weatherIcon}`}></div>}
      {!loading && (
        <img
          className={styles.weatherIcon}
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
        />
      )}
    </>
  );
}

import React, { useEffect } from "react";
import WeatherIcon from "./weatherIcon";
import WeatherInfo from "./weatherInfo";
import Hilo from "./hilo";
import Feeling from "./feeling";
import styles from "./now.module.scss";

export default function Now({ loading, weather, settings }) {
  useEffect(() => {
    if (weather !== undefined) {
      console.log(weather);
    }
  }, [weather]);

  return (
    <div className={styles.now}>
      <div className={styles.main}>
        <WeatherIcon loading={loading} weather={weather} />
        <WeatherInfo settings={settings} loading={loading} weather={weather} />
      </div>
      <div className={styles.secondary}>
        <Hilo loading={loading} weather={weather} settings={settings} />
        <Feeling loading={loading} weather={weather} settings={settings} />
      </div>
    </div>
  );
}

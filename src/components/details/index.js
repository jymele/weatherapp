import React from "react";
import styles from "./details.module.scss";
import Item from "./item";
import sunsetIcon from "../../icons/sunset.png";
import sunriseIcon from "../../icons/sunrise.png";
import humidityIcon from "../../icons/humidity.png";
import gustIcon from "../../icons/gust.png";
import windIcon from "../../icons/wind.png";
import uvIcon from "../../icons/uv.png";

export default function Details({ loading, weather, settings }) {
  if (loading) {
    return <>Loading</>;
  }

  return (
    <div className={styles.panel}>
      <Item
        icon={sunriseIcon}
        title={"Sunrise"}
        value={weather.forecast.forecastday[0].astro.sunrise}
      />
      <Item
        icon={sunsetIcon}
        title={"Sunset"}
        value={weather.forecast.forecastday[0].astro.sunset}
      />
      <Item
        icon={humidityIcon}
        title={"Humidity"}
        value={weather.current.humidity}
      />
      <Item icon={uvIcon} title={"UV Index"} value={weather.current.uv} />
      <Item
        icon={windIcon}
        title={"Wind Degree"}
        value={weather.current.wind_degree}
      />
      <Item
        icon={windIcon}
        title={"Wind Direction"}
        value={weather.current.wind_dir}
      />
      {settings.distance === "km" && (
        <Item
          icon={windIcon}
          title={"Wind Speed"}
          value={weather.current.wind_kph + " kph"}
        />
      )}
      {settings.distance === "miles" && (
        <Item
          icon={windIcon}
          title={"Wind Speed"}
          value={weather.current.wind_mph + " mph"}
        />
      )}
      {settings.distance === "km" && (
        <Item
          icon={gustIcon}
          title={"Gust"}
          value={weather.current.gust_kph + " kph"}
        />
      )}
      {settings.distance === "miles" && (
        <Item
          icon={gustIcon}
          title={"Gust"}
          value={weather.current.gust_mph + " mph"}
        />
      )}
    </div>
  );
}

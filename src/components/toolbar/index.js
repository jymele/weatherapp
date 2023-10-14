import React, { useState } from "react";
import { Searchbar, Cancel, Settings } from "../Icons";
import styles from "./toolbar.module.scss";

export default function Toolbar({ settings, setTemp, weather, getWeather }) {
  const [query, setQuery] = useState("");

  function toggleTemp() {
    let newTemp = "";
    if (settings.temp === "c") {
      newTemp = "f";
    } else {
      newTemp = "c";
    }

    setTemp(newTemp);
  }

  function searchWeather(e) {
    e.preventDefault();
    getWeather(query);
    setQuery("");
  }

  return (
    <>
      <header className="App-header">
        <form className="searchbar" onSubmit={searchWeather}>
          <Searchbar className="icon" />
          <input
            className={styles.search}
            placeholder={
              weather
                ? `${weather.location.name}, ${weather.location.region}`
                : "Loading region"
            }
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <Cancel className="icon" />
        </form>

        <button className="buttonIcon">
          <Settings className="icon" />
        </button>
        <button className={styles.tempToggle} onClick={toggleTemp}>
          <div
            className={
              settings.temp === "c"
                ? `${styles.indicator} ${styles.celcius}`
                : `${styles.indicator} ${styles.far}`
            }
          ></div>
          <div className={styles.option}>C</div>
          <div className={styles.option}>F</div>
        </button>
      </header>
      {/* <div className={styles.options}>
        <div>Testing</div>
      </div> */}
    </>
  );
}

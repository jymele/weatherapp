import React, { useState } from "react";
import { Search, Cancel, Settings } from "../Icons";
import styles from "./toolbar.module.scss";

export default function Toolbar({ settings, setTemp, weather, getLocations }) {
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

  return (
    <>
      <header className="App-header">
        <form className="searchbar">
          <Search className="icon" />
          <div className={styles.searchform}>
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
                if (e.target.value.length >= 3) {
                  getLocations(e.target.value);
                }
              }}
            />
            <Cancel className="icon" />
          </div>
        </form>

        {/* <button className="buttonIcon">
          <Settings className="icon" />
        </button> */}
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
    </>
  );
}

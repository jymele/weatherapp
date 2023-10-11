import React, { useState } from "react";
import { Searchbar, Cancel, Settings } from "../Icons";
import styles from "./toolbar.module.scss";

export default function Toolbar({ settings, setTemp }) {
  const [tempC, setTempC] = useState(true);

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
          <Searchbar className="icon" />
          <input
            className={styles.search}
            placeholder="Pickering, ON"
            type="text"
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

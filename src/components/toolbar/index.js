import React from "react";
import { Searchbar, Cancel, Settings } from "../Icons";
import styles from "./toolbar.module.scss";

export default function Toolbar() {
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
      </header>
      <div className={styles.options}>
        <div>Testing</div>
      </div>
    </>
  );
}

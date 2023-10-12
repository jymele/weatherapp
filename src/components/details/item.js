import React from "react";
import styles from "./details.module.scss";

export default function Item({ icon, title, value }) {
  return (
    <div className={styles.item}>
      <img src={icon} />
      <div>
        <h4>{title}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
}

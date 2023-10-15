import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./searchresult.module.scss";
import { motion, useAnimate, stagger } from "framer-motion";

export default function SearchResult({ locations, loading, getWeather }) {
  const navigate = useNavigate();

  return (
    <motion.div className={styles.results}>
      {locations.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            getWeather(item.name);
            navigate("/");
          }}
          className={styles.resultItem}
        >
          {item.name} - {item.region} - {item.country}
        </button>
      ))}
    </motion.div>
  );
}

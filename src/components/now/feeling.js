import React from "react";
import styles from "./now.module.scss";

export default function Feeling({ loading, weather, settings }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.feeling}>
        {settings.temp === "c" && (
          <>Feels like {Math.round(weather.current.feelslike_c)}&deg;C</>
        )}
        {settings.temp === "f" && (
          <>Feels like {Math.round(weather.current.feelslike_f)}&deg;F</>
        )}
      </div>
    </>
  );
}

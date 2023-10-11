import React from "react";
import "./hourly.scss";

export default function Hourly({ loading, weather, settings }) {
  function formatAMPM(info) {
    let date = new Date(info);
    var hours = date.getHours();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var strTime = hours + " " + ampm;
    return strTime;
  }

  return (
    <div className="hourly-section">
      <h3>Hourly</h3>
      {loading && (
        <div className="hourlist">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <div key={index} className="hour placeholder"></div>
          ))}
        </div>
      )}
      {!loading && (
        <div className="hourlist">
          {weather.forecast.forecastday[0].hour.map((item, index) => (
            <div key={index} className="hour placeholder">
              <div>{formatAMPM(item.time)}</div>
              <img
                width={64}
                height={64}
                src={item.condition.icon}
                alt={item.condition.text}
              />
              {settings.temp === "c" && (
                <div>{Math.round(item.temp_c)}&deg;C</div>
              )}
              {settings.temp === "f" && (
                <div>{Math.round(item.temp_f)}&deg;F</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

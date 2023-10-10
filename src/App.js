import { useEffect, useMemo, useState } from "react";
import "./App.scss";
import Hourly from "./components/hourly/Hourly";
import Now from "./components/now/index";
import Toolbar from "./components/toolbar";
import Weekly from "./components/weekly/Weekly";
import { weatherapi } from "./config";

function App() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState();
  const [settings, setSettings] = useState({
    temp: "c",
  });

  function getWeather() {
    setLoading(true);

    fetch(
      weatherapi.baseUrl +
        weatherapi.forecastPath +
        "?key=" +
        weatherapi.key +
        "&q=Pickering"
    )
      .then((data) => data.json())
      // .then((data) => console.log(data))
      .then((data) => setWeather(data))
      .then(() => setLoading(false));
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Toolbar />
      </header>
      <Now loading={loading} weather={weather} settings={settings} />
      <Hourly />
      <Weekly />
    </div>
  );
}

export default App;

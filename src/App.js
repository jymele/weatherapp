import { useEffect, useState } from "react";
import "./App.scss";
import Hourly from "./components/hourly/Hourly";
import Now from "./components/now/index";
import Toolbar from "./components/toolbar/index";
import Weekly from "./components/weekly/Weekly";
import { weatherapi } from "./config";
import Details from "./components/details";

function App() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState();
  const [settings, setSettings] = useState({
    temp: "c",
    distance: "km",
  });

  function setTemp(newTemp) {
    let newSetting = {
      temp: newTemp,
    };
    setSettings(newSetting);
  }

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
      .then((data) => setWeather(data))
      .then(() => setLoading(false));
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="App">
      <Toolbar settings={settings} setTemp={setTemp} />

      <Now loading={loading} weather={weather} settings={settings} />
      <Hourly loading={loading} weather={weather} settings={settings} />
      <Details loading={loading} weather={weather} settings={settings} />
    </div>
  );
}

export default App;

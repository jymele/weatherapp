import { useEffect, useState } from "react";
import "./App.scss";
import Hourly from "./components/hourly/Hourly";
import Now from "./components/now/index";
import Toolbar from "./components/toolbar/index";
// import Weekly from "./components/weekly/Weekly";
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

  function getWeather(location) {
    setLoading(true);

    // if (location === "" || location === undefined) {
    //   location = "Pickering";
    // }

    fetch(
      weatherapi.baseUrl +
        weatherapi.forecastPath +
        "?key=" +
        weatherapi.key +
        "&q=" +
        location + "&days=7"
    )
      .then((data) => data.json())
      .then((data) => setWeather(data))
      .then(() => setLoading(false));
  }

  useEffect(() => {
    getWeather("toronto");
  }, []);

  return (
    <div className="App">
      <Toolbar
        settings={settings}
        setTemp={setTemp}
        getWeather={getWeather}
        weather={weather}
      />

      <Now loading={loading} weather={weather} settings={settings} />
      <Hourly loading={loading} weather={weather} settings={settings} />
      <Details loading={loading} weather={weather} settings={settings} />
    </div>
  );
}

export default App;

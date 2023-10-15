import { useEffect, useState } from "react";
import "./App.scss";
import Toolbar from "./components/toolbar/index";
// import Weekly from "./components/weekly/Weekly";
import { weatherapi } from "./config";
import Dashboard from "./pages/dashboard";
import SearchResult from "./components/search/searchResult";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState();
  const [locations, setLocations] = useState([]);
  const [loadingLoc, setLoadingLoc] = useState(false);
  const [settings, setSettings] = useState({
    temp: "c",
    distance: "km",
  });
  const navigate = useNavigate();

  function setTemp(newTemp) {
    let newSetting = {
      temp: newTemp,
    };
    setSettings(newSetting);
  }

  function getLocations(locString) {
    setLoadingLoc(true);
    fetch(
      weatherapi.baseUrl +
        "/search.json" +
        "?key=" +
        weatherapi.key +
        "&q=" +
        locString
    )
      .then((data) => data.json())
      // .then((data) => console.log("locations", data))
      .then((data) => setLocations(data))
      .then(() => navigate("/search"))
      .then(setLoadingLoc(false));
  }

  function getWeather(location) {
    setLoading(true);

    fetch(
      weatherapi.baseUrl +
        weatherapi.forecastPath +
        "?key=" +
        weatherapi.key +
        "&q=" +
        location +
        "&days=7"
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
        getLocations={getLocations}
        weather={weather}
      />

      <Routes>
        {/* <Route path="/" element={<Dashboard loading={loading} weather={weather} settings={settings} />}>

    </Route> */}
        <Route
          index
          element={
            <Dashboard
              loading={loading}
              weather={weather}
              settings={settings}
            />
          }
        />
        <Route
          path="search"
          element={
            <SearchResult
              loading={loadingLoc}
              locations={locations}
              getWeather={getWeather}
            />
          }
        />
      </Routes>
      {/* <Dashboard loading={loading} weather={weather} settings={settings} /> */}
      {/* <SearchResult loading={loadingLoc} /> */}
    </div>
  );
}

export default App;

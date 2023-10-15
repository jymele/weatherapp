import React from "react";
import Hourly from "../components/hourly/Hourly";
import Now from "../components/now/index";
import Details from "../components/details";

export default function Dashboard({ loading, weather, settings }) {
  return (
    <>
      <Now loading={loading} weather={weather} settings={settings} />
      <Hourly loading={loading} weather={weather} settings={settings} />
      <Details loading={loading} weather={weather} settings={settings} />
    </>
  );
}

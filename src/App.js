import "./App.scss";
import Hourly from "./components/hourly/Hourly";
import Now from "./components/now";
import Toolbar from "./components/toolbar";
import Weekly from "./components/weekly/Weekly";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar />
      </header>
      <Now />
      <Hourly />
      <Weekly />
    </div>
  );
}

export default App;

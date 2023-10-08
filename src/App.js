import "./App.scss";
import Now from "./components/now";
import Toolbar from "./components/toolbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar />
      </header>
      <Now />
    </div>
  );
}

export default App;

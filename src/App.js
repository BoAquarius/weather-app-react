import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bozena's React weather app!</h1>
        <Weather />
      </header>
      <footer>
        This app has been designed and coded by{" "}
        <a href="/" target="_blank">
          Bo Aquarius
        </a>{" "}
        and it's{" "}
        <a
          href="https://github.com/BoAquarius/weather-app-react"
          target="_blank"
        >
          open-soured on GitHub
        </a>
      </footer>
    </div>
  );
}

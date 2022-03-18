import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This app has been designed and coded by Bo Aquarius and it's{" "}
          <a
            href="https://github.com/BoAquarius/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-soured on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

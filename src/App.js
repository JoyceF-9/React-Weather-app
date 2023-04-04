import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Joyce Feng and is{" "}
          <a
            href="https://github.com/JoyceF-9/React-Weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}

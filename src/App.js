import React from "react";
import logo from "./logo.png";
import track from "./track.mp3";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <audio controls>
          <source src={track} />
        </audio>
      </div>
    </div>
  );
}

export default App;

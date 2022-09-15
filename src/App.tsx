import React from "react";
import logo from "./logo.svg";
import "./css/App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;

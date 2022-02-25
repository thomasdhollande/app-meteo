import './App.css';
import "./assets/css/header.css";
import 'antd/dist/antd.css';
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
// import iconWeather from "./assets/icons/weather.svg";
// import iconSearch from "./assets/icons/search.svg";
// import iconFav from "./assets/icons/favorite.svg";
import Weather from './components/weather';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Weather /> */}
      <Outlet />
    </div>
  );
}

export default App;

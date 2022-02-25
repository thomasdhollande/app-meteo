import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import iconWeather from "./assets/icons/weather.svg";
import iconSearch from "./assets/icons/search.svg";
import iconFav from "./assets/icons/favorite.svg";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="weather">
                <img src={iconWeather} className="header-icons" />
              </Link>
            </li>
            <li>
              <Link to="search">
                <img src={iconSearch} className="header-icons" />
              </Link>
            </li>
            <li>
              <Link to="favorite">
                <img src={iconFav} className="header-icons" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default App;

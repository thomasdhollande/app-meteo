import '../App.css';
import 'antd/dist/antd.css';
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import iconWeather from "../assets/icons/weather.svg";
import iconSearch from "../assets/icons/search.svg";
import iconFav from "../assets/icons/favorite.svg";

function Header() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/" replace>
                <img src={iconWeather} className="header-icons" />
              </Link>
            </li>
            <li>
              <Link to="/search" replace>
                <img src={iconSearch} className="header-icons" />
              </Link>
            </li>
            <li>
              <Link to="/favorite" replace>
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

export default Header;

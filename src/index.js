import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Home from "./views/Home";
import Search from "./views/Search";
import store from "./store/store";
import Favorite from './views/Favorite';

// const navigate = useNavigate();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/weather" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

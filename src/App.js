import './App.css';
import "./assets/css/header.css";
import 'antd/dist/antd.css';
import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

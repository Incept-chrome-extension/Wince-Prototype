import "./Header.css";
import React, { Component } from "react";
import WeatherandLocation from "../WeatherandLocation/WeatherandLocation";

class Header extends Component {
  render() {
    return (
      <div className="head">
        <WeatherandLocation />
      </div>
    );
  }
}

export default Header;

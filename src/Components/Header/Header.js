import "./Header.css";
import React, { Component } from "react";
import WeatherandLocation from "../WeatherandLocation/WeatherandLocation";
import GoogleSearch from "../GoogleSearch /GoogleSearch";

class Header extends Component {
  render() {
    return (
      <div className="head">
        <GoogleSearch />
        <WeatherandLocation />
      </div>
    );
  }
}

export default Header;

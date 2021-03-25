/* eslint-disable default-case */
/* eslint-disable no-undef */
import "./WeatherandLocation.css";
import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

class WeatherandLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      temp: "",
      clouds: "",
    };
  }

  getWeather = (lat, lng) => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          lng +
          "&appid=42b24ff7a15bbbd20e83cba4e261bb4f"
      )
      .then((res) => {
        this.setState({ temp: (res.data.main.temp - 273).toPrecision(3) });
        this.setState({
          weather: (res.data.weather[0].main - 273).toPrecision(3),
        });
      });
  };

  codeLatLng = (lat, lng) => {
    axios
      .get(
        "http://api.positionstack.com/v1/reverse?access_key=1cf749045a8e75a2ef254b37c5934875&query=" +
          lat +
          "," +
          lng
      )
      .then((res) => {
        console.log(res);
        this.setState({ city: res.data.data[0].county });
      });
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.codeLatLng(pos.coords.latitude, pos.coords.longitude);
        this.getWeather(pos.coords.latitude, pos.coords.longitude);
      });
    }
  }

  render() {
    return (
      <div className="head">
        <h1 className="head_temp">{this.state.temp}°</h1>
        <div className="head_city">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="head_city_icon"
            size="1x"
          />
          <h1 className="head_city_text">{this.state.city}</h1>
        </div>
      </div>
    );
  }
}

export default WeatherandLocation;

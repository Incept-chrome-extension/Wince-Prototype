import "./TimeandDate.css";
import React, { Component } from "react";

class TimeandDate extends Component {
  constructor(props) {
    super(props);
    this.updateDate = this.updateDate.bind(this);

    this.state = {
      date: this.getTime(),
      greet: "",
    };
    this.interval = setInterval(this.updateDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    const hr = new Date().getHours();
    if (hr > 12 && hr < 16) {
      this.setState({ greet: "Afternoon" });
    } else if (hr > 16 && hr < 21) {
      this.setState({ greet: "Evening" });
    } else if (hr > 21 && hr < 4) {
      this.setState({ greet: "Night" });
    } else {
      this.setState({ greet: "Morning" });
    }
  }

  checkTime = (x) => {
    if (x < 10) {
      x = "0" + x;
    }
    return x;
  };
  getTime = () => {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    m = this.checkTime(m);
    return h + ":" + m;
  };

  updateDate() {
    if (new Date().getMinutes() > 9)
      this.setState({
        date: new Date().getHours() + ":" + new Date().getMinutes(),
      });
    else
      this.setState({
        date: new Date().getHours() + ":0" + new Date().getMinutes(),
      });
  }

  render() {
    return (
      <div className="time">
        <div className="time__text">{this.state.date}</div>
        <div className="time__wish">Good {this.state.greet}</div>
      </div>
    );
  }
}

export default TimeandDate;
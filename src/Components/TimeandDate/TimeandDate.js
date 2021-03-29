import "./TimeandDate.css";
import React, { Component } from "react";
import Switch from "react-switch";

class TimeandDate extends Component {
  constructor(props) {
    super(props);
    this.updateDate = this.updateDate.bind(this);

    this.state = {
      date: this.getTime(),
      greet: "",
      ampm: "",
    };
    this.interval = setInterval(this.updateDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    const hr = new Date().getHours();
    if (hr < 12) {
      this.setState({ greet: "Morning" });
    } else if (hr < 18) {
      this.setState({ greet: "Afternoon" });
    } else {
      this.setState({ greet: "Evening" });
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
    if (h > 12) {
      h %= 12;
    }
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    m = this.checkTime(m);
    return h + ":" + m;
  };

  updateDate() {
    if (new Date().getHours() <= 12) {
      if (new Date().getMinutes() > 9)
        this.setState({
          date: new Date().getHours() + ":" + new Date().getMinutes(),
        });
      else
        this.setState({
          date: new Date().getHours() + ":0" + new Date().getMinutes(),
        });

      this.setState({ ampm: "a.m." });
    } else {
      if (new Date().getMinutes() > 9)
        this.setState({
          date: (new Date().getHours() % 12) + ":" + new Date().getMinutes(),
        });
      else
        this.setState({
          date: (new Date().getHours() % 12) + ":0" + new Date().getMinutes(),
        });
      this.setState({ ampm: "p.m." });
    }
  }

  render() {
    return (
      <div className="time">
        <div className="time__text">
          {this.state.date}
          <span className="time__ampm">{this.state.ampm}</span>
        </div>

        <div className="time__wish">Good {this.state.greet}</div>
      </div>
    );
  }
}

export default TimeandDate;

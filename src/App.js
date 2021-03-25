import "./App.css";
import { createApi } from "unsplash-js";
import { Component } from "react";
import QuoteandAuthor from "./Components/QuoteandAuthor/QuoteandAuthor";

import TimeandDate from "./Components/TimeandDate/TimeandDate";
import Header from "./Components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import QuickLinks from "./Components/QuickLinks/QuickLinks";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: localStorage.getItem("bg"),
      day: "",
      quote: "",
    };
  }

  changeBg = () => {
    const unsplash = createApi({
      accessKey: "tsztW2OvoW1VwddrbuWGkFHgxwzwG7KyIHVRRz98Mks",
    });

    unsplash.photos
      .getRandom({
        query: "view",
        orientation: "landscape",
        count: 1,
      })
      .then((res) => {
        this.setState({ bg: res.response[0].urls.full });
        var d = new Date();
        this.setState({ day: d.getDay() });
        localStorage.setItem("bg", this.state.bg);

        localStorage.setItem("today", this.state.day);
        console.log(this.state);
      });
  };

  componentDidMount() {
    var td = new Date();

    if (localStorage.getItem("today") == td.getDay()) {
      console.log("if");

      this.setState({ bg: localStorage.getItem("bg") });
      this.setState({ day: td.getDay() });
    } else {
      this.changeBg();
    }
    console.log(this.state);
  }

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${this.state.bg})`,
        }}
      >
        <QuickLinks />
        <Header />
        <TimeandDate />

        <QuoteandAuthor />
        <div className="changebgicon" onClick={this.changeBg}>
          <FontAwesomeIcon icon={faSyncAlt} size="1x" />
        </div>
      </div>
    );
  }
}
export default App;

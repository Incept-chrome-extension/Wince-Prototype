/* eslint-disable default-case */
/* eslint-disable no-undef */
import "./QuoteandAuthor.css";
import React, { Component } from "react";
import axios from "axios";

class QuoteandAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      originator: "",
    };

    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote() {}

  componentDidMount() {
    var options = {
      method: "GET",
      url: "https://quotes15.p.rapidapi.com/quotes/random/",
      headers: {
        "x-rapidapi-key": "b4718d6521msh013d8c64e02d282p16041ajsn3d7ff55e4203",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        this.setState({ quote: '" ' + res.data.content + ' "' });
        this.setState({ originator: "- " + res.data.originator.name });

        localStorage.setItem("quote", res.content);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="quote">
        <p className="quote_line">{this.state.quote}</p>
        <p className="quote_originator">{this.state.originator}</p>
        <div></div>
      </div>
    );
  }
}

export default QuoteandAuthor;

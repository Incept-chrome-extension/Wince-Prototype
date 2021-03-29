import React, { Component } from "react";
import "./GoogleSearch.css";

class GoogleSearch extends Component {
  render() {
    return (
      <div className="gs">
        <form
          action="https://www.google.com/search"
          className="gs__form"
          method="get"
          name="searchform"
          target="_blank"
        >
          <input
            autocomplete="on"
            className="gs__input"
            name="q"
            placeholder="Search"
            required="required"
            type="text"
          />
          <i class="fab fa-google"></i>

          <button className="gs__button" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default GoogleSearch;

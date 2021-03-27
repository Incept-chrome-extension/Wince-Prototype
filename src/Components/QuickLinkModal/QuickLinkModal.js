import React, { Component } from "react";
import "./QuickLinkModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

class QuickLinkModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="quicklink">
        <div className="quicklink__icon">
          {this.props.favicon ? (
            <img
              className="quicklink__favicon"
              src={this.props.favicon}
              alt="f"
            />
          ) : (
            <FontAwesomeIcon icon={faGlobeAmericas} size="1x" />
          )}
        </div>
        <h5>
          <a href={this.props.url} rel="noreferrer" target="_blank">
            {this.props.title}
          </a>
        </h5>
      </div>
    );
  }
}

export default QuickLinkModal;

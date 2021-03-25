import React, { Component } from "react";
import "./QuickLinkModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";

class QuickLinkModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favicon: "",
    };
  }
  render() {
    return (
      <div className="quicklink">
        <div className="quicklink__icon">
          {this.props.favicon ? (
            <img src={this.props.favicon} alt="favicon" />
          ) : (
            <FontAwesomeIcon icon={faExternalLinkSquareAlt} size="1x" />
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

import React, { Component } from "react";
import "./QuickLinkCollapsedModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";

class QuickLinkCollapsedModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favicon: "",
    };
  }
  render() {
    return (
      <div className="quicklink__collapsed">
        <a href={this.props.url}>
          <div className="quicklink__icon__collapsed">
            {this.props.favicon ? (
              <img src={this.props.favicon} alt="favicon" />
            ) : (
              <FontAwesomeIcon icon={faExternalLinkSquareAlt} size="1x" />
            )}
          </div>
        </a>
      </div>
    );
  }
}

export default QuickLinkCollapsedModal;

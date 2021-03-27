import React, { Component } from "react";
import "./QuickLinkCollapsedModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

class QuickLinkCollapsedModal extends Component {
  render() {
    return (
      <div className="quicklink__collapsed">
        <a href={this.props.url}>
          <div className="quicklink__icon__collapsed">
            {this.props.favicon ? (
              <img
                className="quciklink__favicon__collapsed"
                src={this.props.favicon}
                alt=""
              />
            ) : (
              <FontAwesomeIcon icon={faGlobeAmericas} size="1x" />
            )}
          </div>
        </a>
      </div>
    );
  }
}

export default QuickLinkCollapsedModal;

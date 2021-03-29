import React, { Component } from "react";
import "./QuickLinkModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

class QuickLinkModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ficon: "",
    };
  }

  componentDidMount() {
    this.setState({ ficon: this.props.favicon });
  }
  render() {
    return (
      <div className="quicklink">
        <div className="quicklink__content">
          <div className="quicklink__icon">
            {this.state.ficon ? (
              <img
                className="quicklink__favicon"
                loading="eager"
                src={this.state.ficon}
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
        <div className="delete__icon" onClick={this.props.deleteHandler}>
          <FontAwesomeIcon icon={faTimesCircle} size="1x" />
        </div>
      </div>
    );
  }
}

export default QuickLinkModal;

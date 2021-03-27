import React, { Component } from "react";
import "./QuickLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import QuickLinkModal from "../QuickLinkModal/QuickLinkModal";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import QuickLinkCollapsedModal from "../QuickLinkCollapsedModel/QuickLinkCollapsedModal";
import axios from "axios";

class QuickLinks extends Component {
  constructor(props) {
    super(props);
    var v;
    if (JSON.parse(localStorage.getItem("quicklinks"))) {
      v = JSON.parse(localStorage.getItem("quicklinks"));
    } else {
      v = [];
    }
    this.state = {
      links: v,
      collapse: true,
      ql: "ql__collapsed",
      ql__head: "ql__head__collapsed",
      ql__addlink: "ql__addlink__collapsed",
    };
  }

  getFavicon = async (l) => {};
  toggleClasses = () => {
    this.state.collapse
      ? this.setState({
          collapse: false,
          ql: "ql__expanded",
          ql__head: "ql__head__expanded",
          ql__addlink: "ql__addlink__expanded",
        })
      : this.setState({
          collapse: true,
          ql: "ql__collapsed",
          ql__head: "ql__head__collapsed",
          ql__addlink: "ql__addlink__collapsed",
        });
    console.log(this.state);
  };

  componentDidMount() {
    // localStorage.removeItem("quicklinks");
    console.log(localStorage.getItem("quicklinks"));
  }

  addQL = async () => {
    var n = prompt("add name");
    if (n === null) {
      return;
    }
    var l = prompt("add link");
    if (l === null) {
      return;
    }
    if (/\S/.test(l) && /\S/.test(n)) {
      var fi = "";
      if (l.indexOf("http://") == 0 || l.indexOf("https://") == 0) {
        var pathArray = l.split("/");
        var host = pathArray[2];
      } else {
        var pathArray = l.split("/");
        var host = pathArray[0];
      }
      var obj = {};
      console.log(host);
      await axios
        .get("http://favicongrabber.com/api/grab/" + host)
        .then(async (res) => {
          console.log(res);
          fi = res.data.icons[0].src;
        });
      var obj = {
        name: n,
        link: l,
        favicon: fi,
      };
      this.setState((prev) => ({ links: [...prev.links, obj] }));
      var v = JSON.stringify(this.state.links);
      localStorage.setItem("quicklinks", v);
    }
  };

  render() {
    return (
      <div className={this.state.ql}>
        <div className={this.state.ql__head}>
          <div className={this.state.ql__addlink} onClick={this.addQL}>
            <p>Add Link</p>
          </div>
          <div className="ql__toggle__icon" onClick={this.toggleClasses}>
            {this.state.collapse ? (
              <FontAwesomeIcon
                icon={faBars}
                className="icon__toggle"
                size="1.5x"
                onclick
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleDoubleLeft}
                className="icon__toggle"
                size="1.5x"
                onclick
              />
            )}
          </div>
        </div>
        {this.state.collapse ? (
          <div>
            {this.state.links.map((item) => {
              return (
                <QuickLinkCollapsedModal
                  title={item.name}
                  url={item.link}
                  favicon={item.favicon}
                />
              );
            })}
          </div>
        ) : (
          <div className="ql__list">
            {this.state.links.map((item) => {
              return (
                <QuickLinkModal
                  title={item.name}
                  url={item.link}
                  favicon={item.favicon}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default QuickLinks;

import React, { Component } from "react";
import "./QuickLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import QuickLinkModal from "../QuickLinkModal/QuickLinkModal";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import QuickLinkCollapsedModal from "../QuickLinkCollapsedModel/QuickLinkCollapsedModal";
import axios from "axios";
import uniqid from "uniqid";

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
      qlti: "ql__toggle__icon__collapsed",
    };
  }

  toggleClasses = () => {
    this.state.collapse
      ? this.setState({
          collapse: false,
          ql: "ql__expanded",
          ql__head: "ql__head__expanded",
          ql__addlink: "ql__addlink__expanded",
          qlti: "ql__toggle__icon__expanded",
        })
      : this.setState({
          collapse: true,
          ql: "ql__collapsed",
          ql__head: "ql__head__collapsed",
          ql__addlink: "ql__addlink__collapsed",
          qlti: "ql__toggle__icon__collapsed",
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
        l = "http://" + l;
      }
      var newkey = uniqid();
      await axios
        .get("http://favicongrabber.com/api/grab/" + host)
        .then(async (res) => {
          if (res.status == 200) {
            fi = res.data.icons[0].src;
          } else fi = "";
        })
        .catch(() => {
          fi = "";
        });
      var obj = {
        name: n,
        link: l,
        favicon: fi,
        key: newkey,
      };
      this.setState((prev) => ({ links: [...prev.links, obj] }));
      var v = JSON.stringify(this.state.links);
      localStorage.setItem("quicklinks", v);
    }
  };

  deleteLink = async (e) => {
    var array = [...this.state.links];
    for (let i = 0; i < array.length; i++) {
      if (e == array[i].key) {
        array.splice(i, 1);
      }
    }
    await this.setState({ links: array });
    var v = JSON.stringify(this.state.links);
    localStorage.setItem("quicklinks", v);
  };

  render() {
    return (
      <div className={this.state.ql}>
        <div className={this.state.qlti} onClick={this.toggleClasses}>
          {this.state.collapse ? (
            <FontAwesomeIcon icon={faBars} className="icon__toggle" size="1x" />
          ) : (
            <FontAwesomeIcon
              icon={faTimes}
              className="icon__toggle"
              size="1x"
            />
          )}
        </div>
        <div className={this.state.ql__head}>
          <div className={this.state.ql__addlink} onClick={this.addQL}>
            <p>Add Link</p>
          </div>
        </div>
        {this.state.collapse ? (
          <div className="ql__list__collapsed">
            {this.state.links.map((item) => {
              return (
                <QuickLinkCollapsedModal
                  key={item.key}
                  title={item.name}
                  url={item.link}
                  favicon={item.favicon}
                />
              );
            })}
          </div>
        ) : (
          <div className="ql__list__expanded">
            {this.state.links.map((item) => {
              return (
                <QuickLinkModal
                  key={item.key}
                  title={item.name}
                  url={item.link}
                  favicon={item.favicon}
                  deleteHandler={() => this.deleteLink(item.key)}
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

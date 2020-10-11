import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "_blank",
    };
  }

  render() {
    return (
      <div className="dp-contact">
        <ul className="dp-contacts">
          <li>
            <a href="https://github.com/phixion" target={this.state.target}>
              <FontAwesomeIcon icon={["fab", "github-square"]} />
            </a>
          </li>
          <li>
            <a href="https://keybase.io/phixion_" target={this.state.target}>
              <FontAwesomeIcon icon={["fab", "keybase"]} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ridelore" target={this.state.target}>
              <FontAwesomeIcon icon={["fab", "twitter-square"]} />
            </a>
          </li>
          <li>
            <a href="https://wa.me/491726955451" target={this.state.target}>
              <FontAwesomeIcon icon={["fab", "whatsapp-square"]} />
            </a>
          </li>
          <li>
            <a href="https://news.ycombinator.com/user?id=phixion" target={this.state.target}>
              <FontAwesomeIcon icon={["fab", "y-combinator"]} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

import React, { Component } from "react";
import Typing from "react-typing-animation";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "_blank",
    };
  }

  render() {
    return (
      <div>
        <Typing
          speed={20}
          cursorClassName="dp-cursor"
          className="dp-introduction"
        >
          <h3>
            Name: <strong>Martin Spitz</strong>, <br />
            Age: <strong>36</strong> Years old,
            <Typing.Delay ms={750} />
            <Typing.Backspace count={4} />
            young,
          </h3>
          <Typing.Delay ms={750} />
          <h1>sysop.</h1>
          <br />
          <h1>10 years of experience</h1>
          <Typing.Delay ms={750} />
          <p>
            from <strong>Munich</strong> / <strong>Germany</strong>
          </p>
          <p>
           mail: m<strong>@</strong>rtin.ms
          </p>
           <p>
           <strong>fon: </strong>+49 172 6955 451
          </p>
           <p>
           <strong>pgp: </strong>85D5 04E0 7899 676E
          </p>
        </Typing>
      </div>
    );
  }
}

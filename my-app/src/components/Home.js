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
          <h1>sysop with over 10 years of experience</h1>
          <Typing.Delay ms={750} />
          <p>
            from <strong>Munich / Germany </strong>
          </p>
          <p>
           <strong>mail: m@rtin.ms • fon: +49 172 6955 451</strong>
          </p>
        </Typing>
      </div>
    );
  }
}

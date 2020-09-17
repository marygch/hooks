import React, { Component } from "react";
import UssingClass from "../../Components/Books/UsingClass";
import UsingHooks from "../../Components/Books/UsingHooks";


class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <span>
          <b> Ussing hooks:</b>
          <UsingHooks />
        </span>

        <span>
        <b> Ussing class:</b> 
          <UssingClass />
        </span>
      </div>
    );
  }
}

export default Books;

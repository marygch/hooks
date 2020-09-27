import React, { Component } from "react";
import UsingClass from "../../Components/Hooks/UsingClass";
import UsingHooks from "../../Components/Hooks/UsingHooks";

class HooksView extends Component {
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
          <UsingClass />
        </span>
      </div>
    );
  }
}

export default HooksView;

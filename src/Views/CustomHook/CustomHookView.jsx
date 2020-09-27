import React, { Component } from "react";
import CustomHook from "../../Components/CustomHook";

class CustomHookView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <span>
          <b> My favorite books using custom hooks:</b>
        </span>
        <CustomHook />
      </div>
    );
  }
}

export default CustomHookView;

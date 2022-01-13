import React, { Component } from "react";

export default class ControlledComponent extends Component {
  state = {
    value: "",
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <input value={value} onChange={this.change} />
      </div>
    );
  }

  change = (e) => {
    this.setState({ value: e.target.value });
  };
}

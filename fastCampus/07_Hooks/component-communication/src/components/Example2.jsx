import React, { Component } from "react";
import AlphaContext from "../contexts/AlphaContext";

export default class Example2 extends Component {
  static contextType = AlphaContext;
  render() {
    const value = this.context;
    return (
      <ul>
        {value.map((data) => (
          <li>{data.name}</li>
        ))}
      </ul>
    );
  }
}

// Example2.contextType = AlphaContext;

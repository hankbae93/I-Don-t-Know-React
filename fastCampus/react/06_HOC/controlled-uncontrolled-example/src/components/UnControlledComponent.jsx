import React, { Component } from "react";

export default class UnControlledComponent extends Component {
  inputRef = React.createRef();

  render() {
    return (
      <div>
        <input id='my-input' ref={this.inputRef} />
        <button onClick={this.click} />
      </div>
    );
  }

  click = (e) => {
    console.log(this.inputRef.current);
  };
}

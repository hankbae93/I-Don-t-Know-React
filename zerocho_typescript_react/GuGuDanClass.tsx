import * as React from "react";
import { Component } from "react";

interface IState {
  first: number;
  second: number;
  value: string;
  result: string;
}

export default class GuGuDanClass extends Component<{}, IState> {
  state = {
    first: this.getRandom(),
    second: this.getRandom(),
    value: "",
    result: "",
  };

  inputEl: HTMLInputElement | null = null;
  onRefInput = (c: HTMLInputElement) => {
    this.inputEl = c;
  };

  getRandom(): number {
    return Math.ceil(Math.random() * 9);
  }

  onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { value, first, second, result } = this.state;
    const input = this.inputEl;
    if (parseInt(value) === first * second) {
      this.setState((prev) => ({
        first: this.getRandom(),
        second: this.getRandom(),
        value: "",
        result: "정답",
      }));

      input?.focus();
    } else {
      this.setState((prev) => ({
        ...prev,
        value: "",
        result: "땡",
      }));

      input?.focus();
    }
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prev) => ({
      ...prev,
      value: e.target.value,
    }));
  };

  render() {
    const { value, first, second, result } = this.state;
    return (
      <>
        <div>
          {first} 곱하기 {second}는?
        </div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRefInput}
            type='number'
            value={value}
            onChange={this.onChange}
          />
        </form>
        <p>
          <strong>{result}</strong>
        </p>
      </>
    );
  }
}

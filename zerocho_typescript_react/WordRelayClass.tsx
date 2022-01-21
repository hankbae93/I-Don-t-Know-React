import * as React from "react";
import { Component } from "react";

interface IState {
  word: string;
  value: string;
  result: string;
}

export default class WordRelayClass extends Component<{}, IState> {
  state = {
    word: "기린",
    value: "",
    result: "",
  };

  inputEl: HTMLInputElement | null = null;
  onRefInput = (c: HTMLInputElement) => {
    this.inputEl = c;
  };

  onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = this.inputEl;
    const { word, value } = this.state;
    if (word[word.length - 1] === value[0]) {
      this.setState((prev) => ({
        ...prev,
        word: prev.value,
        value: "",
        result: "딩동댕",
      }));

      input?.focus();
    } else {
      this.setState((prev) => ({
        ...prev,
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
    const { word, value, result } = this.state;
    return (
      <>
        <div>{word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} value={value} onChange={this.onChange} />
          <button>입력!</button>
        </form>
        <div>{result}</div>
      </>
    );
  }
}

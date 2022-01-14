import React from "react";
import AlphaContext from "../contexts/AlphaContext";

const Example1 = () => {
  return (
    //   엘레멘트가 여러개가 안됨;;
    <AlphaContext.Consumer>
      {(value) => (
        <ul>
          {value.map((data) => (
            <li>{data.name}</li>
          ))}
        </ul>
      )}
    </AlphaContext.Consumer>
  );
};

export default Example1;

import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "PLUS": {
      return {
        count: state.count + 1,
      };
    }
    default:
      return state;
  }

  //   return newState;
};

const Example2 = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleClick = () => {
    dispatch({
      type: "PLUS",
    });
  };
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
};

export default Example2;

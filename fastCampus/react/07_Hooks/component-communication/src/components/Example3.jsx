import React, { useContext } from "react";
import AlphaContext from "../contexts/AlphaContext";

const Example3 = () => {
  const values = useContext(AlphaContext);
  return (
    <>
      <ul>
        {values.map((data) => (
          <li>{data.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Example3;

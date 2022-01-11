import React, { useCallback, useState, useEffect } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value]
  );

  return [value, onChange];
};

export default useInput;

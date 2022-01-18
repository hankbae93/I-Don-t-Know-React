import { useCallback, useState } from "react";

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue ?? "");

  const onChange = useCallback((e) => {
    const changedValue = e.target.value;
    setValue(changedValue);
  }, []);

  return [value, onChange, setValue];
};

export default useInput;

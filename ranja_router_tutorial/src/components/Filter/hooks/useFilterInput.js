import { useEffect, useState } from "react";

const useFilterInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue ?? "");
  const onChange = (e) => {
    console.log(e);
    const changedValue = e.target.value;
    setValue(changedValue);
  };

  return [value, onChange, setValue];
};

export default useFilterInput;

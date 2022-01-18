import { useEffect, useState, useCallback } from "react";

const useCheckbox = (data) => {
  const [checks, setChecks] = useState(
    Array(data.length)
      .fill()
      .map(() => false)
  );
  const [checkedItem, setCheckedItem] = useState([]);

  const initChecks = (data) => {
    setChecks(
      Array(data.length)
        .fill()
        .map(() => false)
    );
  };
  const handleCheck = useCallback(
    (index) => {
      setChecks((prev) =>
        prev.map((v, i) => {
          return i === index ? !v : v;
        })
      );
    },
    [checks]
  );

  useEffect(() => {
    const newArr = [];
    checks.forEach((check, i) => {
      if (check) newArr.push(data[i]);
    });
    setCheckedItem(newArr);
  }, [checks]);

  return [checks, handleCheck, checkedItem, initChecks];
};

export default useCheckbox;

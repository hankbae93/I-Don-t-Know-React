import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

const useQueryInput = (defaultValue, name) => {
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState(defaultValue ?? "");

  useEffect(() => {
    const query = queryString.parse(location.search);
    setValue((prev) => query[name] || prev);
  }, [location, name]);

  const setURL = (name, value) => {
    const query = queryString.parse(location.search);
    console.log(query, "현재 주소");
    let url = `/search?`;
    if (!query[name]) {
      for (const key in query) {
        url += `${key}=${query[key]}&`;
      }
      url += `${name}=${value}`;
    } else {
      for (const key in query) {
        url += `${key}=${name === key ? value : query[key]}&`;
      }
    }

    history.push(url);
  };

  const onChange = (e) => {
    const name = e.target.name;
    const changedValue = e.target.value;
    setValue(changedValue);
    setURL(name, changedValue);
  };

  return [value, onChange, setValue];
};

export default useQueryInput;

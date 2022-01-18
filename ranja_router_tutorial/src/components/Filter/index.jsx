import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useInput from "../../hooks/useInput";
import useCheckbox from "../../hooks/useCheckbox";
import { getQuery, getAuthorList } from "./utils";
import queryString from "query-string";

import { Container } from "./Filter.elements";
import TextInput from "./TextInput";
import RangeInput from "./RangeInput";
import DateInput from "./DateInput";
import CheckBoxInputs from "./CheckBoxInputs";

const Filter = ({ data }) => {
  const history = useHistory();
  const location = useLocation();
  const [query, handleQuery, setQuery] = useInput("");
  const [price, handlePrice, setPrice] = useInput(0);
  const [date, handleDate, setDate] = useInput("");
  const [authors, handleAuthors, checkedAuthors, setAuthors] =
    useCheckbox(data);

  useEffect(() => {
    const query = queryString.parse(location.search);
    if (query.query) {
      setQuery(query.query);
    }
    if (query.price) {
      setPrice(query.price);
    }
    if (query.date) {
      setDate(query.date);
    }
  }, []);

  useEffect(() => {
    const query = queryString.parse(location.search);
    if (!query.query) {
      setQuery("");
      setPrice(0);
      setDate("");
      setAuthors([]);
    }
  }, [location]);

  useEffect(() => {
    setAuthors(getAuthorList(data));
  }, [data]);

  useEffect(() => {
    if (query) {
      // console.log(checkedAuthors);
      const newQuery = getQuery({
        query,
        price,
        date,
        // ...(checkedAuthors.length > 0 && { authors: checkedAuthors }),
      });
      history.push(newQuery);
    }
  }, [query, price, date, checkedAuthors.length > 0]);

  useEffect(() => {
    console.log(getAuthorList(checkedAuthors));
  }, [checkedAuthors]);

  return (
    <Container>
      <TextInput value={query} onChange={handleQuery} />
      <RangeInput value={price} onChange={handlePrice} />
      <DateInput value={date} onChange={handleDate} />
      <CheckBoxInputs
        list={getAuthorList(data)}
        checks={authors}
        handleClick={handleAuthors}
      />
    </Container>
  );
};

export default Filter;

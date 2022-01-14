import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

import { Container } from "./Filter.elements";
import FilterInput from "./FilterInput";

const Filter = ({ data }) => {
  const history = useHistory();
  const location = useLocation();

  const [filterData, setFilterData] = useState([
    {
      type: "TEXT",
      inputProps: {
        title: "검색어",
        placeholder: "검색어를 입력해주세요",
        id: "query",
        name: "query",
        required: true,
      },
    },
    {
      type: "RANGE",
      inputProps: {
        title: "판매가",
        id: "price",
        name: "price",
        min: 0,
        max: 100000,
        step: 100,
      },
    },
  ]);

  return (
    <Container>
      {filterData.map((data, i) => {
        return <FilterInput type={data.type} inputProps={data.inputProps} />;
      })}
    </Container>
  );
};

export default Filter;

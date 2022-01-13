import React, { useEffect, useLayoutEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

// 가격, 발간일,
const Filter = ({ setList }) => {
  // const history = useHistory();
  // const location = useLocation();
  // const [price, onChange, setPrice] = useInput(0);

  // useLayoutEffect(() => {
  //   const query = queryString.parse(location.search);
  //   if (query.price) {
  //     const queryPrice = parseInt(query.price);
  //     setPrice(queryPrice);
  //     setList((prev) => {
  //       console.log(
  //         prev.filter((data) => queryPrice >= data.sale_price),
  //         "모냐?"
  //       );
  //       return prev.filter((data) => queryPrice >= data.sale_price);
  //     });
  //   }
  // }, [location]);

  // useEffect(() => {
  //   const query = queryString.parse(location.search);
  //   if (price > 0) {
  //     let str = "?";
  //     for (const key in query) {
  //       if (key === "price") {
  //         str += `${key}=${price}&`;
  //       } else {
  //         str += `${key}=${query[key]}&`;
  //       }
  //     }
  //     if (!query.price) {
  //       str += `price=${price}&`;
  //     }
  //     setList((prev) => {
  //       console.log(
  //         price,
  //         prev.filter((data) => price >= data.sale_price)
  //       );
  //       return prev.filter((data) => price >= data.sale_price);
  //     });
  //     history.push(str);
  //   }
  // }, [price]);

  return (
    <>
      {/* <label htmlFor='price'>
        <h3>판매가</h3>
        <input
          id='price'
          type='range'
          min='0'
          max='100000'
          step={1000}
          value={price}
          onChange={onChange}
        />
        <span>{price}</span>
      </label> */}
    </>
  );
};

export default Filter;

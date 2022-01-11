import React from "react";
import { useParams } from "react-router-dom";
import queryString from "query-string";
const About = (props) => {
  const params = useParams();
  const searchParams = props.location.search;

  /*
  const obj = new URLSearchParams(searchParams);
  console.log(obj.get("name"));
   */

  const query = queryString.parse(searchParams);
  console.log(query);

  return (
    <div>
      <h2>About 페이지</h2>
      {query.name && <p>name은 {query.name}입니다.</p>}
    </div>
  );
};

export default About;

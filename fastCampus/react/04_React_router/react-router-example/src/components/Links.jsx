import React from "react";
import { Link } from "react-router-dom";

const PathData = [
  {
    pathname: "",
    content: "Home",
  },
  {
    pathname: "about",
    content: "About",
  },
  {
    pathname: "notFound",
    content: "Not Found",
  },
];

const Links = () => {
  return (
    <ul>
      {PathData.map((data, i) => {
        return <Link to={"/" + data.pathname}>{data.content}</Link>;
      })}
    </ul>
  );
};

export default Links;

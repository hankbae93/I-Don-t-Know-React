import React from "react";
import { NavLink } from "react-router-dom";

const LinkData = [
  {
    pathname: "",
    content: "Home",
    style: { color: "green" },
  },
  {
    pathname: "about",
    content: "About",
    style: { color: "red" },
  },
  {
    pathname: "about?name=ran",
    content: "About",
    style: { color: "red" },
  },
  {
    pathname: "notFound",
    content: "Not Found",
    style: { color: "blue" },
  },
];
const NavLinks = () => {
  return (
    <ul>
      {LinkData.map((data, i) => {
        return (
          <NavLink
            exact
            to={"/" + data.pathname}
            activeStyle={data.style}
            isActive={(match, location) => {
              const isMatch = location.pathname.includes(data.pathname);
              console.log(isMatch, "isMatch");
              return isMatch && location.search.includes("?");
            }}
          >
            {data.content}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default NavLinks;

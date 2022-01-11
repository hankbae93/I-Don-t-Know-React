import { NavLink } from "react-router-dom";

import { Wrapper, CustomLinkStyle } from "./NavLinks.elements";

const NavLinks = () => {
  const linkData = [
    {
      pathname: "/NotFound",
      content: "개발 중",
    },
    {
      pathname: "/",
      content: "Home",
    },
    {
      pathname: "/search",
      content: "Book Search",
    },
  ];

  return (
    <Wrapper>
      {linkData.map((data, i) => {
        return (
          <NavLink
            to={data.pathname}
            style={CustomLinkStyle}
            activeStyle={{
              color: "#D9534F",
            }}
            isActive={(match, location) => {
              const isMatch = location.pathname.includes(data.pathname);
              const isHome = isMatch
                ? data.pathname === location.pathname
                : true;
              return isMatch && isHome;
            }}
          >
            {data.content}
          </NavLink>
        );
      })}
    </Wrapper>
  );
};

export default NavLinks;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import menuData from "./menuData";
import NavDropdown from "./NavDropdown";

const MenuWrapper = styled("ul")`
  list-style: none;

  > li {
    display: inline-block;
    cursor: pointer;
    border: 1px solid #fff;

    ul {
      background-color: #ccc;
    }
  }
`;

function Menu() {
  return (
    <MenuWrapper>
      {menuData.map(topLevelItem => {
        return (
          <li key={topLevelItem.name}>
            {typeof topLevelItem.menu !== "object" ? (
              <Link to={topLevelItem.url}>{topLevelItem.name}</Link>
            ) : (
              <NavDropdown
                menu={topLevelItem.menu}
                menuName={topLevelItem.menuName}
              />
            )}
          </li>
        );
      })}
    </MenuWrapper>
  );
}

export default Menu;

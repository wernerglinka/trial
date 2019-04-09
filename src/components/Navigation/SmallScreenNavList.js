import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SmallScreenNavList({ menu: menuData, menuName, toggleOpen }) {
  return (
    <>
      <NavItem>
        <NavItemHeader>{menuName}</NavItemHeader>
        <NavList className="subMenu">
          {menuData.map(item => (
            <li key={item.name}>
              <Link to={item.url} onClick={() => toggleOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </NavList>
      </NavItem>
    </>
  );
}

SmallScreenNavList.propTypes = {
  menu: PropTypes.array.isRequired, //eslint-disable-line
  menuName: PropTypes.string.isRequired,
  toggleOpen: PropTypes.func.isRequired
};

const NavItem = styled.div`
  position: relative;
`;

function NavItemHeader(props) {
  return <span {...props} />;
}

const NavList = styled.ul`
  list-style: none;
  margin: 0;

  a {
    display: block;
    text-decoration: none;
  }
`;

export default SmallScreenNavList;

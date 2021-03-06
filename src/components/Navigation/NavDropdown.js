import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function NavDropdown({ menu: menuData, menuName }) {
  const [isOpen, setOpen] = useState(false);

  const navItemRef = useRef();
  const navListContainerRef = useRef();
  const navListRef = useRef();

  // clicking outside the nav item will close it
  const handleClick = e => {
    if (!navItemRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen && navListContainerRef.current.clientHeight === 0) {
      navListContainerRef.current.style.height = `${
        navListRef.current.clientHeight
      }px`;
    }
    if (!isOpen && navListContainerRef.current.clientHeight > 0) {
      navListContainerRef.current.style.height = 0;
    }

    // add click handler to document so we can close dropdown when clicked outside
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  return (
    <>
      <NavItem ref={navItemRef}>
        <NavItemHeader onClick={() => setOpen(!isOpen)}>
          {menuName}
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </NavItemHeader>
        <NavListContainer
          className={isOpen ? "isOpen" : null}
          ref={navListContainerRef}
        >
          <NavList ref={navListRef} className="subMenu">
            {menuData.map(item => (
              <li key={item.name}>
                <Link to={item.url} onClick={() => setOpen(!isOpen)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </NavList>
        </NavListContainer>
      </NavItem>
    </>
  );
}

NavDropdown.propTypes = {
  menu: PropTypes.array.isRequired, //eslint-disable-line
  menuName: PropTypes.string.isRequired
};

const NavItem = styled.div`
  position: relative;
`;

function NavItemHeader(props) {
  return <span {...props} />;
}

const NavListContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  transition: height 0.5s ease;
  height: 0;
  width: 200px; /* set this to accommodate longest link text */
  overflow: hidden;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;

  a {
    display: block;
    text-decoration: none;
  }
`;

export default NavDropdown;

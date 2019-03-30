import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import menuItems from "./navData";

function NavDropdown() {
  const [isOpen, setOpen] = useState(false);
  const [isHover, setHover] = useState(false);

  const navItemRef = useRef();
  const navListContainerRef = useRef();
  const navListRef = useRef();

  // clicking outside the nav item will close it
  const handleClick = e => {
    if (!navItemRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  // desired behavior:
  // show dropdown on hover and permanently when clicked
  // when clicked and the dropdown is shown, the dropdown will be hidden
  // until another hover or click
  useEffect(() => {
    if ((isOpen || isHover) && navListContainerRef.current.clientHeight === 0) {
      navListContainerRef.current.style.height = `${
        navListRef.current.clientHeight
      }px`;
    }
    if (!isOpen && navListContainerRef.current.clientHeight > 0) {
      navListContainerRef.current.style.height = 0;
    }

    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen, isHover]);

  const updateOpen = () => setOpen(!isOpen);
  const updateHover = () => setHover(!isHover);

  return (
    <>
      <NavItem
        ref={navItemRef}
        onMouseEnter={updateHover}
        onMouseLeave={updateHover}
      >
        <NavItemHeader onClick={updateOpen}>Nav Item Header</NavItemHeader>
        <NavListContainer
          className={isOpen ? "isOpen" : null}
          ref={navListContainerRef}
        >
          <NavList ref={navListRef}>
            {menuItems.map(item => (
              <li key={item.name}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </NavList>
        </NavListContainer>
      </NavItem>
    </>
  );
}

const TestContainer = styled("div")`
  padding: 50px;
`;

const NavItem = styled("div")`
  position: relative;
  display: inline-block;
  background-color: #f5f5f5;
`;

const NavItemHeader = styled("div")`
  padding: 10px 20px;
  background-color: #f0f0f0;
`;

const NavListContainer = styled("div")`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  transition: height 0.5s ease;
  height: 0;
  width: 300px; /* set this to accommodate longest link text */
  overflow: hidden;
`;

const NavList = styled("ul")`
  list-style: none;
  margin: 0;
  padding: 10px 0;
  background-color: #f5f5f5;

  a {
    display: block;
    text-decoration: none;
    padding: 5px 20px;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

export default NavDropdown;

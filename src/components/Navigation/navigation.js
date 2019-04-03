import React from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

import Brand from "./MainLogo/Brand";
import Menu from "./Menu";
import Hamburger from "./Hamburger";

import theme from "../../theme";

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.headerBgColor};

  a {
    color: ${props => props.theme.fontColor};
  }
  .menu {
    list-style: none;
    height: ${props => props.theme.headerHeight};

    @media (max-width: ${props => props.theme.activateHamburger}) {
      display: none;
    }
  }
  .menuItem {
    display: inline-block;
    cursor: pointer;
    border: 1px solid #fff;

    > a,
    > div > span {
      display: block;
      padding: 0 20px;
      line-height: ${props => props.theme.headerHeight};
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 700;
      color: ${props => props.theme.fontColor};

      svg {
        display: inline-block;
        vertical-align: middle;
        margin: 0 0 0 5px;
      }
    }

    > div {
      line-height: ${props => props.theme.headerHeight};
    }
  }
  .subMenu {
    background-color: ${props => props.theme.headerBgColor};
    line-height: 1.5;

    li {
      height: auto;
    }

    a {
      display: block;
      padding: 10px 20px;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
`;

function Navigation() {
  return (
    <ThemeProvider theme={theme}>
      <NavWrapper>
        <Brand width={200} />
        <Menu />
        <Hamburger />
      </NavWrapper>
    </ThemeProvider>
  );
}

export default Navigation;

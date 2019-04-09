import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import useWindowWidth from "./useWindowWidth";

import Brand from "./MainLogo/Brand";
import Menu from "./Menu";
import Hamburger from "./Hamburger";

import theme from "../../theme";

// the navbar with all sub components is styled here in one place
const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: ${props => props.theme.headerHeight};
  padding: 0 30px;
  background-color: ${props => props.theme.headerBgColor};

  .mainLogo {
    position: absolute;
    top: 5px;
    left: 30px;
  }

  a {
    color: ${props => props.theme.fontColor};
  }
  .largeScreen {
    .menu {
      position: absolute;
      top: 0;
      right: 30px;
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
  }

  .hamburger {
    position: absolute;
    top: 22px;
    right: 30px;
  }

  .smallScreen .menu {
    display: none;
  }

  &.navIsOpen {
    .smallScreen {
      &.menuWrapper {
        position: fixed;
        top: ${props => props.theme.headerHeight};
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        background: rgba(255, 255, 255, 0.95);
        overflow: scroll;
        opacity: 1;
        animation: fade 0.5s linear;
      }

      .menu {
        position: static;
        height: auto;
        display: block;
        width: 200px;
        margin: 0 auto;
      }

      .menuItem {
        display: block;

        a {
          display: block;
          padding: 10px;
          font-weight: 700;
        }

        > a,
        > div > span {
          display: block;
          padding: 20px 0;
          line-height: 1.5;
          text-decoration: none;
          text-transform: uppercase;
          font-weight: 700;
          color: ${props => props.theme.fontColor};
        }

        > div > span {
          color: #999;
        }
      }
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

function Navigation() {
  const SMALL_SCREEN_WIDTH = 900;
  // state of small screen menu
  const [open, toggleOpen] = useState(false);
  const isSmallScreen = useWindowWidth(SMALL_SCREEN_WIDTH);

  useEffect(() => {
    // this is mostly for testing purposes. Open menu on small screen,
    // then make screen wider. That will "reset" the open menu for small screen
    if (!isSmallScreen) {
      toggleOpen(false);
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <NavWrapper className={open && isSmallScreen ? "navIsOpen" : null}>
        <Brand width={200} />
        <Menu SmallScreenNavList={isSmallScreen} toggleOpen={toggleOpen} />
        {isSmallScreen && <Hamburger open={open} toggleOpen={toggleOpen} />}
      </NavWrapper>
    </ThemeProvider>
  );
}

export default Navigation;

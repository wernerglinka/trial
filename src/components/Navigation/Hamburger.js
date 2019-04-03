import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;

  position: relative;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background: none;
  border: none;
  margin-top: 22px;
  display: none;

  @media (max-width: ${props => props.theme.activateHamburger}) {
    display: block;
  }

  &:focus {
    outline: 0;
  }

  span,
  span:before,
  span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: ${props => props.theme.fontColor};
    position: absolute;
    top: 15px;
    display: block;
    content: "";
    transition: all 500ms ease-in-out;
  }
  span:before {
    top: -10px;
  }
  span:after {
    top: auto;
    bottom: -10px;
  }
  &:hover {
    span,
    span:before,
    span:after {
      background: ${props => props.theme.hoverColor};
    }
  }
  &.open {
    span {
      background-color: transparent;
    }
    span:before,
    span:after {
      top: 0;
    }
    span:before {
      transform: rotate(45deg);
    }
    span:after {
      transform: rotate(-45deg);
    }
    &:hover {
      span:before,
      span:after {
        ${props => props.theme.hoverColor};
      }
    }
  }
`;

function Hamburger() {
  const [open, toggleOpen] = useState(false);

  const toggleButton = () => toggleOpen(!open);

  return (
    <Button
      type="button"
      onClick={toggleButton}
      className={`hamburger ${open ? "open" : null}`}
      aria-pressed="false"
    >
      <span />
      <span />
      <span />
    </Button>
  );
}

export default Hamburger;

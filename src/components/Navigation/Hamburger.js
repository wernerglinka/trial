import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Button = styled.button`
  background: none;
  border: none;

  position: relative;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background: none;
  border: none;

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

function Hamburger({ open, toggleOpen }) {
  return (
    <Button
      type="button"
      onClick={() => toggleOpen(!open)}
      className={`hamburger ${open ? "open" : ""}`}
      aria-pressed="false"
    >
      <span />
      <span />
      <span />
    </Button>
  );
}

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired
};

export default Hamburger;

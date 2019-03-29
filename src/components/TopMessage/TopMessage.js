import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function TopMessage({ message }) {
  return <Wrapper>{message}</Wrapper>;
}

TopMessage.propTypes = {
  message: PropTypes.element
};

TopMessage.defaultProps = {
  message: (
    <p>
      This is the <span>Default Message</span>
    </p>
  )
};

const Wrapper = styled.div`
  padding: 30px;
  text-align: center;
  background-color: #ccc;

  p {
    margin: 0;
  }
`;

export default TopMessage;

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import MainLogo from "./MainLogo/MainLogo";

function Navigation() {
  return (
    <LogoWrapper width="200">
      <MainLogo />
    </LogoWrapper>
  );
}

const LogoWrapper = styled("div")`
  width: ${props => props.width}px;

  .bracket {
    fill: red;
  }

  .logoText {
    fill: #333;
  }

  .subText {
    fill: #999;
  }
`;

export default Navigation;

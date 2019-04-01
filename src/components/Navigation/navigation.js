import React from "react";
import styled from "styled-components";

import Brand from "./MainLogo/Brand";
import Menu from "./Menu";

const NavWrapper = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;

  background-color: #f8f8f8;
`;

function Navigation() {
  return (
    <NavWrapper>
      <Brand width={200} />
      <Menu />
    </NavWrapper>
  );
}

export default Navigation;

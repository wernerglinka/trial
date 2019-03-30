import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import MainLogo from "./MainLogo/MainLogo";

import menuItems from "./navData";

const mainLogoColors = {
  bracket: "red",
  logoText: "#000",
  subText: "#999",
  height: "150px",
  width: "300px"
};

function NavBar() {
  return (
    <div>
      <MainLogo logoStyle={mainLogoColors} />;
    </div>
  );
}

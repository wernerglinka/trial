import React from "react";
import { Link } from "react-router-dom";

import menuData from "./menuData";
import Dropdown from "./NavDropdown";

function MenuWrapper(props) {
  return <ul {...props} />;
}

function MenuItem(props) {
  return <li {...props} />;
}

function Menu() {
  return (
    <MenuWrapper className="menu">
      {menuData.map(topLevelItem => {
        return (
          <MenuItem key={topLevelItem.name} className="menuItem">
            {typeof topLevelItem.menu !== "object" ? (
              <Link to={topLevelItem.url}>{topLevelItem.name}</Link>
            ) : (
              <Dropdown
                menu={topLevelItem.menu}
                menuName={topLevelItem.menuName}
              />
            )}
          </MenuItem>
        );
      })}
    </MenuWrapper>
  );
}

export default Menu;

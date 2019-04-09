import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import menuData from "../../siteData/menuData";
import Dropdown from "./NavDropdown";
import SmallScreenNavList from "./SmallScreenNavList";

// extra wrapper is used with small screens
function MenuWrapper(props) {
  return <div {...props} />;
}

function MainMenu(props) {
  return <ul {...props} />;
}

function MenuItem(props) {
  return <li {...props} />;
}

/**
 * Menu component
 * Creates the menu from data in "menuData". Menu items may by individual links or
 * dropdowns. A dropdown will have a title and the dropdown. The titles will be styled
 * just like the individual links and will be appended with an arrow, indicating that
 * this menu item can be opened.
 * @param {boolean} SmallScreenNavList - indicates that screen is small, for example less than 900px wide
 * @param {function} toggleOpen - function to update the small screen menu state
 */

function Menu({ SmallScreenNavList: isSmallScreen, toggleOpen }) {
  return (
    <MenuWrapper
      className={`menuWrapper ${isSmallScreen ? "smallScreen" : "largeScreen"}`}
    >
      <MainMenu className="menu">
        {menuData.map(topLevelItem => {
          if (typeof topLevelItem.menu !== "object") {
            return (
              <MenuItem key={topLevelItem.name} className="menuItem">
                <Link to={topLevelItem.url} onClick={() => toggleOpen(false)}>
                  {topLevelItem.name}
                </Link>
              </MenuItem>
            );
          }
          if (isSmallScreen) {
            return (
              <MenuItem key={topLevelItem.name} className="menuItem">
                <SmallScreenNavList
                  menu={topLevelItem.menu}
                  menuName={topLevelItem.menuName}
                  toggleOpen={toggleOpen}
                />
              </MenuItem>
            );
          }
          return (
            <MenuItem key={topLevelItem.name} className="menuItem">
              <Dropdown
                menu={topLevelItem.menu}
                menuName={topLevelItem.menuName}
              />
            </MenuItem>
          );
        })}
      </MainMenu>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  SmallScreenNavList: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired
};
export default Menu;

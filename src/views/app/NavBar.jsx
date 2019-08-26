import * as React from 'react';
import { NavBarContainer, HomeIcon, SearchIcon, BagIcon, NavBarIconContainer, MarginTop } from './index.style';

const NavBarIcons = ['home', 'search', 'bag'];

const getNavBarIcon = (icon) => {
  switch (icon) {
    case 'home':
      return <HomeIcon />;
    case 'search':
      return <SearchIcon />;
    case 'bag':
      return <BagIcon />;
    default:
      return null;
  }
};

function renderNavBarIcons() {
  return (
    <div>
      {NavBarIcons.map((icon) => (
        <NavBarIconContainer>{getNavBarIcon(icon)}</NavBarIconContainer>
      ))}
    </div>
  );
}

export default function NavBar() {
  return (
    <NavBarContainer>
      <MarginTop />
      {renderNavBarIcons()}
    </NavBarContainer>
  );
}

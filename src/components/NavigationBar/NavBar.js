import React from "react";
import {
  NavBarContainer,
  LogoContainer,
  NavLogo,
  RightContainer,
  UserName,
  Logout
} from "./NavBarStyled";
import logo from "../../assets/icons/logo.svg";
import logoutIcon from "../../assets/icons/logout.svg";

const NavBar = props => {
  return (
    <NavBarContainer>
      <LogoContainer>
        <NavLogo src={logo} />
      </LogoContainer>
      {props.loggedIn ? (
        <RightContainer>
          <UserName>{props.userFullName}</UserName>
          <Logout
            src={logoutIcon}
            onClick={() => {
              props.logout();
            }}
          />
        </RightContainer>
      ) : null}
    </NavBarContainer>
  );
};

export default NavBar;

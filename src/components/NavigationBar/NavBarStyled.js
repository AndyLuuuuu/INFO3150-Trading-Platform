import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 100vw;
  height: 5rem;
  content: "";
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 15rem;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLogo = styled.img`
  width: 8rem;
  height: auto;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem 0 2rem;
`;

export const UserName = styled.p`
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 400;
  color: ${props => props.theme.colors.whitesmoke};
`;

export const Logout = styled.img`
  margin-left: 2rem;
  width: 1.5rem;
  cursor: pointer;
`;

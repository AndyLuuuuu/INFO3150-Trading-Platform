import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 15rem;
  height: calc(100vh - 5rem);
  background-color: ${props => props.theme.colors.purple};
`;

export const DashLinks = styled.p`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 4rem;
  font-size: ${props => props.theme.fontSize.sm};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.gray};
  &:hover {
    background-color: ${props => props.theme.colors.lightpurple};
    color: ${props => props.theme.colors.whitesmoke};
  }
`;

import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 5rem);
  overflow: hidden;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary};
`;

export const LoginButton = styled.button`
  width: 26rem;
  height: 4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => props.theme.colors.whitesmoke};
  margin-top: 0.7rem;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.lightblue};
  border: none;
  cursor: pointer;
  transition: transform 100ms ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.02);
  }
`;

export const ErrorMessage = styled.p`
  transition: opacity 100ms ease-in-out;
  opacity: ${props => (props.error ? "1" : "0")};
  color: red;
  font-size: 0.9rem;
`;

export const RegisterContainer = styled.div`
  display: flex;
  width: 26rem;
  justify-content: center;
  align-items: center;
`;

export const RegisterButton = styled.button`
  width: fit-content;
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: flex;
  align-items: center;
  border-radius: 50px;
  border: none;
  height: 2rem;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  background-color: ${props => props.theme.colors.lightblue};
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => props.theme.colors.whitesmoke};
  transition: transform 100ms ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.02);
  }
`;

export const RegisterMessage = styled.p`
  font-size: 1rem;
`;

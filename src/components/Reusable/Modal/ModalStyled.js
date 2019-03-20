import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 10;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.secondary};
  width: fit-content;
  height: fit-content;
  padding: 2.5rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 15px;
  transition: transform 150ms ease-in-out, opacity 200ms ease-in-out;
  transform: scale(${props => (props.showModal ? "1" : "0")});
  opacity: ${props => (props.showModal ? "1" : "0")};
`;

export const ModalTitle = styled.h1`
  margin: 1rem 0;
`;

export const ModalInput = styled.input`
  width: 18rem;
  height: 3.5rem;
  font-size: 1.2rem;
  border-radius: 50px;
  border: 1px solid ${props => props.theme.colors.gray};
  padding: 0 4rem 0 4rem;
  text-align: center;
  margin: 0.7rem;
  &:focus {
    outline: none;
  }
`;
export const ModalCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ModalCheckboxLabel = styled.label`
  font-size: ${props => props.theme.fontSize.sm};
  margin-left: 1rem;
`;

export const ModalCheckbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1rem;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalButton = styled.button`
  width: 10rem;
  height: 3rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => props.theme.colors.whitesmoke};
  margin: 0.7rem;
  border-radius: 50px;
  background-color: ${props =>
    props.success
      ? props.theme.colors.lightgreen
      : props.theme.colors.lightred};
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

export const ModalError = styled.p`
  transition: opacity 100ms ease-in-out;
  opacity: ${props => (props.error ? "1" : "0")};
  color: red;
  font-size: ${props => props.theme.fontSize.sm};
  margin: 1rem 0;
`;

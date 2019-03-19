import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 18rem;
  height: 3.5rem;
  font-size: 1.2rem;
  border-radius: 50px;
  border: 1px solid ${props => props.theme.colors.gray};
  padding: 0 4rem 0 4rem;
  text-align: center;
  margin: ${props => (props.margin ? ".7rem" : "0rem")};
  &:focus {
    outline: none;
  }
`;

export const InputIcon = styled.img`
  position: absolute;
  width: 1.5rem;
  margin-left: 2rem;
`;

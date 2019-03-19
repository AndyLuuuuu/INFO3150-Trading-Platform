import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  margin-top: -5rem;
  background-color: ${props => props.theme.colors.overlay};
`;

export const InfoModalContainer = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  z-index: 50;
  background-color: ${props => props.theme.colors.secondary};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: left;
  padding: 3rem;
`;

export const InfoModalClose = styled.img`
  width: 2.5rem;
  cursor: pointer;
`;

export const InfoModalContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(9, 1fr);
  grid-gap: 0.5rem;
`;

export const InfoModalTitle = styled.h3`
  font-size: 1.3rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
`;

export const InfoModalLabel = styled.p`
  font-weight: bold;
`;

export const InfoModalText = styled.p``;

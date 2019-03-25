import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  z-index: 25;
  width: 100%;
  height: 100vh;
  margin-top: -5rem;
  background-color: ${props => props.theme.colors.overlay};
  z-index: ${props => (props.showModal ? "25" : "-1")};
  transition: opacity 125ms ease-in-out;
  opacity: ${props => (props.showModal ? "1" : "0")};
`;

export const InfoModalContainer = styled.div`
  position: absolute;
  width: fit-content;
  height: 25rem;
  z-index: ${props => (props.showModal ? "50" : "-1")};
  background-color: ${props => props.theme.colors.secondary};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: left;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  transition: opacity 150ms ease-in-out;
  opacity: ${props => (props.showModal ? "1" : "0")};
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
  margin-bottom: 0.5rem;
`;

export const InfoModalLabel = styled.p`
  font-weight: bold;
`;

export const InfoModalText = styled.p``;

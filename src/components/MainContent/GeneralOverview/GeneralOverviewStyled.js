import styled from "styled-components";

export const GeneralOverviewContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 5rem);
  content: "";
  display: grid;
  grid-template-rows: 1fr 1.5fr;
  background-color: ${props => props.theme.colors.secondary};
  position: relative;
`;

export const StockRecordContainer = styled.div`
  overflow-y: auto;
  background-color: ${props => props.theme.colors.other};
`;

export const RecordsTitle = styled.h2`
  width: fit-content;
  font-size: 1.4rem;
  padding: 1rem;
`;

export const RecordsListHeader = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const RecordsListHeading = styled.h3`
  width: fit-content;
  font-size: 1rem;
`;

export const RecordsListItem = styled.div`
  display: grid;
  height: 4rem;
  grid-template-columns: repeat(7, 1fr);
  padding: 0rem 1rem;
  transition: transform 100ms ease-in-out;
  cursor: pointer;
  &:nth-of-type(even) {
    background-color: ${props => props.theme.colors.other2};
  }
  &:hover {
    background-color: ${props => props.theme.colors.lightblue};
    color: white;
  }
`;

export const RecordsListText = styled.p`
  width: 100%;
  font-size: 0.95rem;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const InformationContainer = styled.div``;

export const StatContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  margin: 1rem;
`;

export const StatContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatIcon = styled.img`
  width: 5rem;
`;

export const StatTitle = styled.p`
  text-transform: uppercase;
  font-weight: bold;
`;

export const StatValue = styled.p`
  font-size: 4rem;
  font-weight: lighter;
`;

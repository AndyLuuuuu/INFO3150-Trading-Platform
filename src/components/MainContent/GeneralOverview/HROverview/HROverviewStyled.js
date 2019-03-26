import styled from "styled-components";

export const HROverviewContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 5rem);
  display: flex;
  position: relative;
`;

export const TraderPanel = styled.div`
  width: 18rem;
  height: calc(100vh - 5rem);
  background-color: ${props => props.theme.colors.secondary};
  overflow-y: auto;
  position: relative;
  z-index: 100;
  border-right: 2px solid ${props => props.theme.colors.primary};
`;

export const TraderNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  cursor: pointer;
  position: relative;
  &:nth-of-type(odd) {
    background-color: ${props => props.theme.colors.darkerSecondary};
  }
  &:hover {
    background-color: ${props => props.theme.colors.lightblue};
    color: white;
  }
`;

export const TraderName = styled.p`
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.sm};
`;

export const TraderTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  position: relative;
  background-color: #424554;
`;

export const TraderTitle = styled.p`
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.colors.whitesmoke};
`;

export const ExpandIcon = styled.img`
  position: absolute;
  right: 0;
  width: 1.5rem;
  margin: auto;
`;

export const TraderInfoPanel = styled.div`
  background-color: ${props => props.theme.colors.other2};
  width: calc(100vw - 18rem);
  height: calc(100vh - 5rem);
  right: 0;
  position: absolute;
  transition: transform 250ms ease-in-out;
  transform: translateX(${props => (props.showPanel ? "0%" : "-100%")});
  display: grid;
  grid-template-rows: 1fr 35rem;
`;

export const StockRecordContainer = styled.div`
  overflow-y: auto;
  background-color: ${props => props.theme.colors.other};
  grid-area: 2/1/3/1;
`;

export const RecordsTitle = styled.h2`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 1rem;
  text-align: left;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.whitesmoke};
`;

export const RecordsListHeader = styled.div`
  padding: 1rem;
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

export const WinRatesContainer = styled.div`
  width: calc(100vw - 18rem);
  display: flex;
  overflow-y: auto;
`;

export const YearsContainer = styled.div`
  overflow-y: auto;
  width: 18rem;
  border-right: 2px solid ${props => props.theme.colors.primary};
`;

export const YearContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  cursor: pointer;
  &:nth-of-type(even) {
    background-color: ${props => props.theme.colors.secondary};
  }
  &:nth-of-type(odd) {
    background-color: ${props => props.theme.colors.darkerSecondary};
  }
  &:hover {
    background-color: ${props => props.theme.colors.lightblue};
    color: white;
  }
`;

export const YearTitle = styled.p``;

export const DetailWinRateContainer = styled.div`
  width: 97.5%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding: 1rem;
`;

export const DetailWinRateHeader = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.whitesmoke};
`;

export const DetailWinRateHeaderText = styled.h2`
  text-align: left;
  font-size: 1.2rem;
  font-weight: 300;
`;

export const WinRateContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const MonthsContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const MonthContainer = styled.div`
  display: flex;
  width: calc(100% / 12);
  justify-content: center;
  align-items: center;
  height: 3rem;
  &:nth-of-type(even) {
    background-color: ${props => props.theme.colors.secondary};
  }
  &:nth-of-type(odd) {
    background-color: ${props => props.theme.colors.darkerSecondary};
  }
`;

export const MonthTitle = styled.p``;

export const MonthWinRateContainer = styled(MonthContainer)``;

export const MonthWinRate = styled(MonthTitle)``;

export const PromptSelect = styled.p`
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  color: black;
`;

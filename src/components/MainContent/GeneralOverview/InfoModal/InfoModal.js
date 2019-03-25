import React from "react";
import {
  Overlay,
  InfoModalContainer,
  InfoModalTitle,
  InfoModalContent,
  InfoModalClose,
  InfoModalLabel,
  InfoModalText
} from "./InfoModalStyled";
import closeIcon from "../../../../assets/icons/close_icon.svg";

const InfoModal = props => {
  return (
    <React.Fragment>
      <Overlay onClick={props.hideModal} showModal={props.showModal} />
      <InfoModalContainer showModal={props.showModal}>
        <InfoModalTitle>
          Transaction Record
          <InfoModalClose
            src={closeIcon}
            alt="Close Modal Icon"
            onClick={props.hideModal}
          />
        </InfoModalTitle>
        {props.selectedRecord ? (
          <InfoModalContent>
            <InfoModalLabel>Trader Name:</InfoModalLabel>
            <InfoModalText>{props.userFullName}</InfoModalText>
            <InfoModalLabel>Trader ID:</InfoModalLabel>
            <InfoModalText>{props.selectedRecord.userID}</InfoModalText>
            <InfoModalLabel>Stock Name:</InfoModalLabel>
            <InfoModalText>{props.selectedRecord.stockName}</InfoModalText>
            <InfoModalLabel>Stock Symbol:</InfoModalLabel>
            <InfoModalText>{props.selectedRecord.stockSymbol}</InfoModalText>
            <InfoModalLabel>Market Type:</InfoModalLabel>
            <InfoModalText>{props.selectedRecord.marketType}</InfoModalText>
            <InfoModalLabel>Buy Price:</InfoModalLabel>
            <InfoModalText>
              ${" "}
              {props.selectedRecord.buyPrice
                ? props.selectedRecord.buyPrice.toFixed(2)
                : null}
            </InfoModalText>
            <InfoModalLabel>Sell Price:</InfoModalLabel>
            <InfoModalText>
              ${" "}
              {props.selectedRecord.sellPrice
                ? props.selectedRecord.sellPrice.toFixed(2)
                : null}
            </InfoModalText>
            <InfoModalLabel>Number of Stocks:</InfoModalLabel>
            <InfoModalText>{props.selectedRecord.numberOfStocks}</InfoModalText>
            <InfoModalLabel>Transaction Date:</InfoModalLabel>
            <InfoModalText>{props.selectedRecord.purchaseDate}</InfoModalText>
            <InfoModalLabel>Gross</InfoModalLabel>
            <InfoModalText>$ {props.selectedRecord.gross}</InfoModalText>
            {console.log(props)}
            {parseInt(props.selectedRecord.commission) > 0 ? (
              <React.Fragment>
                <InfoModalLabel>Commission</InfoModalLabel>
                <InfoModalText>
                  $ {props.selectedRecord.commission}
                </InfoModalText>
              </React.Fragment>
            ) : null}
          </InfoModalContent>
        ) : null}
      </InfoModalContainer>
    </React.Fragment>
  );
};

export default InfoModal;

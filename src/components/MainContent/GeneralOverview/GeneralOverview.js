import React, { Component } from "react";
import {
  GeneralOverviewContainer,
  InformationContainer,
  StatContainer,
  StatContent,
  StatIcon,
  StatTitle,
  StatValue,
  StockRecordContainer,
  RecordsTitle,
  RecordsListHeader,
  RecordsListHeading,
  RecordsListItem,
  RecordsListText
} from "./GeneralOverviewStyled";
import InfoModal from "./InfoModal/InfoModal";
import axios from "axios";
import WinIcon from "../../../assets/icons/win_icon.svg";
import WinChart from "../../../assets/icons/win_chart.svg";
import LossChart from "../../../assets/icons/loss_chart.svg";
import Gross from "../../../assets/icons/gross_icon.svg";

class GeneralOverview extends Component {
  state = {
    records: [],
    selectedRecord: {},
    winrate: null,
    totalWin: null,
    totalLoss: null,
    totalGross: null,
    showInfoModal: false
  };
  componentDidMount() {
    const userInformation = {
      userID: this.props.userID,
      isTrader: this.props.isTrader
    };
    axios
      .post("/api/records", userInformation)
      .then(res => {
        this.setState({ records: [...res.data] });
      })
      .then(() => {
        this.calculateInformation();
        console.log(this.state.records);
      });
  }

  dateConverter = iso => {
    var date = new Date(iso);
    return `${date.getMonth() +
      1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    }:${date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}`;
  };

  calculateInformation = () => {
    var win = 0;
    var loss = 0;
    var sellTotal = 0;
    var buyTotal = 0;
    if (this.state.records != null || this.state.records == []) {
      this.state.records.map(record => {
        if (record.sellPrice > record.buyPrice) {
          win++;
        } else if (record.sellPrice < record.buyPrice) {
          loss++;
        }
        buyTotal -= record.buyPrice * record.numberOfStocks;
        sellTotal += record.sellPrice * record.numberOfStocks;
      });
      var gross = (buyTotal + sellTotal).toFixed(2);
      console.log(win);
      console.log(loss);
      console.log(sellTotal);
      console.log(buyTotal);
      console.log("gross" + gross);
      this.setState({
        winrate: (win / this.state.records.length) * 100,
        totalWin: win,
        totalLoss: loss,
        totalGross: gross
      });
    }
  };

  showModalHandler = record => {
    console.log(record);
    var selectedRecord = {
      ...record,
      gross: 0,
      commission: 0
    };
    selectedRecord.gross = (
      -(record.buyPrice * record.numberOfStocks) +
      record.sellPrice * record.numberOfStocks
    ).toFixed(2);
    if (selectedRecord.gross > 0) {
      selectedRecord.commission = (selectedRecord.gross * 0.45).toFixed(2);
    }
    selectedRecord.purchaseDate = this.dateConverter(record.purchaseDate);
    this.setState({ selectedRecord: selectedRecord, showInfoModal: true });
  };

  hideModalHandler = () => {
    this.setState({ selectedRecord: {}, showInfoModal: false });
  };

  render() {
    return (
      <GeneralOverviewContainer>
        <InfoModal
          showModal={this.state.showInfoModal}
          selectedRecord={this.state.selectedRecord}
          hideModal={this.hideModalHandler}
          userFullName={this.props.userFullName}
          isTrader={this.props.isTrader}
        />
        <StatContainer>
          {console.log(this.state)}
          {this.state.winrate ? (
            <StatContent>
              <div style={{ marginRight: "2rem" }}>
                <StatIcon src={WinIcon} />
                <StatTitle>Win Rate</StatTitle>
              </div>
              <StatValue>{this.state.winrate.toFixed(0)}%</StatValue>
            </StatContent>
          ) : null}
          {this.state.totalWin ? (
            <StatContent>
              <div style={{ marginRight: "2rem" }}>
                <StatIcon src={WinChart} />
                <StatTitle>Total Wins</StatTitle>
              </div>
              <StatValue>{this.state.totalWin}</StatValue>
            </StatContent>
          ) : null}
          {this.state.totalLoss ? (
            <StatContent>
              <div style={{ marginRight: "2rem" }}>
                <StatIcon src={LossChart} />
                <StatTitle>Total Losses</StatTitle>
              </div>
              <StatValue>{this.state.totalLoss}</StatValue>
            </StatContent>
          ) : null}
          {this.state.totalGross ? (
            <StatContent>
              <div style={{ marginRight: "2rem" }}>
                <StatIcon src={Gross} />
                <StatTitle>Total Gross</StatTitle>
              </div>
              <StatValue>${this.state.totalGross}</StatValue>
            </StatContent>
          ) : null}
        </StatContainer>
        <StockRecordContainer>
          <RecordsTitle>Your Records</RecordsTitle>
          <RecordsListHeader>
            <RecordsListHeading>Stock Name</RecordsListHeading>
            <RecordsListHeading>Stock Symbol</RecordsListHeading>
            <RecordsListHeading>Market Type</RecordsListHeading>
            <RecordsListHeading>Buy Price</RecordsListHeading>
            <RecordsListHeading>Sell Price</RecordsListHeading>
            <RecordsListHeading>No. of Stocks</RecordsListHeading>
            <RecordsListHeading>Purchase Date</RecordsListHeading>
          </RecordsListHeader>
          {this.state.records.map(record => {
            return (
              <RecordsListItem
                key={record.stockID}
                onClick={() => this.showModalHandler(record)}
              >
                <RecordsListText>{record.stockName}</RecordsListText>
                <RecordsListText>{record.stockSymbol}</RecordsListText>
                <RecordsListText>{record.marketType}</RecordsListText>
                <RecordsListText>
                  $ {record.buyPrice.toFixed(2)}
                </RecordsListText>
                <RecordsListText>
                  $ {record.sellPrice.toFixed(2)}
                </RecordsListText>
                <RecordsListText>{record.numberOfStocks}</RecordsListText>
                <RecordsListText>
                  {this.dateConverter(record.purchaseDate)}
                </RecordsListText>
              </RecordsListItem>
            );
          })}
        </StockRecordContainer>
      </GeneralOverviewContainer>
    );
  }
}

export default GeneralOverview;

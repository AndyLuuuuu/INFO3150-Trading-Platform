import React, { Component } from "react";
import {
  HROverviewContainer,
  TraderPanel,
  TraderNameContainer,
  TraderName,
  ExpandIcon,
  TraderInfoPanel,
  StockRecordContainer,
  RecordsTitle,
  RecordsListHeader,
  RecordsListHeading,
  RecordsListItem,
  RecordsListText,
  WinRatesContainer,
  YearsContainer,
  YearContainer,
  YearTitle,
  DetailWinRateContainer,
  DetailWinRateHeader,
  DetailWinRateHeaderText,
  WinRateContainer,
  MonthsContainer,
  MonthContainer,
  MonthTitle,
  MonthWinRateContainer,
  MonthWinRate,
  PromptSelect
} from "./HROverviewStyled";
import InfoModal from "../InfoModal/InfoModal";
import RightArrow from "../../../../assets/icons/right-arrow.svg";
import axios from "axios";

class HROverview extends Component {
  state = {
    traders: [],
    traderRecords: [],
    traderRecordYears: [],
    traderMonthlyWinRate: [],
    traderYearlyWinRate: [],
    selectedTrader: "",
    showInfoModal: false,
    showTraderInformation: false,
    showWinRate: false
  };
  componentDidMount() {
    const userInformation = {
      isTrader: this.props.isTrader
    };
    axios
      .post("/api/traders", userInformation)
      .then(res => {
        this.setState({ traders: [...res.data] });
        console.log(res);
      })
      .then(() => {
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

  getMonthArray = () => {
    return [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ];
  };

  separateRecordYears = () => {
    this.setState({ traderRecordYears: [] });
    if (this.state.traderRecords.length != 0) {
      this.state.traderRecords.map(record => {
        var date = new Date(record.purchaseDate);
        var year = date.getFullYear();
        if (!this.state.traderRecordYears.includes(year)) {
          this.setState(prevState => ({
            traderRecordYears: [...prevState.traderRecordYears, year]
          }));
          var traderRecordYears = [...this.state.traderRecordYears];
          traderRecordYears.sort();
          this.setState({
            traderRecordYears: [...traderRecordYears]
          });
        }
      });
    }
  };

  calculateMonthlyWinRate = year => {
    this.setState({ traderMonthlyWinRate: [], traderYearlyWinRate: 0 });
    var yearlyWins = 0;
    var yearlyTotal = 0;
    var arrayOfWinRate = [];
    for (var i = 0; i < 12; i++) {
      arrayOfWinRate.push([0, 0]);
    }
    this.state.traderRecords.map(record => {
      var date = new Date(record.purchaseDate);
      if (date.getFullYear() === year) {
        var month = date.getMonth();
        if (
          record.sellPrice * record.numberOfStocks >
          record.buyPrice * record.numberOfStocks
        ) {
          yearlyWins++;
          yearlyTotal++;
          arrayOfWinRate[month] = [
            arrayOfWinRate[month][0] + 1,
            arrayOfWinRate[month][1] + 1
          ];
        } else {
          yearlyTotal++;
          arrayOfWinRate[month] = [
            arrayOfWinRate[month][0] + 1,
            arrayOfWinRate[month][1]
          ];
        }
        console.log(arrayOfWinRate);
      }
    });
    this.setState({
      traderMonthlyWinRate: [...arrayOfWinRate],
      traderYearlyWinRate: [year, (yearlyWins / yearlyTotal) * 100],
      showWinRate: true
    });
  };

  calculateMonthWinRate = (total, wins) => {
    if (wins === 0) {
      return "0%";
    }
    return `${(wins / total) * 100}%`;
  };

  showTraderInformation = (userID, userFullName) => {
    this.setState({ showTraderInformation: false });
    if (!this.state.selectedTrader) {
      this.setState({ selectedTrader: userFullName });
    } else {
      setTimeout(() => {
        this.setState({ selectedTrader: userFullName });
        this.setState({ showWinRate: false });
      }, 500);
    }
    const userInformation = {
      userID: userID
    };
    axios
      .post("/api/records", userInformation)
      .then(res => {
        console.log(res);
        this.setState({ traderRecords: [...res.data] });
      })
      .then(() => {
        if (!this.state.showTraderInformation) {
          setTimeout(() => {
            this.setState({ showTraderInformation: true });
          }, 500);
        } else {
          this.setState({ showTraderInformation: false });
          setTimeout(() => {
            this.setState({ showTraderInformation: true });
          }, 500);
        }
      })
      .then(() => {
        this.separateRecordYears();
      })
      .then(() => {
        console.log(this.state.traderRecordYears);
      });
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
      <HROverviewContainer>
        <InfoModal
          showModal={this.state.showInfoModal}
          selectedRecord={this.state.selectedRecord}
          hideModal={this.hideModalHandler}
          userFullName={this.state.selectedTrader}
        />
        <TraderPanel>
          {this.state.traders
            ? this.state.traders.map(trader => {
                return (
                  <TraderNameContainer
                    key={trader.userID}
                    onClick={() =>
                      this.showTraderInformation(
                        trader.userID,
                        trader.userFullName
                      )
                    }
                  >
                    <TraderName>
                      {trader.userFullName}
                      <ExpandIcon src={RightArrow} alt="Expand Icon" />
                    </TraderName>
                  </TraderNameContainer>
                );
              })
            : null}
        </TraderPanel>
        <TraderInfoPanel showPanel={this.state.showTraderInformation}>
          <StockRecordContainer>
            <RecordsTitle>{this.state.selectedTrader}'s Records</RecordsTitle>
            <RecordsListHeader>
              <RecordsListHeading>Stock Name</RecordsListHeading>
              <RecordsListHeading>Stock Symbol</RecordsListHeading>
              <RecordsListHeading>Market Type</RecordsListHeading>
              <RecordsListHeading>Buy Price</RecordsListHeading>
              <RecordsListHeading>Sell Price</RecordsListHeading>
              <RecordsListHeading>No. of Stocks</RecordsListHeading>
              <RecordsListHeading>Purchase Date</RecordsListHeading>
            </RecordsListHeader>
            {this.state.traderRecords
              ? this.state.traderRecords.map(record => {
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
                })
              : null}
          </StockRecordContainer>
          <WinRatesContainer>
            <YearsContainer>
              {this.state.traderRecordYears.length != 0
                ? this.state.traderRecordYears.map(year => {
                    return (
                      <YearContainer
                        key={year}
                        onClick={() => this.calculateMonthlyWinRate(year)}
                      >
                        <YearTitle>{year}</YearTitle>
                      </YearContainer>
                    );
                  })
                : null}
            </YearsContainer>
            {this.state.showWinRate ? (
              <DetailWinRateContainer>
                <DetailWinRateHeader>
                  <DetailWinRateHeaderText>
                    Monthly Win Rates
                  </DetailWinRateHeaderText>
                </DetailWinRateHeader>
                <React.Fragment>
                  <MonthsContainer>
                    {this.getMonthArray().map(month => {
                      return (
                        <MonthContainer>
                          <MonthTitle>{month}</MonthTitle>
                        </MonthContainer>
                      );
                    })}
                    <MonthContainer>
                      <MonthTitle>
                        Total:{" "}
                        {this.state.traderYearlyWinRate != 0
                          ? this.state.traderYearlyWinRate[0]
                          : 0}
                      </MonthTitle>
                    </MonthContainer>
                  </MonthsContainer>
                  <WinRateContainer>
                    {this.state.traderMonthlyWinRate.length != 0 ? (
                      <React.Fragment>
                        {this.state.traderMonthlyWinRate.map(month => {
                          return (
                            <MonthWinRateContainer>
                              <MonthWinRate>
                                {this.calculateMonthWinRate(month[0], month[1])}
                              </MonthWinRate>
                            </MonthWinRateContainer>
                          );
                        })}
                        <MonthWinRateContainer>
                          <MonthWinRate>
                            {this.state.traderYearlyWinRate[1].toFixed(0)}%
                          </MonthWinRate>
                        </MonthWinRateContainer>
                      </React.Fragment>
                    ) : null}
                  </WinRateContainer>
                </React.Fragment>
              </DetailWinRateContainer>
            ) : (
              <PromptSelect>
                Please select a year to view monthly winrates.
              </PromptSelect>
            )}
          </WinRatesContainer>
        </TraderInfoPanel>
      </HROverviewContainer>
    );
  }
}

export default HROverview;

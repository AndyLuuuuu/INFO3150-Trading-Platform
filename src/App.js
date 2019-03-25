import React, { Component } from "react";
import NavBar from "./components/NavigationBar/NavBar";
import GeneralOverview from "./components/MainContent/GeneralOverview/GeneralOverview";
import Login from "./components/Login/Login";
import Modal from "./components/Reusable/Modal/Modal";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/Theme/theme";
import "./App.css";

class App extends Component {
  state = {
    loggedIn: false,
    register: false,
    userID: "",
    username: "",
    userFullName: "",
    isTrader: false
  };

  LogoutHandler = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn,
      userID: "",
      username: "",
      userFullName: ""
    }));
  };

  RegisterHandler = () => {
    this.setState(prevState => ({ register: !prevState.register }));
  };

  LoggedInHandler = ({ userID, username, userFullName, isTrader }) => {
    console.log("hit");
    this.setState({
      userID: userID,
      username: username,
      userFullName: userFullName,
      loggedIn: true,
      isTrader: isTrader == true ? true : false
    });
    console.log(this.state);
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar
            logout={this.LogoutHandler}
            username={this.state.username}
            userFullName={this.state.userFullName}
            loggedIn={this.state.loggedIn}
          />
          <Modal
            registerClick={this.RegisterHandler}
            showModal={this.state.register}
          />
          {this.state.loggedIn ? (
            <div className="MainContent">
              {/* <Dashboard /> */}
              <GeneralOverview
                isTrader={this.state.isTrader}
                userID={this.state.userID}
                userFullName={this.state.userFullName}
                username={this.state.username}
              />
            </div>
          ) : (
            <Login
              registerClick={this.RegisterHandler}
              loggedInHandler={this.LoggedInHandler}
            />
          )}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

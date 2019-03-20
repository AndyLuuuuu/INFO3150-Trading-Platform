import React, { Component } from "react";
import axios from "axios";
import {
  LoginContainer,
  LoginTitle,
  LoginButton,
  ErrorMessage,
  RegisterContainer,
  RegisterButton,
  RegisterMessage
} from "./LoginStyled";
import {
  InputContainer,
  StyledInput,
  InputIcon
} from "../Reusable/ReusableStyled";

import userIcon from "../../assets/icons/username_icon.svg";
import passwordIcon from "../../assets/icons/password_icon.svg";

class Login extends Component {
  state = {
    error: false,
    username: "",
    password: ""
  };

  ValidationCheck = () => {
    if (
      this.state.username.includes("@") &&
      this.state.username.includes(".")
    ) {
      const loginInformation = {
        username: this.state.username,
        password: this.state.password
      };
      axios
        .post("/api/login", loginInformation)
        .then(res => {
          if (res.status === 200) {
            this.props.loggedInHandler(res.data);
          }
        })
        .catch(err => {
          console.log(err);
          this.setState({ error: true });
        });
    } else {
      this.setState(prevState => ({
        error: true
      }));
    }
  };

  InputChangeHandler = event => {
    event.persist();
    switch (event.target.name) {
      case "usernameInput":
        this.setState({ username: event.target.value });
        break;
      case "passwordInput":
        this.setState({ password: event.target.value });
        break;
      default:
        break;
    }
    console.log(this.state);
  };

  LoginHandler = () => {
    this.ValidationCheck();
  };

  RegisterLoginHandler = ({ username, password }) => {
    this.setState({ username: username, password: password }).then(() => {
      this.LoginHandler();
    });
  };

  render() {
    return (
      <LoginContainer>
        <LoginTitle>Login</LoginTitle>
        <InputContainer>
          <InputIcon src={userIcon} alt="Username Icon" />
          <StyledInput
            margin={true}
            name="usernameInput"
            onChange={this.InputChangeHandler}
            placeholder="Email"
          />
        </InputContainer>
        <InputContainer>
          <InputIcon src={passwordIcon} alt="Password Icon" />
          <StyledInput
            type="password"
            margin={true}
            name="passwordInput"
            onChange={this.InputChangeHandler}
            placeholder="Password"
          />
        </InputContainer>
        <LoginButton success={true} onClick={this.LoginHandler}>
          Login
        </LoginButton>
        <ErrorMessage error={this.state.error}>
          Please check your login information.
        </ErrorMessage>
        <RegisterContainer>
          <RegisterMessage>Don't have an account?</RegisterMessage>
          <RegisterButton onClick={this.props.registerClick}>
            Register here
          </RegisterButton>
        </RegisterContainer>
      </LoginContainer>
    );
  }
}

export default Login;

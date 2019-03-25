import React, { Component } from "react";
import {
  ModalContainer,
  ModalTitle,
  ModalInput,
  ModalCheckboxContainer,
  ModalCheckboxLabel,
  ModalCheckbox,
  ModalButtonContainer,
  ModalError,
  ModalButton
} from "./ModalStyled";
import axios from "axios";
import { RightContainer } from "../../NavigationBar/NavBarStyled";

class Modal extends Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    error: false,
    isTrader: false,
    isHR: false
  };

  ValidationCheck = () => {
    if (this.state.email.includes("@") && this.state.email.includes(".")) {
      if (this.state.fullName.length > 6) {
        const registerInformation = {
          fullName: this.state.fullName,
          email: this.state.email,
          password: this.state.password,
          isTrader: this.state.isTrader,
          isHR: this.state.isHR
        };

        axios.post("/api/register", registerInformation).then(res => {
          if (res.status === 200) {
            this.setState({ fullName: "", email: "", password: "" });
            this.props.registerClick();
          }
        });
      } else {
        this.setState({ error: true });
      }
    } else {
      this.setState({
        error: true
      });
    }
  };

  CheckboxClickHandler = event => {
    switch (event.target.name) {
      case "Trader":
        this.setState({ isTrader: true, isHR: false });
        break;
      case "HR":
        this.setState({ isTrader: false, isHR: true });
        break;
      default:
        break;
    }
  };

  InputChangeHandler = event => {
    event.persist();
    switch (event.target.name) {
      case "nameInput":
        this.setState({ fullName: event.target.value });
        break;
      case "emailInput":
        this.setState({ email: event.target.value });
        break;
      case "passwordInput":
        this.setState({ password: event.target.value });
        break;
    }
    console.log(this.state);
  };

  RegisterUserHandler = () => {
    if ((this.state.isTrader === false) & (this.state.isHR === false)) {
      this.setState({ error: true });
    } else {
      this.ValidationCheck();
    }
  };

  render() {
    return (
      <ModalContainer showModal={this.props.showModal}>
        <ModalTitle>Register</ModalTitle>
        <ModalInput
          placeholder="Full Name"
          onChange={this.InputChangeHandler}
          name="nameInput"
          value={this.state.fullName}
        />
        <ModalInput
          placeholder="Email"
          type="email"
          onChange={this.InputChangeHandler}
          name="emailInput"
          value={this.state.email}
        />
        <ModalInput
          placeholder="Password"
          type="password"
          onChange={this.InputChangeHandler}
          name="passwordInput"
          value={this.state.password}
        />
        <ModalButtonContainer>
          Please select one:
          <ModalCheckboxLabel>Trader</ModalCheckboxLabel>
          <ModalCheckbox
            type="checkbox"
            name="Trader"
            onChange={this.CheckboxClickHandler}
            checked={this.state.isTrader}
          />
          <ModalCheckboxLabel>HR</ModalCheckboxLabel>
          <ModalCheckbox
            type="checkbox"
            name="HR"
            onChange={this.CheckboxClickHandler}
            checked={this.state.isHR}
          />
        </ModalButtonContainer>
        <ModalError error={this.state.error}>
          Please check your fields.
        </ModalError>
        <ModalButtonContainer>
          <ModalButton onClick={this.props.registerClick}>Cancel</ModalButton>
          <ModalButton success={true} onClick={this.RegisterUserHandler}>
            Register
          </ModalButton>
        </ModalButtonContainer>
      </ModalContainer>
    );
  }
}

export default Modal;

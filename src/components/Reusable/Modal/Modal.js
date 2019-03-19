import React, { Component } from "react";
import {
  ModalContainer,
  ModalTitle,
  ModalInput,
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
    password: ""
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
    const registerInformation = {
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password
    };

    axios.post("/api/register", registerInformation).then(res => {
      if (res.status === 200) {
        this.props.registerClick();
      }
    });
  };
  render() {
    return (
      <ModalContainer showModal={this.props.showModal}>
        <ModalTitle>Register</ModalTitle>
        <ModalInput
          placeholder="Full Name"
          onChange={this.InputChangeHandler}
          name="nameInput"
        />
        <ModalInput
          placeholder="Email"
          type="email"
          onChange={this.InputChangeHandler}
          name="emailInput"
        />
        <ModalInput
          placeholder="Password"
          type="password"
          onChange={this.InputChangeHandler}
          name="passwordInput"
        />
        <ModalError>Please check your fields.</ModalError>
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

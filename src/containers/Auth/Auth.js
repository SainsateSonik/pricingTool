import React, { Component } from 'react';


import "./Auth.css";
import AuthenticationForm from "./AuthenticationForm/AuthenticationForm";
import graphic from "../../static/images/analysis.png";

class Auth extends Component {
  render() {
    return (
      <div className="authenticate">
        <section className="auth-wrapper"></section>
        <AuthenticationForm />
        <img className="graphic" src={graphic} alt="estimation graphic"/>
      </div>
    )
  }
}

export default Auth;
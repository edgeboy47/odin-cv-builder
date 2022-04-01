import React, { Component } from "react";
import "./PersonalTab.css";
import FormInput from "../FormInput/FormInput.js";

export default class PersonalTab extends Component {
  render() {
    return (
      <div className="formarea">
        <FormInput labelFor="fname" labelText="First Name" />
        <FormInput labelFor="lname" labelText="Last Name" />
        <FormInput labelFor="email" labelText="Email Address" />
        <FormInput labelFor="phone" labelText="Phone Number" />
        <FormInput labelFor="street" labelText="Street Address" />
        <FormInput labelFor="city" labelText="City" />
        <FormInput labelFor="country" labelText="Country" />
      </div>
    );
  }
}

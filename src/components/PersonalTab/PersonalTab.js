import React, { Component } from "react";
import "./PersonalTab.css";
import FormInput from "../FormInput/FormInput.js";

export default class PersonalTab extends Component {
  render() {
    return (
      <div className="formarea">
        <FormInput value={this.props.personalState.fName} labelFor="fName" labelText="First Name" onChange={this.props.onChange}/>
        <FormInput value={this.props.personalState.lName} labelFor="lName" labelText="Last Name" onChange={this.props.onChange}/>
        <FormInput value={this.props.personalState.email} labelFor="email" labelText="Email Address" onChange={this.props.onChange}/>
        <FormInput value={this.props.personalState.phone} labelFor="phone" labelText="Phone Number" onChange={this.props.onChange}/>
        <FormInput value={this.props.personalState.street} labelFor="street" labelText="Street Address" onChange={this.props.onChange}/>
        <FormInput value={this.props.personalState.city} labelFor="city" labelText="City" onChange={this.props.onChange}/>
        <FormInput value={this.props.personalState.country} labelFor="country" labelText="Country" onChange={this.props.onChange}/>
      </div>
    );
  }
}

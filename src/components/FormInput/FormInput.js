import React, { Component } from "react";
import "./FormInput.css";

export default class FormInput extends Component {
  render() {
    return (
      <div className="input">
        <label htmlFor={this.props.labelFor}>{this.props.labelText}</label>
        <input
          value={this.props.value}
          onChange={this.props.onChange}
          type="text"
          name={this.props.labelFor}
          id={this.props.labelFor}
        />
      </div>
    );
  }
}

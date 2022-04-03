import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
export default class ExperienceTab extends Component {
  constructor() {
    super();
    this.state = {
      experience: [<ExperienceForm />],
    };
  }
  render() {
    return (
      <div>
        {this.state.experience}
        <button
          onClick={() => {
            this.setState({
              experience: [...this.state.experience, <ExperienceForm />],
            });
          }}
        >
          Add Experience
        </button>
      </div>
    );
  }
}

class ExperienceForm extends Component {
  render() {
    return (
      <div>
        <FormInput labelFor="position" labelText="Position" />
        <FormInput labelFor="location" labelText="Location" />
        <FormInput labelFor="company" labelText="Company" />
        <FormInput labelFor="from" labelText="From" />
        <FormInput labelFor="to" labelText="To" />
        <FormInput labelFor="description" labelText="Description" />
      </div>
    );
  }
}

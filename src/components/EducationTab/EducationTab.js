import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
export default class EducationTab extends Component {
  constructor() {
    super();
    this.state = {
      education: [<EducationForm />],
    };
  }

  render() {
    return (
      <div>
        {this.state.education}
        <button
          onClick={() => {
            this.setState({
              education: [...this.state.education, <EducationForm />],
            });
          }}
        >
          Add Education
        </button>
      </div>
    );
  }
}

class EducationForm extends Component {
  render() {
    return (
      <div>
        <FormInput labelFor="institution" labelText="Institution" />
        <FormInput labelFor="degree" labelText="Degree" />
        <FormInput labelFor="from" labelText="From" />
        <FormInput labelFor="to" labelText="To" />
        <FormInput labelFor="description" labelText="Description" />
      </div>
    );
  }
}

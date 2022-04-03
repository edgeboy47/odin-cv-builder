import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import FormInput from "../FormInput/FormInput";
export default class EducationTab extends Component {
  render() {
    return (
      <div>
        {this.props.educationState.map((education) => (
          <EducationForm
            key={education.id}
            education={education}
            onChange={this.props.onChange}
            deleteEducation={this.props.deleteEducation}
          />
        ))}
        <button
          onClick={() =>
            this.props.addEducation({
              id: uuidv4(),
              institution: "",
              degree: "",
              from: "",
              to: "",
              description: "",
            })
          }
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
      <div className="education-form">
        <FormInput
          value={this.props.education.institution}
          onChange={(e) => this.props.onChange(e, this.props.education.id)}
          labelFor="institution"
          labelText="Institution"
        />
        <FormInput
          value={this.props.education.degree}
          onChange={(e) => this.props.onChange(e, this.props.education.id)}
          labelFor="degree"
          labelText="Degree"
        />
        <FormInput
          value={this.props.education.from}
          onChange={(e) => this.props.onChange(e, this.props.education.id)}
          labelFor="from"
          labelText="From"
        />
        <FormInput
          value={this.props.education.to}
          onChange={(e) => this.props.onChange(e, this.props.education.id)}
          labelFor="to"
          labelText="To"
        />
        <FormInput
          value={this.props.education.description}
          onChange={(e) => this.props.onChange(e, this.props.education.id)}
          labelFor="description"
          labelText="Description"
        />
        <button
          onClick={() => this.props.deleteEducation(this.props.education.id)}
        >
          Delete Education
        </button>
      </div>
    );
  }
}

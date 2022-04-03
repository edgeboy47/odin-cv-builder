import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import FormInput from "../FormInput/FormInput";
export default class ExperienceTab extends Component {
  render() {
    return (
      <div>
        {this.props.experienceState.map((experience) => (
          <ExperienceForm
            key={experience.id}
            experience={experience}
            onChange={this.props.onChange}
            deleteExperience={this.props.deleteExperience}
          />
        ))}
        <button
          onClick={() =>
            this.props.addExperience({
              id: uuidv4(),
              position: "",
              location: "",
              company: "",
              from: "",
              to: "",
              description: "",
            })
          }
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
      <div className="experience-form">
        <FormInput
          value={this.props.experience.position}
          onChange={(e) => this.props.onChange(e, this.props.experience.id)}
          labelFor="position"
          labelText="Position"
        />
        <FormInput
          value={this.props.experience.location}
          onChange={(e) => this.props.onChange(e, this.props.experience.id)}
          labelFor="location"
          labelText="Location"
        />
        <FormInput
          value={this.props.experience.company}
          onChange={(e) => this.props.onChange(e, this.props.experience.id)}
          labelFor="company"
          labelText="Company"
        />
        <FormInput
          value={this.props.experience.from}
          onChange={(e) => this.props.onChange(e, this.props.experience.id)}
          labelFor="from"
          labelText="From"
        />
        <FormInput
          value={this.props.experience.to}
          onChange={(e) => this.props.onChange(e, this.props.experience.id)}
          labelFor="to"
          labelText="To"
        />
        <FormInput
          value={this.props.experience.description}
          onChange={(e) => this.props.onChange(e, this.props.experience.id)}
          labelFor="description"
          labelText="Description"
        />
        <button
          onClick={() => this.props.deleteExperience(this.props.experience.id)}
        >
          Delete Experience
        </button>
      </div>
    );
  }
}

import React, { Component } from "react";
import styles from "./ExperienceTab.module.css";
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
        <div className={styles.center}>
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
      </div>
    );
  }
}

class ExperienceForm extends Component {
  render() {
    return (
      <div className={styles.experience}>
        <div className={`${styles.row} ${styles.col_1}`}>
          <FormInput
            value={this.props.experience.position}
            onChange={(e) => this.props.onChange(e, this.props.experience.id)}
            labelFor="position"
            labelText="Position"
          />
        </div>
        <div className={`${styles.row} ${styles.col_2}`}>
          <FormInput
            value={this.props.experience.location}
            onChange={(e) => this.props.onChange(e, this.props.experience.id)}
            labelFor="location"
            labelText="Location"
          />
        </div>
    
          <div className={styles.row}>
            <FormInput
              value={this.props.experience.company}
              onChange={(e) => this.props.onChange(e, this.props.experience.id)}
              labelFor="company"
              labelText="Company"
            />
          </div>
        <div className={`${styles.row} ${styles.col_1}`}>
          <FormInput
            value={this.props.experience.from}
            onChange={(e) => this.props.onChange(e, this.props.experience.id)}
            labelFor="from"
            labelText="From"
          />
        </div>
        <div className={`${styles.row} ${styles.col_2}`}>
          <FormInput
            value={this.props.experience.to}
            onChange={(e) => this.props.onChange(e, this.props.experience.id)}
            labelFor="to"
            labelText="To"
          />
        </div>
          <div className={styles.row}>
            <FormInput
              value={this.props.experience.description}
              onChange={(e) => this.props.onChange(e, this.props.experience.id)}
              type="textarea"
              labelFor="description"
              labelText="Description"
            />
          </div>
        <div className={`${styles.row} ${styles.button}`}>
          <button
            onClick={() => this.props.deleteExperience(this.props.experience.id)}
          >
            Delete Experience
          </button>
        </div>
      </div>
    );
  }
}

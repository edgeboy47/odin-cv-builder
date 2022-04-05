import React, { Component } from "react";
import styles from "./EducationTab.module.css";
import { v4 as uuidv4 } from "uuid";
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
        <div className={styles.center}>
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
      </div>
    );
  }
}

class EducationForm extends Component {
  render() {
    return (
      <div className={styles.education}>
        <div className={styles.row}>
          <FormInput
            value={this.props.education.institution}
            onChange={(e) => this.props.onChange(e, this.props.education.id)}
            labelFor="institution"
            labelText="Institution"
          />
        </div>
        <div className={styles.row}>
          <FormInput
            value={this.props.education.degree}
            onChange={(e) => this.props.onChange(e, this.props.education.id)}
            labelFor="degree"
            labelText="Degree"
          />
        </div>
        <div className={`${styles.row} ${styles.col_1}`}>
          <FormInput
            value={this.props.education.from}
            onChange={(e) => this.props.onChange(e, this.props.education.id)}
            labelFor="from"
            labelText="From"
          />
        </div>
        <div className={`${styles.row} ${styles.col_2}`}>
          <FormInput
            value={this.props.education.to}
            onChange={(e) => this.props.onChange(e, this.props.education.id)}
            labelFor="to"
            labelText="To"
          />
        </div>
        <div className={`${styles.row} ${styles.description}`}>
          <FormInput
            value={this.props.education.description}
            onChange={(e) => this.props.onChange(e, this.props.education.id)}
            type="textarea"
            labelFor="description"
            labelText="Description"
          />
        </div>
        <div className={`${styles.row} ${styles.button}`}>
          <button
            onClick={() => this.props.deleteEducation(this.props.education.id)}
          >
            Delete Education
          </button>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./Main.css";
import PersonalTab from "../PersonalTab/PersonalTab";
import EducationTab from "../EducationTab/EducationTab";
import ExperienceTab from "../ExperienceTab/ExperienceTab";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: "Personal",
      personal: {
        fName: "",
        lName: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        country: "",
      },
      education: [
        {
          id: uuidv4(),
          institution: "",
          degree: "",
          from: "",
          to: "",
          description: "",
        },
      ],
      experience: [
        {
          id: uuidv4(),
          position: "",
          location: "",
          company: "",
          from: "",
          to: "",
          description: "",
        },
      ],
    };

    this.handlePersonalInputChange = this.handlePersonalInputChange.bind(this);

    this.handleExperienceInputChange =
      this.handleExperienceInputChange.bind(this);

    this.handleEducationInputChange =
      this.handleEducationInputChange.bind(this);

    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  handlePersonalInputChange(e) {
    const { name, value } = e.target;

    this.setState((state, props) => ({
      personal: {
        ...state.personal,
        [name]: value,
      },
    }));
  }

  handleEducationInputChange(e, id) {
    const { name, value } = e.target;
    this.setState((state, props) => ({
      education: state.education.map((education) => {
        if (education.id === id)
          return {
            ...education,
            [name]: value,
          };
        return education;
      }),
    }));
  }

  handleExperienceInputChange(e, id) {
    const { name, value } = e.target;
    this.setState((state, props) => ({
      experience: state.experience.map((experience) => {
        if (experience.id === id)
          return {
            ...experience,
            [name]: value,
          };
        return experience;
      }),
    }));
  }

  addEducation(education) {
    this.setState((state, props) => ({
      education: [...state.education, education],
    }));
  }

  deleteEducation(id) {
    this.setState((state, props) => ({
      education: state.education.filter((education) => education.id !== id),
    }));
  }

  addExperience(experience) {
    this.setState((state, props) => ({
      experience: [...state.experience, experience],
    }));
  }

  deleteExperience(id) {
    this.setState((state, props) => ({
      experience: state.experience.filter((experience) => experience.id !== id),
    }));
  }

  render() {
    let activeTab;

    switch (this.state.activeTab) {
      case "Personal":
        activeTab = (
          <PersonalTab
            personalState={this.state.personal}
            onChange={this.handlePersonalInputChange}
          />
        );
        break;

      case "Education":
        activeTab = (
          <EducationTab
            educationState={this.state.education}
            onChange={this.handleEducationInputChange}
            addEducation={this.addEducation}
            deleteEducation={this.deleteEducation}
          />
        );
        break;

      case "Experience":
        activeTab = (
          <ExperienceTab
            experienceState={this.state.experience}
            onChange={this.handleExperienceInputChange}
            addExperience={this.addExperience}
            deleteExperience={this.deleteExperience}
          />
        );
        break;

      default:
        activeTab = (
          <PersonalTab
            personalState={this.state.personal}
            onChange={this.handlePersonalInputChange}
          />
        );
        break;
    }

    return (
      <main>
        <div className="form">
          <div className="tabs">
            <div
              className={`tab ${
                this.state.activeTab === "Personal" ? "active" : ""
              }`}
              onClick={() => this.setState({ activeTab: "Personal" })}
            >
              Personal
            </div>
            <div
              className={`tab ${
                this.state.activeTab === "Education" ? "active" : ""
              }`}
              onClick={() => this.setState({ activeTab: "Education" })}
            >
              Education
            </div>
            <div
              className={`tab ${
                this.state.activeTab === "Experience" ? "active" : ""
              }`}
              onClick={() => this.setState({ activeTab: "Experience" })}
            >
              Experience
            </div>
          </div>
          {activeTab}
        </div>
        <Link to="/preview" state={this.state}><button>Generate Preview</button></Link>
      </main>
    );
  }
}

import React, { Component } from "react";
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
          institution: "",
          degree: "",
          from: "",
          to: "",
          description: "",
        }
      ],
      experience: [
        {
          position: "",
          location: "",
          company: "",
          from: "",
          to: "",
          description: "",
        }
      ]
      // TODO: add state for controlled inputs
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    console.log(e.target.value);
    // TODO onChange event handler for controlled inputs
    const { name, value } = e.target;
    
    if (this.state.activeTab === "Personal") {
      console.log(this.state.personal)
      this.setState((state, props) => ({
        personal: {
          ...state.personal,
          [name]: value
        }
      }))
     }
  }

  render() {
    let activeTab;

    switch (this.state.activeTab) {
      case "Personal":
        activeTab = <PersonalTab personalState={this.state.personal} onChange={this.handleInputChange}/>;
        break;

      case "Education":
        activeTab = <EducationTab />;
        break;

      case "Experience":
        activeTab = <ExperienceTab />;
        break;

      default:
        activeTab = <PersonalTab />;
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
        <button>Generate Preview</button>
      </main>
    );
  }
}

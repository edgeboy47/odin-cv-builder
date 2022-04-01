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
    };
  }

  render() {
    let activeTab;

    switch (this.state.activeTab) {
      case "Personal":
        activeTab = <PersonalTab />;
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
          {/* <PersonalTab /> */}
          {activeTab}
        </div>
        <button>Generate Preview</button>
      </main>
    );
  }
}

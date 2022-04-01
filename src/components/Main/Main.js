import React, { Component } from 'react'
import './Main.css';

export default class Main extends Component {
  render() {
    return (
      <main>
        <div className="form">
          <div className="tabs">
            <div className="tab active">Personal</div>
            <div className="tab">Education</div>
            <div className="tab">Experience</div>
          </div>
        </div>
      </main>
    )
  }
}

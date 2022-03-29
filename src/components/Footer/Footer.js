import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        edgeboy47
        <a href="https://github.com/edgeboy47">
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
      </footer>
    );
  }
}

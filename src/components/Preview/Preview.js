import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Preview.module.css";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const Preview = () => {
  const { state } = useLocation();
  const { personal, education, experience } = state;

  return (
    <div className={styles.page}>
      <div className={styles.preview}>
        <div className={styles.title}>
          {personal.fName} {personal.lName}
          <div className={styles.title_details}>
            <div>
              {personal.email && <FontAwesomeIcon icon={faEnvelope} />}{" "}
              {personal.email}
            </div>
            <div>
              {personal.phone && <FontAwesomeIcon icon={faPhone} />}{" "}
              {personal.phone}
            </div>
            <div>
              {(personal.street || personal.city || personal.country) && (
                <FontAwesomeIcon icon={faLocationDot} />
              )}{" "}
              {personal.street}, {personal.city}, {personal.country}
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.personal}></div>
          <div className={styles.experience}>
            {experience[0] && experience[0].position && (
              <span className={styles.header}>Experience</span>
            )}
            {experience[0] &&
              experience[0].position &&
              experience.map((item) => <ExperienceItem experience={item} />)}
          </div>
          <div className={styles.education}>
            {education[0] && education[0].degree && (
              <span className={styles.header}>Education</span>
            )}
            {education[0] &&
              education[0].degree &&
              education.map((item) => <EducationItem education={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceItem = ({ experience }) => {
  return (
    <div className={styles.exp_item}>
      <div className={styles.flex}>
        <span className={styles.position}>{experience.position}</span>{" "}
        <span>{`${experience.from} - ${experience.to}`}</span>
      </div>
      <span className={styles.company}>
        {experience.company}, {experience.location}
      </span>
      <div>{experience.description}</div>
    </div>
  );
};

const EducationItem = ({ education }) => {
  return (
    <div className={styles.exp_item}>
      <div className={styles.flex}>
        <span className={styles.position}>{education.degree}</span>{" "}
        <span>{`${education.from} - ${education.to}`}</span>
      </div>
      <span className={styles.company}>{education.institution}</span>
      <div>{education.description}</div>
    </div>
  );
};

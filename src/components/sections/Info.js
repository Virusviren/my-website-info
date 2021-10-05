import React from "react";

import MainInfo from "../MainInfo";

import {
  workExperience,
  education,
  softSkills,
} from "../../static/information/information";

import photo from "../../static/photos/photo.jpg";

import Grid from "@mui/material/Grid";

const Info = () => {
  return (
    <Grid container className="info">
      <h1>Hi, I'm Viren 👋</h1>
      <h1>
        I'm a Full Stack developer who is well versed in modern javascript
        frameworks and libraries
      </h1>
      <Grid
        container
        alignItems="center"
        className="info-block-container"
        justifyContent="center"
        gap={12}
      >
        <Grid item={4}>
          <img src={photo} alt="profile-pic" />
        </Grid>
        <Grid item={8}>
          <MainInfo />
        </Grid>
      </Grid>
      <Grid container className="other-info">
        <Grid item lg={4}>
          <h2>
            💼
            <span>Work Experience</span>
          </h2>
          {workExperience.map((item) => (
            <div className="other-info-item">
              <h3>{item.companyName}</h3>
              <p>{item.position}</p>
              <p>{item.duration}</p>
            </div>
          ))}
        </Grid>
        <Grid item lg={4}>
          <h2>
            🎓
            <span>Education</span>
          </h2>
          {education.map((item) => (
            <div className="other-info-item">
              <h3>{item.university}</h3>
              <p>{item.course}</p>
              <p>{item.duration}</p>
            </div>
          ))}
        </Grid>
        <Grid item lg={4}>
          <h2>
            🤝
            <span>Soft skills</span>
          </h2>
          <div className="soft-skills">
            {softSkills.map((item) => (
              <h3>{item}</h3>
            ))}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Info;

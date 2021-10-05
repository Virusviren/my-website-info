import React from "react";

import { projects } from "../../static/information/information";

import live from "../../static/icons/http.svg";
import code from "../../static/icons/coding.svg";

import Grid from "@mui/material/Grid";

const Projects = () => {
  return (
    <Grid container id="projects">
      <h2>
        📋
        <span>Projects</span>
      </h2>
      <Grid container gap={6} alignItems="center" justifyContent="center">
        {projects.map((project) => (
          <Grid item lg={3} className="project">
            <h3>{project.projectName}</h3>
            <hr />
            <p>{project.description}</p>
            <Grid container alignItems="center" gap={2}>
              <Grid item>
                <img src={live} alt="live" />
              </Grid>
              <Grid item>
                <a href={project.liveURL} target="__blank">
                  <button>Live</button>
                </a>
              </Grid>
              <Grid item style={{ marginLeft: "2rem" }}>
                <img src={code} alt="code" />
              </Grid>
              <Grid item>
                <a href={project.codeURL} target="__blank">
                  <button>Code</button>
                </a>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Projects;

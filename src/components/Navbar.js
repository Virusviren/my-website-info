import React from "react";

import linkedInLogo from "../static/icons/linkedin.svg";
import githubLogo from "../static/icons/github.svg";
import emailLogo from "../static/icons/email.svg";

import Grid from "@mui/material/Grid";

const Navbar = () => {
  return (
    <Grid container className="navbar" alignItems="center">
      <Grid item lg={6}>
        <Grid container gap={2} className="text-links">
          <Grid item>
            <a href="/">home</a>
          </Grid>
          <Grid item>
            <a href="#projects">projects</a>
          </Grid>
          <Grid item>
            <a href="#contact">contact</a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={6}>
        <Grid container gap={3} justifyContent="end">
          <Grid item>
            <a href="/">
              <img src={linkedInLogo} alt="linkedin-logo" />
            </a>
          </Grid>
          <Grid item>
            <a href="/">
              <img src={githubLogo} alt="github-logo" />
            </a>
          </Grid>
          <Grid item>
            <a href="mailto:virenpatil1@outlook.com">
              <img src={emailLogo} alt="email-logo" />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;

import React from "react";

import { contact } from "../../static/information/information";

import Grid from "@mui/material/Grid";

const Contact = () => {
  return (
    <Grid container id="contact">
      <h2>
        📮
        <span>Contact</span>
      </h2>
      <Grid container gap={6} alignItems="center" justifyContent="center">
        {contact.map((item) => (
          <Grid item>
            <a
              href={item.url}
              target={item.urlTarget}
              download={item.name === "CV" ? "CV" : false}
            >
              <h3>{item.name}</h3>
            </a>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Contact;

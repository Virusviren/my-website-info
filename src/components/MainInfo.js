import React from "react";

import Summary from "./Summary";
import { technologies, tools } from "../static/information/information";

const MainInfo = () => {
  return (
    <div>
      <div className="info-block">
        <h2>
          👨
          <span>About Me</span>
        </h2>
        <Summary />
      </div>
      <div className="info-block">
        <h2>
          💻
          <span>Technologies</span>
        </h2>
        <div>
          {technologies.map((item) => (
            <span className="technologies">{item}</span>
          ))}
        </div>
      </div>
      <div className="info-block">
        <h2>
          🛠️
          <span>Tools</span>
        </h2>
        <div>
          {tools.map((item) => (
            <span className="tools">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainInfo;

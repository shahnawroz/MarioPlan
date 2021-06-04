import React from "react";
import ProjectSummary from "../projects/ProjectSummary";

const ProjectList = () => {
  return (
    <div className="container section project-details">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

export default ProjectList;

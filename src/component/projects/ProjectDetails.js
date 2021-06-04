import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-contet">
          <span className="card-title">Poject TItle - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            asperiores molestiae, consequatur dicta minima voluptate, animi
            recusandae fugiat neque velit et nihil dolorem labore sunt omnis vel
            libero blanditiis consequuntur.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By Shah Nawroz</div>
          <div>8th June, 2:30pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

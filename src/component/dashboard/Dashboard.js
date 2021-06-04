import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList />
          </div>
          {/* this div for projectlist */}
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
          {/* this div for notification */}
        </div>
      </div>
    );
  }
}

export default Dashboard;

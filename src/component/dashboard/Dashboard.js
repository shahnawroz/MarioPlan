import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import {connect} from 'react-redux'

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const {projects} = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList  projects={projects}/>
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

const mapStateToProps=(state)=>{
return{
  projects:state.project.projects,
}
}


export default connect(mapStateToProps) (Dashboard);

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./component/dashboard/Dashboard";
import NavBar from "./component/layout/NavBar";
import ProjectDetails from "./component/projects/ProjectDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

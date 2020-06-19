import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import NavBar from "./navbar";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../Utils/PrivateRoute";
import Users from "./users";
import SideNav from "./sideNav";
import Reports from "./report";

class Dashboard extends Component {
  state = {
    displaySideNav: false,
  };

  togglesidenav = ({ displaySideNav: prevstate } = this.state) => {
    this.setState({ displaySideNav: !prevstate });
    console.log(prevstate);
  };

  render() {
    return (
      <div className="w-100">
        <NavBar togglenav={this.togglesidenav} />
        <div className="container-fluid">
          <div className="row">
            <SideNav displaySideNav={this.state.displaySideNav} />
            <div className="col container" style={{ height: "auto" }}>
              <Switch>
                <Reports exact path="/dashboard" />
                <PrivateRoute
                  path="/dashboard/veiwUsers"
                  component={Users}
                ></PrivateRoute>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

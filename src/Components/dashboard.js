import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import NavBar from './navbar';
import SideBar from './sidebar'

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div className="row col-12">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            Welcome to Dashboard
          </div>
        </div>
      </div >
    );
  }
}

export default Dashboard;

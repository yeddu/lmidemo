import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import NavBar from "./navbar";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-2"
              style={{
                padding: "0px",
                height: "100vh",
                backgroundColor: "#F0F2F1",
              }}
            >
              <h5 className="side-nav-heading m-0">Menu</h5>
              <ul className="side-nav">
                <li className="side-nav-item">
                  <Link to="">NavLink1</Link>
                </li>
                <li className="side-nav-item">
                  <Link to="">NavLink1</Link>
                </li>
                <li className="side-nav-item">
                  <Link to="">NavLink1</Link>
                </li>
              </ul>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

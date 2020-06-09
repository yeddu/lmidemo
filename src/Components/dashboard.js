import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import NavBar from "./navbar";

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
      <div>
        <NavBar togglenav={this.togglesidenav} />
        <div className="container-fluid">
          <div className="row">
            <div
              className={
                !this.state.displaySideNav
                  ? "col-2 side-nav-main"
                  : "col-4 side-nav-main" + "side-nav-main-display"
              }
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
            <div className="col" style={{ height: "100vh" }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

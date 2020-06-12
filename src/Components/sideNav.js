import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
class SideNav extends Component {
  state = {};
  render() {
    return (
      <div
        className={
          !this.props.displaySideNav
            ? "col-2 side-nav-main"
            : "col-4 side-nav-main" + "side-nav-main-display"
        }
        style={{
          padding: "0px",
          backgroundColor: "#F0F2F1",
          minHeight: "100vh",
          height: "auto",
        }}
      >
        <h5 className="side-nav-heading m-0">Menu</h5>
        <ul className="side-nav">
          <li className="side-nav-item">
            <Link to="/dashboard/veiwUsers">View Users</Link>
          </li>
          <li className="side-nav-item">
            <Link to="">NavLink1</Link>
          </li>
          <li className="side-nav-item">
            <Link to="">NavLink1</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideNav;

import React, { Component } from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

import { getUser, removeUserSession } from "../Utils/Common";
class Header extends Component {
  state = {
    lastLogged: null,
  };
  handleLogout = (props) => {
    removeUserSession();
    window.location.href = "/";
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="header-main row">
          <div className="logo-section col-6">
            <ul className="logo-main">
              <li>
                <span>
                  <h1 className="mt-2" style={{ color: "white" }}>
                    LOGO
                  </h1>
                </span>
              </li>
            </ul>
          </div>
          <div className="user-info-log col-6" style={{ padding: "0px" }}>
            {getUser() && (
              <ul className="">
                <li>
                  <input
                    type="button"
                    className="btn-logout"
                    onClick={() => {
                      this.handleLogout();
                    }}
                    value="Logout"
                  />
                </li>
                <li>
                  <span>Welcome {getUser().name}</span>
                </li>
                <li>
                  <span>Last Logged :{this.state.lastLogged}</span>
                </li>
              </ul>
            )}
            {getUser() == null && (
              <ul className="mt-2">
                <li className="">
                  <Link
                    className="nav-link d-inline py-1"
                    to={"/login"}
                    style={{ backgroundColor: "#e74b23" }}
                  >
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

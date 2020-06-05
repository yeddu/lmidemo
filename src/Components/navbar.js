import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { getUser, removeUserSession } from "../Utils/Common";

function NavBar(props) {
  // const handleLogout = () => {
  //   removeUserSession();
  //   props.history.push('/login');
  // }
  return (
    <div className="">
      <nav
        className="navbar navbar-expand-lg navbar-expand-sm navbar-light p-0 border-top border-bottom border-dark"
        style={{ backgroundColor: "#114570" }}
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link className="nav-link border-right border-light">gjgjg</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link border-right border-light">gjgjg</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link border-right border-light">gjgjg</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default withRouter(NavBar);

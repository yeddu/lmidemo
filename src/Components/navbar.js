import React, { Component, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "../styles/Navbar.css";
import { getUser, removeUserSession } from '../Utils/Common';
import NotFoundPage from "../notFoundPage";


class NavBar extends Component {
  // const handleLogout = () => {
  //   removeUserSession();
  //   props.history.push('/login');
  // }
  constructor(props) {
    super(props);
    this.state = {
      displayProfileSubmenu: false,
    };
  }
  toggleProfileMenu = () => {
    this.setState({ displayProfileSubmenu: !this.state.displayProfileSubmenu });
  }; 


  render() {
    return (
      <div className="">
        <nav
          className="navbar navbar-expand-lg navbar-expand-sm navbar-light p-0 border-top border-bottom border-dark"
          style={{ backgroundColor: "#114570" }}
        >
          <div
            className="hamb-menu"
            onClick={() => {
              this.props.togglenav();
            }}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <ul className="navbar-nav nav-main mr-auto">
            <li className="nav-item ">
              <Link
                className="nav-link border-right border-light"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link border-right border-light" to="">
                Generate Quote
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link border-right border-light" to="">
                Renew Policy
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link border-right border-light" to="">
                Process Claim
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link"  to=""> 
                <i
                  className="fa fa-user-circle"
                  onClick={() => {
                    this.toggleProfileMenu();
                  }}
                ></i>
              </Link>
              <div className="profile-submenu">
                <ul
                  className={
                    !this.state.displayProfileSubmenu ? "hide-item" : ""
                  }
                >
                  <li>
                    <Link to="/editProfile">Veiw/Edit Profile</Link>
                  </li>
                  <li>
                    <Link to="/updatePassword">Update password</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavBar;

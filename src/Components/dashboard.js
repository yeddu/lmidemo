import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import NavBar from './navbar';
import SideBar from './sidebar'

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
      <div className="">
          <NavBar  togglenav={this.togglesidenav}/>
        <div className="row col-12">
          <div className="col-3">
            <SideBar displayProp={this.state.displaySideNav}/>
          </div>
          <div className="col-9">
            Welcome to Dashboard
          </div >
        </div>
      </div>
    );
  }
}

export default Dashboard;

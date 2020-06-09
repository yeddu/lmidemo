import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { getUser, removeUserSession } from '../Utils/Common';

function NavBar(props) {
  // const handleLogout = () => {
  //   removeUserSession();
  //   props.history.push('/login');
  // }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav ml-auto">
          <li></li>
        </ul>
      </nav>
    </div >
  );
}
export default withRouter(NavBar);

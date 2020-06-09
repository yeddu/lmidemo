import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import axios from 'axios';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignUp from "./Components/signup.component.js";
import Header from "./Components/header";
import Footer from "./Components/footer"
import Login from './Login';
import Dashboard from './Components/dashboard';
import Home from './Home';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import NotFoundPage from "./notFoundPage";
import  ResetPWD from './Components/ResetPWD';

import { getUser, getToken, removeUserSession, setUserSession } from './Utils/Common';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    //return <div className="content">Checking Authentication...</div>
  }


  return (
    <div>
      <Header />
      <Switch>
          <Route exact path="/" component={Login} />
          <PublicRoute path="/login" component={Login} />
          <Route path="/resetPWD" component={ResetPWD}/>
          <Route path="/sign-up" component={SignUp} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    <Footer />
    </div >
  );
}

export default withRouter(App);

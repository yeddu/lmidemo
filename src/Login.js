import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession, getUser } from './Utils/Common';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom'
import {API_ROOT,SIGIN} from './config/constants'

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  
  // handle button click of login form
  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    await axios.post(`${API_ROOT}${SIGIN}`, { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
      props.history.push('/login');
    });
  }
  if (getUser() != null) {
    return <Redirect to="/dashboard" />
  }
  return (
    <div className="">
      <div className="auth-wrapper">
        <div className="auth-inner ">
          <div>
            <h3>Log In</h3>
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                {...username}
                autoComplete="new-password"
                className="form-control"
                placeholder="Enter User Name"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                {...password}
                autoComplete="new-password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <input
              type="button"
              className="btn btn-primary btn-block"
              value={loading ? "Loading..." : "Login"}
              onClick={handleLogin}
              disabled={loading}
              style={{ backgroundColor: "#114570" }}
            />
            <br />
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;
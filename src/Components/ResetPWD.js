import React, { Component } from "react";
import "../styles/styles.css";
import Axios from "axios";
import { setTimer } from "../Utils/Common";
import Skeleton from "react-loading-skeleton";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class ResetPWD extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.resetpWDOnChange = this.resetpWDOnChange.bind(this);
    this.togglePwdView = this.togglePwdView.bind(this);
    this.state = {
      valid: true,
      nPwdValid: true,
      cNPwdValid: true,
      hideReset: false,
      hidePAndConfirmPWD: true,
      didnotMatchAtt: true,
      validPWD: true,
      empty: true,
    };
  }

  togglePwdView() {
    var x = document.getElementById("NPwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  handleReset = () => {
    if (this.state.hidePAndConfirmPWD) {
      this.checkMailOrMobileExists();
    } else {
      this.handleResetPassword();
    }
  };

  checkMailOrMobileExists() {
    var resetPin = document.getElementById("res").value;

    if (validEmailRegex.test(resetPin)) {
      this.setState({
        valid: true,
        hideReset: true,
        hidePAndConfirmPWD: false,
      });
    } else {
      this.setState({
        valid: false,
      });
    }
    setTimer(1);
  }

  handleResetPassword() {
    var pwd = document.getElementById("NPwd").value;
    var cpwd = document.getElementById("CNPwd").value;
    if (pwd === cpwd && pwd !== "" && cpwd !== "") {
      this.props.history.push("/login");
      this.setState({
        nPwdValid: true,
        didnotMatchAtt: false,
      });
    } else {
      if (pwd === "" && cpwd === "") {
        this.setState({
          nPwdValid: false,
        });
      } else {
        this.setState({
          didnotMatchAtt: false,
          nPwdValid: true,
        });
      }
    }
  }

  resetpWDOnChange(e) {
    // e.prevent.default();
    var val = document.getElementById("res").value;

    if (validEmailRegex.test(val)) {
      this.setState({
        valid: true,
      });
    } else {
      this.setState({
        valid: false,
      });
    }
  }
  render() {
    return (
      <div className="resetPwd" style={{ height: "83vh" }}>
        <div className="auth-wrapper mb-3">
          <div className=" auth-inner">
            <div className="form-group required">
              <div hidden={this.state.hideReset}>
                <label className="control-lable" htmlFor="res">
                  Reset password
                </label>
                <input
                  id="res"
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter valid email id or mobile number"
                />
                <span hidden={this.state.valid} className="error-msg">
                  your entered email is not valid
                </span>
              </div>
              <div hidden={this.state.hidePAndConfirmPWD}>
                <div>
                  <label className="control-lable" htmlFor="NPwd">
                    New password
                  </label>
                  <div className="df-row">
                    <input
                      id="NPwd"
                      type="password"
                      className="form-control mb-3"
                      placeholder="Enter your new password"
                    />
                    <button
                      className="btn-mask-pwd btn-secondary "
                      onClick={this.togglePwdView}
                    ></button>
                  </div>
                  <span hidden={this.state.nPwdValid} className="error-msg">
                    enter a password
                  </span>
                </div>
                <div>
                  <label className="control-lable" htmlFor="CNPwd">
                    Confirm new password
                  </label>
                  <input
                    id="CNPwd"
                    type="password"
                    className="form-control mb-3"
                    placeholder="Re enter new password"
                  />
                  <span
                    hidden={this.state.didnotMatchAtt}
                    className="error-msg"
                  >
                    Password doesn't match
                  </span>
                </div>

                <div>
                  <label className="control-lable" htmlFor="OTP">
                    Enter Otp send to your email/mobile
                  </label>
                  <input
                    id="OTP"
                    type="password"
                    className="form-control mb-3"
                    placeholder=""
                  />
                </div>

                <div className="otp-timer-text">
                  <p> sent otp will work for 2 minutes only </p>
                  <p id="timer"></p>
                </div>
              </div>
            </div>

            <button
              id="restBtn"
              className="btn-primary ml-6"
              onClick={this.handleReset}
            >
              {" "}
              Reset
            </button>
            <div id="timer" className="time"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPWD;

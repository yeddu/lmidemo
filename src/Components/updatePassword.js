import React, { Component } from "react";
import NavBar from "./navbar";

class UpdateUserPassword extends Component {
  state = {
    newPassword: "",
    confirmPassword: "",
    currentPassword: "",
    isInputValid: {
      newPassword: false,
      confirmPassword: false,
    },
    isTouched: {
      currentPassword: false,
      newPassword: false,
      confirmPassword: false,
    },
  };

  handleBlur = (e) => {
    const presentField = e.target.name;
    const presentFieldValue = e.target.value;

    this.setState({
      isTouched: { ...this.state.isTouched, [presentField]: true },
    });
  };
  handleChange = (e) => {
    const presentField = e.target.name;
    const presentFieldValue = e.target.value;

    this.setState({ [presentField]: presentFieldValue });
    switch (presentField) {
      case "newPassword":
        if (
          presentFieldValue.match(
            /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&@? "])[a-zA-Z0-9!#$%&?]{8,16}$/
          )
        ) {
          this.setState({
            isInputValid: { ...this.isInputValid, [presentField]: true },
          });
        } else {
          this.setState({
            isInputValid: { ...this.isInputValid, [presentField]: false },
          });
        }
        break;
      case "confirmPassword":
        if (this.state.newPassword === presentFieldValue) {
          this.setState({
            isInputValid: { ...this.isInputValid, [presentField]: true },
          });
        } else {
          this.setState({
            isInputValid: { ...this.isInputValid, [presentField]: false },
          });
        }
        break;
    }
  };
  render() {
    return (
      <div>
        <NavBar />
        <div className="container mt-4" style={{ height: "90vh" }}>
          <h4>Update your password</h4>
          <form className="form-group">
            <div className="form-group">
              <label htmlFor="currentPassword">Current password</label>
              <input
                className="form-control"
                type="password"
                placeholder="enter your current password"
                name="currentPassword"
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                value={this.state.currentPassword}
              ></input>
              {this.state.isTouched.currentPassword &&
              this.state.currentPassword === "" ? (
                <small className="text-danger position-absolute">
                  Current password cannot be blank
                </small>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                className="form-control"
                type="password"
                name="newPassword"
                placeholder="enter your new password"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={this.state.newPassword}
              ></input>
              {!this.state.isInputValid.newPassword &&
              this.state.isTouched.newPassword ? (
                <small className="text-danger position-absolute">
                  Password didn't match the requirement
                </small>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm new password</label>
              <input
                className="form-control"
                type="password"
                name="confirmPassword"
                placeholder="confirm your new password"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={this.state.confirmPassword}
              ></input>
              {!this.state.isInputValid.confirmPassword &&
              this.state.isTouched.confirmPassword ? (
                <small className="text-danger position-absolute">
                  Password did not match the new password
                </small>
              ) : (
                ""
              )}
            </div>
            <div className="form-group mt-4">
              <button
                className="btn btn-primary mr-2"
                disabled={
                  !(
                    this.state.isInputValid.newPassword &&
                    this.state.isInputValid.confirmPassword
                  )
                }
              >
                Update Password
              </button>
              <button className="btn btn-primary">Reset</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateUserPassword;

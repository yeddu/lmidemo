import React, { Component } from "react";
import NavBar from "./navbar";
import Axios from "axios";

class EditUserProfile extends Component {
  state = {
    username: "",
    emailid: "",
    groupId: "",
    role: "",
    isInputValid: {
      username: true,
      emailid: true,
    },
  };
  componentDidMount() {
    Axios.post("http://localhost:4000/users/signin", {
      username: "cluemediator",
      password: "123456",
    }).then((result) => {
      this.setState({
        username: result.data.user.username,
        emailid: result.data.user.email,
        groupId: result.data.user.groupId,
        role: result.data.user.role,
      });
      //console.log(result);
    });
    // console.log(this.state);
  }

  handleOnChange = (e) => {
    const presentField = e.target.name;
    const presentFieldValue = e.target.value;

    this.setState({ [presentField]: presentFieldValue });
    switch (e.target.name) {
      case "username":
        if (presentFieldValue.match(/^[a-zA-Z0-9]{5,12}$/)) {
          this.setState({
            isInputValid: { ...this.state.isInputValid, [presentField]: true },
          });
        } else {
          this.setState({
            isInputValid: { ...this.state.isInputValid, [presentField]: false },
          });
        }
        break;
      case "emailid":
        if (
          presentFieldValue.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
          )
        ) {
          this.setState({
            isInputValid: { ...this.state.isInputValid, [presentField]: true },
          });
        } else {
          this.setState({
            isInputValid: { ...this.state.isInputValid, [presentField]: false },
          });
        }
        break;
    }
  };

  handleUpdateProfile = () => {};
  handleResetToDefault = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/users/signin", {
      username: "cluemediator",
      password: "123456",
    }).then((result) => {
      this.setState({
        username: result.data.user.username,
        emailid: result.data.user.email,
      });
      //console.log(result);
      this.setState({ isInputValid: { username: true, emailid: true } });
    });
  };
  render() {
    return (
      <div>
        <NavBar />
        <div className="container mt-4" style={{ height: "90vh" }}>
          <div>
            <h4>Your Profile</h4>
            <form className="form-group" style={{}}>
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  className="form-control"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleOnChange}
                ></input>
                {this.state.isInputValid.username ? (
                  ""
                ) : (
                  <small className="text-danger position-absolute">
                    {" "}
                    UserName should be min of 5 and max of 12 alphanumeric
                    characters.
                  </small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="emailid">Email</label>
                <input
                  className="form-control"
                  name="emailid"
                  onChange={this.handleOnChange}
                  value={this.state.emailid}
                ></input>
                {this.state.isInputValid.emailid ? (
                  ""
                ) : (
                  <small className="text-danger position-absolute">
                    Email should be of format xyz@abc.com
                  </small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <input
                  className="form-control"
                  value={this.state.role}
                  readOnly="true"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="groupid">Group-ID</label>
                <input
                  className="form-control"
                  value={this.state.groupId}
                  readOnly="true"
                ></input>
              </div>

              <div className="form-group mt-4">
                <button
                  className="btn btn-primary mr-2"
                  onClick={this.handleUpdateProfile()}
                  disabled={
                    !(
                      this.state.isInputValid.username &&
                      this.state.isInputValid.emailid
                    )
                  }
                >
                  Update
                </button>
                <button
                  className="btn btn-primary"
                  onClick={this.handleResetToDefault}
                >
                  Reset to default
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUserProfile;

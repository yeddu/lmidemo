import React, { Component } from "react";
import Axios from "axios";
class Users extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    Axios.get("http://localhost:4000/users").then((result) => {
      this.setState({ users: result.data });
      console.log(this.state.users);
    });
  }
  render() {
    return (
      <div className="mt-3">
        <h3 className="text-center">Users</h3>
        <table className="table border">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email ID</th>
              <th>Role</th>
              <th>Group ID</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.groupId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;

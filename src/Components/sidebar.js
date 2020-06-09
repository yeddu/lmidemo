import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SideBar extends Component {
    render() {
        return (
            <div className="" style={{ padding: "0px" }}>
                <div
                    className="col-12"
                    style={{
                        padding: "0px",
                        height: "100vh",
                        backgroundColor: "#F0F2F1",
                    }}
                >
                    <ul className="side-nav">
                        <li className="side-nav-item">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="side-nav-item">
                            <Link to="/sendmail">Send Email</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;
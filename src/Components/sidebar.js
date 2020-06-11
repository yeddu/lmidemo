import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SideBar extends Component {
    state = {
        displayProp: false,
      };

    render() {
        return (
            <div className="" style={{ padding: "0px" }}>
                <div className="col-12">
                    <div
                        className={
                            !this.props.displayProp
                                ? "col-12 side-nav-main"
                                : "col-12 side-nav-main" + "side-nav-main-display"
                        }
                        style={{
                            padding: "0px",
                            height: "100vh",
                            backgroundColor: "#F0F2F1",
                        }}
                    >
                        <h5 className="side-nav-heading m-0">Menu</h5>
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
            </div>
        );
    }
}

export default SideBar;
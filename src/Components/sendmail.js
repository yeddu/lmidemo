import React, { Component, useState } from 'react';
import NavBar from './navbar';
import SideBar from './sidebar'
import { Link, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import { API_ROOT, SEND_MAIL } from '../config/constants'

class SendMail extends Component {
    constructor() {
        super();
        this.state = {
            "email": '',
            "content": ''
        }
        this.onChange = this.onChange.bind(this);
    }
    //console.log(this.state);

    sendmail = async (props) => {
        await axios.post(`${API_ROOT}${SEND_MAIL}`, {
            email: this.state.email, content: this.state.content
        }).then(response => {
            alert(response.data.message)
            window.location.reload();
        }).catch(error => {
            alert("Something went wrong. Please try again.");
            window.location.reload();
        });
    };
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="row col-12">
                    <div className="col-3">
                        <SideBar />
                    </div>
                    <div className="col-9">
                        <form>
                            <div className="card">
                                <div className="card-header bg-primary">
                                    Send EMail
                                </div>
                                <div className="card-body">

                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            required id="inputAddress"
                                            placeholder="Enter Email"
                                            value={this.state.email}
                                            onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <textarea rows="10"
                                            name="content"
                                            className="form-control"
                                            required
                                            placeholder="Enter Email Content here"
                                            value={this.state.content}
                                            onChange={this.onChange} />
                                    </div>
                                    <div className="text-right">
                                        <Link onClick={this.sendmail} className="btn btn-primary">Send Mail</Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </div >
        );
    }
}

export default withRouter(SendMail);
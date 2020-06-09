import React, { Component ,useState} from 'react';
import {hasHistory} from 'react-router'
import axios from 'axios';
import {setTimer} from '../Utils/Common';
import {withRouter}from 'react-router-dom'

 class LoginUsingOTP extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.handleLogin= this.handleLogin.bind(this);
        this.checkLoginWithOTP= this.checkLoginWithOTP.bind(this);
        this.checkMobile= this.checkMobile.bind(this);
        this.state={
            loading:false,
            showOTP:true,
        }
    }
    
    checkMobile= ()=>{
        
        this.setState({
            // loading:true,
            showOTP:false
        });
        setTimer(1);
    }

    checkLoginWithOTP=  ()=>{
       
        this.props.history.push("/resetPWD")
       
           } 
    handleLogin= ()=>{
           
        if(this.state.showOTP){
            this.checkMobile();
        }
        else{
            this.checkLoginWithOTP();
        }
        }
    
    render() {
        return (
            <div >
                <hr></hr>
                <div >
                    <label className="control-lable" htmlFor="res">Mobile number</label>
                    <input
                    id="res"
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter valid mobile number"
                    />
                    <span hidden={true} className="error-msg"></span>
                </div>
                <div hidden={this.state.showOTP} style={{marginTop:20}} >
                        <label className="control-lable" htmlFor="OTP">Enter Otp send to your email/mobile</label>
                        <input
                        id="OTP"
                        type="password"
                        className="form-control mb-3"
                        placeholder=""
                        />                        
                    </div>
                        
                    <div hidden={this.state.showOTP} className="otp-timer-text">
                            <p> sent otp will work for 2 minutes only </p>
                            <p id="timer"></p>
                    </div>
                    <input
                        type="button"
                        className="btn btn-primary btn-block"
                        value={this.state.loading ? "Loading..." : "Login"}
                        onClick={this.handleLogin}
                        disabled={this.state.loading}
                        style={{ backgroundColor: "#114570" }}
                    />
                   
                
            </div>
        )
    }
}
export default withRouter(LoginUsingOTP);
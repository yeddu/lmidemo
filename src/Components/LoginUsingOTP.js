import React, { Component } from 'react';
import {setTimer} from '../Utils/Common';
import {withRouter}from 'react-router-dom';
import {mobileRegex} from '../Utils/Regex'
import {numeric} from '../Utils/numeric'
 class LoginUsingOTP extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.handleLogin= this.handleLogin.bind(this);
        this.checkLoginWithOTP= this.checkLoginWithOTP.bind(this);
        this.checkMobile= this.checkMobile.bind(this);
        this.enterNumberOnly= this.enterNumberOnly.bind(this)
        this.state={
            loading:false,
            showOTP:true,
            mobValid:true,
        }
    }
    enterNumberOnly(){
        var mob = document.getElementById("mobile");
        var invalidChar=/[^0-9]/gi;
        if(invalidChar.test(mob.value)){
           
            var  newstring = mob.value.replace(invalidChar, "");
            mob.value=newstring;
            }
    }
    checkMobile= ()=>{
        var mob= document.getElementById("mobile").value;
        if(mobileRegex.test(mob)){
           
            this.setState({
                // loading:true,
                showOTP:false,
                mobValid:true
            });
            setTimer(1);
        }
        else{
          
            this.setState({
                // loading:true,
                mobValid:false
            });
        }
        
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
                    id="mobile"
                    maxLength="10"
                    type="text"
                    className="form-control mb-3 numeric"
                    placeholder="Enter valid 10 digit mobile number"
                    onKeyUp={this.enterNumberOnly}
                    />
                    <span hidden={this.state.mobValid} className="error-msg">enter valid mobile number</span>
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
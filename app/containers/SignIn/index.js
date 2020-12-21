
import React, { Component } from "react";
import "./index.css";

export default class SignIn extends Component {
    render() {
        return (
            <div className="container h-100 ">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="container d-flex flex-column justify-content-center align-items-center">
                        <form className="col-4  rounded border pt-5 pb-5 signin">
                            <h2 className="text-center">Sign in</h2>
                            <div className="text-center social-btn">
                                <a href="#" className="btn btn-primary btn-block"><i className="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
                                <a href="#" className="btn btn-info btn-block"><i className="fa fa-twitter"></i> Sign in with <b>Twitter</b></a>
                                <a href="#" className="btn btn-danger btn-block"><i className="fa fa-google"></i> Sign in with <b>Google</b></a>
                            </div>
                            <div className="or-seperator"><i>or</i></div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <span className="fa fa-user"></span>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" name="username" placeholder="Username" required="required" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                    <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success btn-block login-btn">Sign in</button>
                            </div>
                            <div className="clearfix">
                                <label className="float-left form-check-label"><input type="checkbox" /> Remember me</label>
                                <a href="#" className="float-right text-success">Forgot Password?</a>
                            </div>

                        </form>
                        <div className="hint-text">Don't have an account? <a href="#" className="text-success">Register Now!</a></div>
                    </div>
                </div>
            </div>
        );
    }
}
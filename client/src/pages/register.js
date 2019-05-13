import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import Axios from "axios";

import "./login.scss";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      fullname: "",
      phone: "",
      address: "",
      isMale: true,
      directToLogin: false
    };
  }

  onFieldChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = async e => {
    e.preventDefault();
    if (this.state.username == "" || this.state.password == "") {
      return alert("Username and password can not be empty");
    }
    if (this.state.confirmPassword != this.state.password) {
      return alert("Confirm password is not match with password");
    }
    Axios.post("/auth/register", {
      username: this.state.username,
      password: this.state.password,
      fullname: this.state.fullname,
      phone: this.state.phone,
      address: this.state.address,
      isMale: true // TODO: Concern if this is necessary.
    })
      .then(response => {
        alert("Register successfully!");
        this.setState({ directToLogin: true });
      })
      .catch(error => {
        if (error.response.status != 200)
          alert(
            error.response.data.errors ||
              "Ops! Something went wrong. Please try again."
          );
      });
  };

  render() {
    if (this.props.isAuthenticated) return <Redirect to="/home" />;
    if (this.state.directToLogin) return <Redirect to="/login" />;

    return (
      <div className="AuthPage">
        <div className="layer">
          <form onSubmit={this.onFormSubmit} className="form-auth-page">
            <h2>Family Services</h2>
            <h5 className="mb-3 mt-1">Create a new account</h5>
            <div className="form-group">
              <i className="fa fa-user" />
              <input
                type="text"
                placeholder="Username"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onFieldChange}
              />
            </div>
            <div className="form-group">
              <i className="fa fa-key" />
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onFieldChange}
              />
            </div>
            <div className="form-group">
              <i className="fa fa-key" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.onFieldChange}
              />
            </div>
            <div className="form-group">
              <i className="fa fa-id-card" />
              <input
                type="text"
                placeholder="Full Name"
                className="form-control"
                name="fullname"
                value={this.state.fullname}
                onChange={this.onFieldChange}
              />
            </div>
            <div className="form-group">
              <i className="fa fa-phone" />
              <input
                type="tel"
                placeholder="Phone number"
                className="form-control"
                name="phone"
                value={this.state.phone}
                onChange={this.onFieldChange}
              />
            </div>
            <div className="form-group">
              <i className="fa fa-map" />
              <input
                type="text"
                placeholder="Address"
                className="form-control"
                name="address"
                value={this.state.address}
                onChange={this.onFieldChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-block btn-success"
              onClick={this.onFormSubmit}
            >
              Sign Up
            </button>
            {this.props.signUpError && (
              <div className="alert alert-danger text-center my-2">Error</div>
            )}
            <hr />
            <Link to="/login" className="btn btn-block btn-outline-danger mt-3">
              Back to login
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

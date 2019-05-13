import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import Axios from "axios";

import "./login.scss";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      username: "",
      password: ""
    };
  }

  logInUser = async (username, password) => {
    try {
      const { data: token } = await Axios.post("/auth/login", {
        username,
        password
      });
      this.props.loginSuccess(true, username, token);
      this.setState({ isLogin: true, username: username });
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  onFormSubmit = async e => {
    e.preventDefault();
    if (this.state.username === "" || this.state.password === "") {
      return alert("Username and password can not be empty");
    }
    this.logInUser(this.state.username, this.state.password);
    // const { username, token } = await this.logInUser(
    //   this.state.username,
    //   this.state.password
    // );
    // localStorage.setItem(username, username);
    // localStorage.setItem(token, token);
    // this.setState({ isLogin: true });
  };

  onFieldChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.state.isLogin) return <Redirect to="/home" />;

    return (
      <div className="AuthPage">
        <div className="layer" />
        <form onSubmit={this.onFormSubmit} className="form-auth-page">
          <h2>Login Page</h2>
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
          <button
            type="submit"
            className="btn btn-block btn-success"
            onClick={this.onFormSubmit}
          >
            Login
          </button>
          <hr />
          <Link
            to="/register"
            className="btn btn-block btn-outline-danger mt-3"
          >
            Create a new account
          </Link>
        </form>
      </div>
    );
  }
}

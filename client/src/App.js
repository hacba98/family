import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./home/home.js";
import LoginPage from "./pages/login";
import Register from "./pages/register";
import Post from "./home/view-post.js";

class App extends Component {
  state = {
    isLogin: false,
    username: "",
    token: ""
  };

  loginSuccess = (value, username, token) => {
    if (value)
      this.setState({ isLogin: value, username: username, token: token });
    else this.setState({ isLogin: false, username: "" });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/login"
            render={() => <LoginPage loginSuccess={this.loginSuccess} />}
          />
          <Route path="/home" render={() => <Home {...this.state} />} />
          <Route path="/register" component={Register} />
          <Route path="/post" render={() => <Post {...this.state} />} />
          <Route
            render={() => <LoginPage loginSuccess={this.loginSuccess} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

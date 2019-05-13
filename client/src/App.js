import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Home from "./home/home.js";
import Post from "./post/post.js";
import LoginPage from "./pages/login";
import Register from "./pages/register";

class App extends Component {
  state = {
    isLogin: false,
    username: "",
    token: ""
  };

  loginSuccess = (value, username, token) => {
    if (this.state.isLogin)
      this.setState({ isLogin: value, username: username, token: token });
    else this.setState({ isLogin: false, username: "" });
  };

  render() {
    return (
      // <div className="App">
      //   <Home/>
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      //   <Post/>
      // </div>
      <BrowserRouter>
        <Switch>
          <Route
            path="/login"
            render={() => <LoginPage loginSuccess={this.loginSuccess} />}
          />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

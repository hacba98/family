import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

import NavBar from "./navbar";
import Post from "./post";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentWillMount() {
    Axios.get("/post/get").then(res => {
      this.setState({ posts: res.data.data });
    });
  }

  renderPost() {
    return this.state.posts.map(item => {
      console.log(item);
      return <Post {...item} />;
    });
  }

  render() {
    if (!this.props.isLogin) return <Redirect to="/login" />;
    return (
      <div>
        <NavBar />
        {this.renderPost()}
      </div>
    );
  }
}

export default Home;

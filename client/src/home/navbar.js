import React from 'react';
import {NavLink} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Family</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto float-right">

          </ul>
          
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/"><i class="fa fa-fw fa-envelope"></i>Thông báo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/"><i class="fa fa-fw fa-user"></i>Cá nhân</a>
            </li>
          </ul>
          <NavLink to="/post"><button class="btn btn-info" >Đăng tin</button></NavLink>
        </div>
      </nav>
    );
  }
}
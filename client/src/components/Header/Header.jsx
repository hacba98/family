import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {NavLink} from "react-router-dom";

// material-ui icons
import SearchIcon from '@material-ui/icons/Search';

// core components

//style
import headerStyle from "assets/jss/material-dashboard-pro-react/components/headerStyle.jsx";

function Header({ ...props }) {
  const { classes, color } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex2} />
        <NavLink to="/dashboard">
        <Typography className={classes.grow}>
          Giới thiệu
        </Typography>
        </NavLink>

        <Typography className={classes.grow}></Typography>

        <NavLink to="/dichvu">
        <Typography className={classes.grow}>
          Dịch vụ
        </Typography>
        </NavLink>

        <Typography className={classes.grow}></Typography>

        <NavLink to="/dat_dv_nhanh">
        <Typography className={classes.grow}>
          Đặt dịch vụ nhanh
        </Typography>
        </NavLink>

        <Typography className={classes.grow}></Typography>

        <NavLink to="/lich_su">
        <Typography className={classes.grow}>
          Lịch sử
        </Typography>
        </NavLink>

        <Typography className={classes.grow}></Typography>

        <NavLink to="#">
        <Typography className={classes.grow}>
          Liên hệ
        </Typography>
        </NavLink>

        <div className={classes.flex} />

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Nhập dịch vụ bạn cần tìm"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
      </Toolbar>
    </AppBar>

  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool
};

export default withStyles(headerStyle)(Header);

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';

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
        <Typography className={classes.grow}>
          Giới thiệu
        </Typography>
        <Typography className={classes.grow}>
          Dịch vụ
        </Typography>
        <Typography className={classes.grow}>
          Đăng ký nhận việc
        </Typography>
        <Typography className={classes.grow}>
          Góc cho bạn
        </Typography>
        <Typography className={classes.grow}>
          Liên hệ
        </Typography>

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

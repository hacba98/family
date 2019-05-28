import React from "react";
import PropTypes from "prop-types";
// import  cx from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";

import footerStyle from "assets/jss/material-dashboard-pro-react/components/footerStyle";

function Footer({ ...props }) {
  // const { classes, fluid, white } = props;
  // var container = cx({
  //   [classes.container]: !fluid,
  //   [classes.containerFluid]: fluid,
  //   [classes.whiteColor]: white
  // });

  return (
    // <footer className={classes.footer}>
    //   <div className={container}>
    //     <div className={classes.left}>
    //       <List className={classes.list}>
    //         <ListItem className={classes.inlineBlock}>
    //           binhe ne
    //         </ListItem>
    //         <ListItem className={classes.inlineBlock}>
    //           manh ne
    //         </ListItem>
    //         <ListItem className={classes.inlineBlock}>
    //          cuong ne
    //         </ListItem>
    //         <ListItem className={classes.inlineBlock}>

    //         </ListItem>
    //       </List>
    //     </div>
    //     <p className={classes.right}>
    //       &copy; {1900 + new Date().getYear()}{" "}
    //       {"Thực tập công nghệ phần mềm"}
    //     </p>
    //   </div>
    // </footer>


    <footer className="page-footer text-white bg-dark font-small stylish-color-dark pt-4">
      {/* Footer Links */}
      <div className="container text-center text-md-left">
        {/* Grid row */}
        <div className="row">
          {/* Grid column */}
          <div className="col-md-3 mx-auto">
            {/* Content */}
            <h5 className="font-weight-bold text-uppercase mt-1 mb-1">Châm ngôn</h5>
            <p>Sự hài lòng của quý khách hàng là niềm vui của chúng tôi.</p>
          </div>
          {/* Grid column */}
          <hr className="clearfix w-100 d-md-none" />
          {/* Grid column */}
          <div className="col-md-9 mx-auto">
            {/* Links */}
            <h5 className="font-weight-bold text-uppercase mt-1 mb-1">DANH MỤC DỊCH VỤ</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Sửa thiết bị gia đình</a>
              </li>
              <li>
                <a href="#!">Xây dựng, điện nước</a>
              </li>
              <li>
                <a href="#!">Dịch vụ văn phòng</a>
              </li>
              <li>
                <a href="#!">Ô tô, xe điện, xe máy</a>
              </li>
              <li>
                <a href="#!">Dịch vụ gia đình</a>
              </li>
            </ul>
          </div>

          {/* Grid column */}
          <hr className="clearfix w-100 d-md-none" />
          {/* Grid column */}


        </div>
        {/* Grid row */}
      </div>
      {/* Footer Links */}
      <hr />
      {/* Call to action */}
      <ul className="list-unstyled list-inline text-center py-2">
        <li className="list-inline-item">
          <h5 className="mb-1">Register for free</h5>
        </li>
        <li className="list-inline-item">
          <a href="#!" className="btn btn-danger btn-rounded">Sign up!</a>
        </li>
      </ul>
      {/* Call to action */}
      <hr />
      {/* Social buttons */}
      <ul className="list-unstyled list-inline text-center">
        <li className="list-inline-item">
          <a className="btn-floating btn-fb mx-1">
            <i className="fab fa-facebook-f"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-tw mx-1">
            <i className="fab fa-twitter"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-gplus mx-1">
            <i className="fab fa-google-plus-g"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-li mx-1">
            <i className="fab fa-linkedin-in"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-dribbble mx-1">
            <i className="fab fa-dribbble"> </i>
          </a>
        </li>
      </ul>
      {/* Social buttons */}
      {/* Copyright */}
      <div className="footer-copyright text-center py-3">© 2019 Copyright:
    <a href="https://github.com/hacba98/family"> Link Source Code Github</a>
      </div>
      {/* Copyright */}
    </footer>




  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);

import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem";
import Sidebar from "./Sidebar.jsx";

import withStyles from "@material-ui/core/styles/withStyles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "views/Charts/style.jsx";

import bepga from "assets/img/image/bepga.jpg"
import dieuhoa from "assets/img/image/dieuhoa.jpg"
import ongnuoc from "assets/img/image/ongnuoc.jpg"
import bomnuoc from "assets/img/image/bomnuoc.jpg"
import khoacua from "assets/img/image/khoacua.jpg"


class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleSelect: "",
    }
  }

  handleClick() {
    alert("this is ok");
  }

  render() {
    // const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs>
        </GridItem>
        <GridItem xs={2.5}>
          <Sidebar />


        </GridItem >

        <GridItem xs={8}>
          <div style={{ width: "100%", margin: "auto" }}>
            <div id="carousel-id" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="item">
                  <img alt="First slide" src={ongnuoc} />
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Thợ sữa ống nước, thiết bị nhà vệ sinh</h1>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <img alt="Second slide" src={bepga} />
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Sữa bếp ga tại nhà</h1>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <img alt="Second slide" src={bomnuoc} />
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Sữa máy bơm nước</h1>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <img alt="Third slide" src={khoacua} />
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Thợ sữa khóa</h1>
                    </div>
                  </div>
                </div>

                <div className="item active">
                  <img alt="Third slide" src={dieuhoa} />
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Sữa điều hòa, bảo dưỡng điều hòa</h1>
                    </div>
                  </div>
                </div>

              </div>
              <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
              <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
            </div>
          </div>
        </GridItem>
        <GridItem xs={1}>

        </GridItem>
      </GridContainer >
    );
  }
}

export default withStyles(style)(Charts);

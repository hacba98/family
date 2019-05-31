import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem";
import { ListGroup, ListGroupItem } from 'reactstrap';

import withStyles from "@material-ui/core/styles/withStyles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "views/Charts/style.jsx";

import bepga from "assets/img/image/bepga.jpg"
import dieuhoa from "assets/img/image/dieuhoa.jpg"
import ongnuoc from "assets/img/image/ongnuoc.jpg"
import bomnuoc from "assets/img/image/bomnuoc.jpg"
import khoacua from "assets/img/image/khoacua.jpg"

import icon01 from "assets/img/icon/icon01.png"
import icon02 from "assets/img/icon/icon02.jpg"
import icon03 from "assets/img/icon/icon03.jpg"
import icon04 from "assets/img/icon/icon04.jpg"
import icon05 from "assets/img/icon/icon05.jpg"
import icon06 from "assets/img/icon/icon06.jpg"

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
          <ListGroup >
            <ListGroupItem active style={{ fontWeight: "bold", height: "50px", fontSize: "20px" }}>
              <img src={icon01} alt="..." width="32px" height="32px%"></img> Danh mục dịch vụ
            </ListGroupItem>
            <ListGroupItem onClick={this.handleClick} action style={{ height: "50px", fontSize: "18px" }}>
              <img src={icon02} alt="..." width="32px" height="32px%"></img> Sửa thiết bị gia đình
            </ListGroupItem>
            <ListGroupItem onClick={this.handleClick} action style={{ height: "50px", fontSize: "18px" }}>
              <img src={icon03} alt="..." width="32px" height="32px%"></img> Xây dựng, điện nước
            </ListGroupItem>
            <ListGroupItem onClick={this.handleClick} action style={{ height: "50px", fontSize: "18px" }}>
              <img src={icon04} alt="..." width="32px" height="32px%"></img> Dịch vụ văn phòng
            </ListGroupItem>
            <ListGroupItem onClick={this.handleClick} action style={{ height: "50px", fontSize: "18px" }}>
              <img src={icon05} alt="..." width="32px" height="32px%"></img> Ô tô, xe điện, xe máy
            </ListGroupItem>
            <ListGroupItem onClick={this.handleClick} action style={{ height: "50px", fontSize: "18px" }}>
              <img src={icon06} alt="..." width="32px" height="32px%"></img> Dịch vụ gia đình
            </ListGroupItem>
          </ListGroup>
        </GridItem >

        <GridItem xs={8}>
          <div style={{ width: "100%", margin: "auto" }}>
            <div id="carousel-id" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="item">
                  <img alt="First slide" src={ongnuoc}/>
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

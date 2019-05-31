import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import axios from "axios";

import Datetime from "react-datetime";
import FormControl from "@material-ui/core/FormControl";
import CardIcon from "components/Card/CardIcon.jsx";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import AvTimer from "@material-ui/icons/AvTimer";

// core components
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardText from "components/Card/CardText.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListAlt from '@material-ui/icons/ListAlt';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Person from "@material-ui/icons/Person"
import Room from "@material-ui/icons/Room";
import BorderColor from "@material-ui/icons/BorderColor";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import postFormStyle from "assets/jss/material-dashboard-pro-react/views/postFormStyle";
import { ListGroup, ListGroupItem } from 'reactstrap';
import Modal from 'react-awesome-modal';

import icon02 from "assets/img/icon/icon02.jpg"
import icon03 from "assets/img/icon/icon03.jpg"
import icon04 from "assets/img/icon/icon04.jpg"
import icon05 from "assets/img/icon/icon05.jpg"
import icon06 from "assets/img/icon/icon06.jpg"


const dichvu = [
  "Sữa thiết bị gia đình",
  "Xây dựng, điện nước",
  "Dịch vụ văn phòng",
  "Ô tô, xe điện, xe máy",
  "Dịch vụ gia đình"
]

const dichvucon = [
  [
    "Sữa điều hòa, bão dưỡng điều hòa",
    "Sữa tivi tại nhà",
    "Sữa quạt điện",
  ],
  [
    "Sửa điện tại nhà",
    "Thợ sửa khóa",
    "Sửa máy bơm nước"
  ],
  [],
  [],
  [],
  [],
]

class RegularForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
      detail: "",
      address: "",
      phoneNumber: "",
      name: "",
      dichvu: "",
      dichvucon: "",
      index: 0,
      index2: 0,
      show: false,
      show2: false,
    };
    this.getDate = this.getDate.bind(this);
    this.getTime = this.getTime.bind(this);
    this.getName = this.getName.bind(this);
    this.getDetail = this.getDetail.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.getPhoneNumber = this.getPhoneNumber.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state.openModal = this.openModal.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
    this.state.openModal2 = this.openModal2.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
  }

  handleSubmit(){
    const {address, dichvu, dichvucon, detail, phoneNumber, name, data} = this.state;
    return axios.post(
      "localhost:8000/post/request/" + localStorage.getItem("id"), {
        address, dichvu, dichvucon, detail, phoneNumber, name, data
      }, { 
        headers: { "Authorization": localStorage.getItem("token")}
      })
      .then(alert("Yêu cầu dịch vụ thành công")
    )
  }

  getDate(event) {
    this.setState({
      date: String(event._d).slice(4, 16)
    })
    console.log(String(event._d).slice(4, 16));
  }

  getTime(event) {
    this.setState({
      time: String(event._d).slice(16, 21)
    })
    console.log(String(event._d).slice(16, 21));
  }

  getDetail(event) {
    this.setState({
      detail: event.target.value
    })
    console.log(event.target.value);
  }

  getAddress(event) {
    this.setState({
      address: event.target.value
    })
    console.log(event.target.value);
  }

  getName(event) {
    this.setState({
      name: event.target.value
    })
    console.log(event.target.value);
  }

  getPhoneNumber(event) {
    this.setState({
      phoneNumber: event.target.value
    })
    console.log(event.target.value);
  }

  closeModal() {
    this.setState({
      show: false
    });
  }

  openModal() {
    this.setState({
      show: true
    })
  }

  closeModal2() {
    this.setState({
      show2: false
    });
  }

  openModal2() {
    this.setState({
      show2: true
    })
  }

  handleClick1(param) {
    this.setState({
      dichvu: dichvu[param],
      index: param,
      show: false
    })
  }

  handleClick2(param) {
    this.setState({
      dichvucon: dichvucon[this.state.index][param],
      index2: param,
      show2: false
    })
    console.log(this.state.dichvu);
    console.log(dichvucon[this.state.index][param]);
  }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="rose" text>
              <CardText color="rose">
                <h4 style={{ color: "#FFFFFF", fontWeight: "bold", padding: "0 25px 0 25px" }}>Đặt dịch vụ</h4>
              </CardText>
            </CardHeader>

            <CardBody>
              <br />
              <Paper className={classes.root} elevation={3}>
                <Button
                  justIcon
                  round
                  simple
                  color="danger"
                  className="like"
                >
                  <MenuIcon />
                </Button>{" "}
                <Divider className={classes.divider} />
                <Button className={classes.button} color="transparent" onClick={() => this.openModal()}>
                  Chọn danh mục dịch vụ
                </Button>
                <IconButton className={classes.iconButton} onClick={() => this.openModal()}>
                  <ArrowDropDown />
                </IconButton>
              </Paper>

              <br />
              <Paper className={classes.root} elevation={3}>
                <Button
                  justIcon
                  round
                  simple
                  color="success"
                  className="like"
                >
                  <ListAlt />
                </Button>{" "}
                <Divider className={classes.divider} />
                <Button className={classes.button} color="transparent" onClick={() => this.openModal2()}>
                  Chọn dịch vụ bạn cần
                </Button>
                <IconButton className={classes.iconButton} onClick={() => this.openModal2()}>
                  <ArrowDropDown />
                </IconButton>
              </Paper>

              <br />
              <Paper className={classes.root} elevation={3}>
                <Button
                  justIcon
                  round
                  simple
                  color="info"
                  className="like"
                >
                  <PhoneIphone />
                </Button>{" "}
                <Divider className={classes.divider} />
                <InputBase type="number" className={classes.input} 
                  placeholder="Số điện thoại"
                  onChange={(event) => { this.getPhoneNumber(event) }}  
                />
              </Paper>

              <br />
              <Paper className={classes.root} elevation={3}>
                <Button
                  justIcon
                  round
                  simple
                  color="primary"
                  className="like"
                >
                  <Person />
                </Button>{" "}
                <Divider className={classes.divider} />
                <InputBase className={classes.input} 
                  placeholder="Tên khách hàng"
                  onChange={(event) => { this.getName(event) }} 
                />
              </Paper>

              <br />
              <Paper className={classes.root} elevation={3}>
                <Button
                  justIcon
                  round
                  simple
                  color="warning"
                  className="like"
                >
                  <Room />
                </Button>{" "}
                <Divider className={classes.divider} />
                <InputBase className={classes.input} onChange={(event) => { this.getAddress(event) }} placeholder="Địa chỉ" />
              </Paper>

              <br />
              <Paper className={classes.root} elevation={3}>
                <Button
                  justIcon
                  round
                  simple
                  color="danger"
                  className="like"
                >
                  <BorderColor />
                </Button>{" "}
                <textarea rows="4" style={{ width: "100%", fontSize: "18px", flex: "1", margin: 0 }}
                  placeholder=" Nội dung yêu cầu hoặc ghi chú cho thợ/đối tác tiếp nhận..."
                  onChange={(event) => { this.getDetail(event) }}
                >
                </textarea>
              </Paper>
              <br />
              <br />
              <GridContainer justify="center">
                <GridItem xs={6}>
                  <Card style={{ width: "80%", margin: "auto" }}>
                    <CardHeader color="rose" icon>
                      <CardIcon color="warning">
                        <LibraryBooks />
                      </CardIcon>
                      <h4 className={classes.cardIconTitle}>Chọn ngày</h4>
                    </CardHeader>
                    <CardBody>
                      <Paper className={classes.root} elevation={3}>
                        <FormControl fullWidth>
                          <Datetime
                            timeFormat={false}
                            inputProps={{ placeholder: "Chọn ngày" }}
                            onChange={(event) => { this.getDate(event) }}
                          />
                        </FormControl>
                      </Paper>
                    </CardBody>
                  </Card>
                </GridItem>

                <GridItem xs={6}>
                  <Card style={{ width: "80%", margin: "auto" }}>
                    <CardHeader color="rose" icon>
                      <CardIcon color="warning">
                        <AvTimer />
                      </CardIcon>
                      <h4 className={classes.cardIconTitle}>Chọn giờ</h4>
                    </CardHeader>
                    <CardBody>
                      <Paper className={classes.root} elevation={3}>
                        <FormControl fullWidth>
                          <Datetime
                            dateFormat={false}
                            inputProps={{ placeholder: "Chọn giờ" }}
                            onChange={(event) => { this.getTime(event) }}
                          />
                        </FormControl>
                      </Paper>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
              <br />

              <Modal visible={this.state.show} effect="fadeInDown" onClickAway={() => this.closeModal()}>
                <ListGroup style={{ width: "500px" }}>
                  <Card>
                    <CardHeader color="primary" text>
                      <CardText color="danger">
                        <h5 style={{ color: "#FFFFFF", fontWeight: "bold", padding: "0 25px 0 25px" }}>Chọn danh mục</h5>
                      </CardText>
                    </CardHeader>

                    <CardBody>

                      <ListGroupItem onClick={() => this.handleClick1(0)} action style={{ height: "50px", fontSize: "18px" }}>
                        <img src={icon02} alt="..." width="32px" height="32px"></img> Sửa thiết bị gia đình
                      </ListGroupItem>

                      <ListGroupItem onClick={() => this.handleClick1(1)} action style={{ height: "50px", fontSize: "18px" }}>
                        <img src={icon03} alt="..." width="32px" height="32px"></img> Xây dựng, điện
                      </ListGroupItem>

                      <ListGroupItem onClick={() => this.handleClick1(2)} action style={{ height: "50px", fontSize: "18px" }}>
                        <img src={icon04} alt="..." width="32px" height="32px"></img> Dịch vụ văn phòng
                      </ListGroupItem>

                      <ListGroupItem onClick={() => this.handleClick1(3)} action style={{ height: "50px", fontSize: "18px" }}>
                        <img src={icon05} alt="..." width="32px" height="32px"></img> Ô tô, xe điện, xe máy
                      </ListGroupItem>

                      <ListGroupItem onClick={() => this.handleClick1(4)} action style={{ height: "50px", fontSize: "18px" }}>
                        <img src={icon06} alt="..." width="32px" height="32px"></img> Dịch vụ gia đình
                      </ListGroupItem>
                    </CardBody>
                  </Card>
                </ListGroup>
              </Modal>

              <Modal visible={this.state.show2} effect="fadeInDown" onClickAway={() => this.closeModal2()}>
                <ListGroup style={{ width: "500px" }}>
                  <Card>
                    <CardHeader color="primary" text>
                      <CardText color="danger">
                        <h5 style={{ color: "#FFFFFF", fontWeight: "bold", padding: "0 25px 0 25px" }}>{dichvu[this.state.index]}</h5>
                      </CardText>
                    </CardHeader>

                    <CardBody>
                      {dichvucon[this.state.index].map((item, index) => {
                        return <ListGroupItem key={index} onClick={() => this.handleClick2(index)} action style={{ height: "50px", fontSize: "18px" }}>
                          <img src={icon02} alt="..." width="32px" height="32px"></img> {item}
                        </ListGroupItem>
                      })}
                    </CardBody>
                  </Card>
                </ListGroup>
              </Modal>

              <Button color="danger" 
                onClick = {() => this.handleSubmit()}
                style={{ marginLeft: "68%", width: "250px", height: "50px", marginTop: "10px", marginBottom: "15px" }}
              >
                  Gửi yên cầu
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(postFormStyle)(RegularForms);

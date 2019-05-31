import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

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

class RegularForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="rose" text>
              <CardText color="rose">
                <h3 style={{ color: "#FFFFFF", fontWeight: "bold", padding: "0 25px 0 25px" }}>Đặt dịch vụ</h3>
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
                <Button className={classes.button} color="transparent">
                  Chọn danh mục dịch vụ
                </Button>
                <IconButton className={classes.iconButton}>
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
                <Button className={classes.button} color="transparent">
                  Chọn dịch vụ bạn cần
                </Button>
                <IconButton className={classes.iconButton}>
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
                <InputBase className={classes.input} placeholder="Số điện thoại" />
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
                <InputBase className={classes.input} placeholder="Tên khách hàng" />
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
                <InputBase className={classes.input} placeholder="Địa chỉ" />
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
                  placeholder=" Nội dung yêu cầu hoặc ghi chú cho thợ/đối tác tiếp nhận...">
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
                          />
                        </FormControl>
                      </Paper>
                    </CardBody>
                  </Card>
                </GridItem>

                <GridItem xs={6} justify="center">
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
                          />
                        </FormControl>
                      </Paper>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
              <br />
              <Button color="danger" style={{marginLeft:"68%", width: "250px", height: "50px", marginTop: "10px"}}>Gửi yên cầu</Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(postFormStyle)(RegularForms);

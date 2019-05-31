import React from "react";
import { NavLink } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import sidebarStyle from "assets/jss/material-dashboard-pro-react/components/sidebarStyle.jsx";
import { ListGroup, ListGroupItem } from 'reactstrap';
import icon01 from "assets/img/icon/icon01.png"
import icon02 from "assets/img/icon/icon02.jpg"
import icon03 from "assets/img/icon/icon03.jpg"
import icon04 from "assets/img/icon/icon04.jpg"
import icon05 from "assets/img/icon/icon05.jpg"
import icon06 from "assets/img/icon/icon06.jpg"

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <ListGroup >
        <ListGroupItem active style={{ fontWeight: "bold", height: "50px", fontSize: "20px" }}>
          <img src={icon01} alt="..." width="32px" height="32px%"></img> Danh mục dịch vụ
        </ListGroupItem>
        
        <NavLink to="/thiet_bi_gia_dinh">
          <ListGroupItem onClick={this.handleClick} action style={{ height: "50px", fontSize: "18px" }}>
            <img src={icon02} alt="..." width="32px" height="32px%"></img> Sửa thiết bị gia đình
            </ListGroupItem>
        </NavLink>

        <NavLink to="/xay_dung_dien_nuoc">
          <ListGroupItem onClick={this.handleClick} action style={{ height: "50px", fontSize: "18px" }}>
            <img src={icon03} alt="..." width="32px" height="32px%"></img> Xây dựng, điện nước
            </ListGroupItem>
        </NavLink>

        <NavLink to="/dich_vu_van_phong">
          <ListGroupItem onClick={this.handleClick} action style={{ height: "50px", fontSize: "18px" }}>
            <img src={icon04} alt="..." width="32px" height="32px%"></img> Dịch vụ văn phòng
            </ListGroupItem>
        </NavLink>

        <NavLink to="/o_to_xe_dien_xe_may">
          <ListGroupItem onClick={this.handleClick} action style={{ height: "50px", fontSize: "18px" }}>
            <img src={icon05} alt="..." width="32px" height="32px%"></img> Ô tô, xe điện, xe máy
            </ListGroupItem>
        </NavLink>

        <NavLink to="/dich_vu_gia_dinh">
          <ListGroupItem onClick={this.handleClick} action style={{ height: "50px", fontSize: "18px" }}>
            <img src={icon06} alt="..." width="32px" height="32px%"></img> Dịch vụ gia đình
            </ListGroupItem>
        </NavLink>
      </ListGroup>
    );
  }
}

export default withStyles(sidebarStyle)(Sidebar);

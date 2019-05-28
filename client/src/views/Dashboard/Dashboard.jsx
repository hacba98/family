import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import img01 from "assets/img/image/img01.jfif"

import relax from "assets/img/image/relax.jpg"
import relax01 from "assets/img/image/relax01.jpg"
import relax02 from "assets/img/image/relax02.png"

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    // const { classes } = this.props;
    return (
      <div className="bg-white">
        <GridContainer>
          <GridItem xs={2}>
          </GridItem>
          <GridItem xs={8}>
            <h1 align="center" style={{ color: "#fb8533", fontWeight: 700, lineHeight: "1.2em", fontFamily: "'Quicksand',sans-serif" }}>Lướt - Chạm cho Cuộc sống thảnh thơi</h1>
            <br />
            <img src={img01} alt="..." width="100%" />
            <div style={{padding: "30px 100px 0px 100px"}}>
              <p style={{color: "#4a4a4a", fontSize: "16px", fontWeight: 500, fontFamily: '"Quicksand",sans-serif', textAlign: "center", margin: 0}}>
                Cuộc sống sẽ hạnh phúc hơn khi bạn có nhiều thời gian nghỉ ngơi, thư giãn và ở bên gia đình
                mà không phải lo lắng về công việc nhà. Ý tưởng về việc xây dựng một ứng dụng giúp việc nhà
                nhanh chóng được hiện thực hóa và trở thành giải pháp tối ưu nhất hiện nay cho các gia đình
                khi cần người giúp việc đến dọn dẹp nhà.
              </p>
            </div>
          </GridItem>
          <GridItem xs={2}>
          </GridItem>
        </GridContainer>
        <br/>
        <div className="row" style={{margin: "50px 30px"}}>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{padding: "100px 50px"}}>
          <p>Hãy để cuộc sống của bạn thảnh thơi hơn!</p>
          <p>Chúng tôi là công ty tiên phong ứng dụng nền tảng công nghệ vào ngành giúp việc gia đình ở Việt Nam, cho phép bạn cùng người giúp việc chủ động đăng và nhận việc trực tiếp trên ứng dụng web.</p>

          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <img src={relax} alt="..." width="100%" />
          </div>
        </div>

        <div className="row" style={{margin: "50px 30px"}}>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <img src={relax01} alt="..." width="100%" />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <img src={relax02} alt="..." width="100%" />
          </div>
        </div>
        
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);

import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import img01 from "assets/img/image/img01.jfif"

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
      <div>
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
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);

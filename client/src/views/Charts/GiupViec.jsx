import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Icon from "@material-ui/core/Icon"
import Sidebar from "./Sidebar.jsx";

import withStyles from "@material-ui/core/styles/withStyles";
import style from "views/Charts/style.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import giupviec from "assets/img/image/giupviec.jpg"
import giupviec01 from "assets/img/image/giupviec01.jpg"


import avt01 from "assets/img/avatar/avt01.jpg";


import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountBox from "@material-ui/icons/AccountBox";
import Build from "@material-ui/icons/Build";


class GiupViec extends React.Component {
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
		// const {classes} = this.props
		return (
			<GridContainer>
				<GridItem xs={1}>
				</GridItem>
				<GridItem xs={2.5}>
					<Sidebar/>
				</GridItem >

				<GridItem xs={8}>
					<div style={{ width: "100%", margin: "auto" }}>
						<div id="carousel-id" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="item active">
									<img alt="Third slide" src={giupviec} />
									<div className="container">
										<div className="carousel-caption">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="page-header">
						<h2 style={{ color: "green", fontWeight: "bold" }}>Gọi dịch vụ giúp việc theo giờ</h2>
					</div>

					<Button color="rose" style={{ width: "100%", height: "55px" }}>
						<p><ShoppingCart style={{ width: "30px", height: "30px", fontSize: "50" }} /> Đặt dịch vụ</p>
					</Button>
					<br />
					<br />
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<Card>
								<CardHeader color="rose" icon>
									<CardIcon color="rose">
										<AccountBox />
									</CardIcon>
									<div style={{ paddingLeft: "100px" }}>
										<h2 style={{ color: "green", fontWeight: "bold" }}>95.399</h2>
										<h3 style={{ color: "green" }}>Khách hàng đã sử dụng</h3>
									</div>
								</CardHeader>
							</Card>
						</GridItem>

						<GridItem xs={12} sm={12} md={4}>
							<Card>
								<CardHeader color="rose" icon>
									<CardIcon color="rose">
										<Build />
									</CardIcon>
									<div style={{ paddingLeft: "100px" }}>
										<h2 style={{ color: "green", fontWeight: "bold" }}>7.344</h2>
										<h3 style={{ color: "green" }}>Nhà cung cấp tham gia</h3>
									</div>
								</CardHeader>
							</Card>
						</GridItem>

						<GridItem xs={12} sm={12} md={4}>
							<Card>
								<CardHeader color="rose" icon>
									<CardIcon color="rose">
										<ShoppingCart />
									</CardIcon>
									<div style={{ paddingLeft: "100px" }}>
										<h2 style={{ color: "green", fontWeight: "bold" }}>140.203</h2>
										<h3 style={{ color: "green" }}>Đơn hàng đã phục vụ</h3>
									</div>
								</CardHeader>
							</Card>
						</GridItem>
					</GridContainer>


					<div className="panel panel-info">
						<div className="panel-heading">
							<h3 className="panel-title">Yêu cầu dịch vụ mới</h3>
						</div>
						<div className="panel-body">
							<div style={{ overflow: "hidden" }}>
								<p style={{ fontWeight: "bold", color: "#FF00FF", paddingLeft: "30px", float: "left" }}>Thời gian: </p>
								<p style={{ color: "#FF00FF", marginLeft: "130px", }}>19/02/2019 15:30:00</p>
							</div>

							<div style={{ overflow: "hidden" }}>
								<p style={{ fontWeight: "bold", color: "#FF00FF", paddingLeft: "30px", float: "left" }}>K.Hàng: </p>
								<p style={{ color: "#FF00FF", marginLeft: "130px", }}>Nguyễn Văn Tiến</p>
							</div>

							<div style={{ overflow: "hidden" }}>
								<p style={{ fontWeight: "bold", color: "#FF00FF", paddingLeft: "30px", float: "left" }}>Điện thoại: </p>
								<p style={{ color: "#FF00FF", marginLeft: "130px", }}>0522xxx890</p>
							</div>

							<div style={{ overflow: "hidden" }}>
								<p style={{ fontWeight: "bold", color: "#FF00FF", paddingLeft: "30px", float: "left" }}>Tại: </p>
								<p style={{ color: "#FF00FF", marginLeft: "130px", }}>Quận 10, Tp.Hồ Chí Minh</p>
							</div>

							<div style={{ overflow: "hidden" }}>
								<p style={{ fontWeight: "bold", color: "#FF00FF", paddingLeft: "30px", float: "left" }}>Đặt: </p>
								<p style={{ color: "#FF00FF", marginLeft: "130px", }}>Sữa điều hòa, bão dưỡng điều hòa</p>
							</div>
						</div>
					</div>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Giúp việc gia đình, giúp việc theo giờ, vệ sinh công nghiệp
					</h3>
					<p>Bạn có việc đột xuất? Giỗ chạp, cưới hỏi, dọn dẹp, chuyển nhà...?</p>
					<p>Bạn không có nhiều thời gian cho các công việc gia đình? Bạn không thể thuê riêng một người giúp việc trong nhà? Bạn cần một ai đó, trong thời gian ngắn có thể giúp bạn trong những lúc như vậy.</p>
					<p>Hãy đặt dịch vụ giúp việc theo giờ đảm bảo từ các nhà cung cấp trên Rada bạn nhé!</p>
					<p>Chúng t sẽ gửi yêu cầu của bạn đến hàng trăm nhà cung cấp dịch vụ giúp việc theo giờ, dịch vụ vệ sinh công nghiệp mà chúng tôi đã ký kết thỏa thuận hợp tác, thỏa thuận đảm bảo chất lượng để họ biết. Nếu họ sẵn sàng vào thời điểm mà bạn yêu cầu, họ sẽ kết nối với bạn và trao đổi chi tiết về các dịch vụ đi kèm. Khi hai bên đồng ý với nhau, dịch vụ sẽ được triển khai như bạn mong muốn.</p>
					<p>Trong quá trình làm việc, nếu bạn cần góp ý hoặc có điểm gì đó chưa hài lòng, hãy nhanh chóng trao đổi thẳng thắn với người giúp việc của bạn, đừng ngại. Bạn cũng có thể báo ngay trên ứng dụng Rada với chúng tôi để điều chỉnh hoặc thay thế nhà cung cấp dịch vụ khác. Chúng tôi luôn sẵn sàng làm việc đó.</p>
					<br />

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Giá thành tham khảo giúp việc gia đình:
					</h3>
					<ul>
						<li><p>Lắp quạt trần:Bạn đặt đột xuất (trong vòng 3 tiếng): <a style={{ color: "red" }}>80.000đ - 90.000đ/giờ (đặt tối thiểu 3 giờ)</a>.</p></li>
						<li><p>Bạn đặt trước 1 ngày: <a style={{ color: "red" }}>55.000đ - 70.000đ/giờ (đặt tối thiểu 3 giờ)</a>.</p></li>
						<li><p>Vệ sinh tổng thể: <a style={{ color: "red" }}>70.000đ - 90.000đ/giờ (tối thiểu 4 giờ tùy thuộc vào hiện trạng công trình)</a>.</p></li>
						<li><p>Giá ngày công: <a style={{ color: "red" }}>400.000đ/ngày/người (đã có đầy đủ trang thiết bị dụng cụ)</a>.</p></li>
					</ul>

					<img src={giupviec01} alt="..." style={{ marginLeft: "10%" }} />
					
					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Các dịch vụ vệ sinh mà đối tác thực hiện:
					</h3>
					<ul>
						<li>Lau dọn vệ sinh nhà cửa, sân vườn, nhà xưởng, văn phòng làm việc</li>
						<li>Tẩy rửa, đánh bóng nhà, cửa kính, cửa gỗ</li>
						<li>Giúp việc hàng ngày, nấu cơm, rửa bát, giặt là, trông trẻ, trông người già...</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Cam kết về người giúp việc:
					</h3>
					<ul>
						<li>Đối với dịch vụ dọn vệ sinh tổng thể, người giúp việc đã được trang bị đầy đủ dụng cụ, hóa chất tẩy rửa, bảo hộ. Nhà cung cấp không sử dụng dụng cụ hoặc đồ tẩy rửa của gia đình trừ khi có yêu cầu đặc biệt.</li>
						<li>Chỉ cung cấp kết nối đến người giúp việc đã được đào tạo hoặc các trung tâm có uy tín.</li>
						<li>Nhà cung cấp, người giúp việc có hồ sơ, lý lịch rõ ràng.</li>
						<li>Trung thực, thật thà, chuyên nghiệp, vui vẻ, hiền lành.</li>
						<li>Chúng tôi chịu trách nhiệm hoàn tiền trong trường hợp mất mát do người giúp việc là đối tác gây ra.</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Lưu ý khi sử dụng người giúp việc trong gia đình:
					</h3>
					<ul>
						<li>Điều 15 Chi phí ăn ở, tiền lương không được thấp hơn tiền lương tối thiểu vùng.</li>
						<li>Điều 18 Tiền thưởng.</li>
						<li>Điều 19 Chi trả tiền bảo hiểm.</li>
						<li>Điều 21 Thời gian nghỉ ngơi tối thiểu.</li>
						<li>Điều 23 Được hưởng 12 ngày nghỉ phép năm cho 12 tháng làm việc.</li>
						<li>Điều 23 Được trả lương cho ngày nghỉ lễ, tết trong năm</li>
						<li>Điều 24 An toàn lao động, vệ sinh lao động.</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Top dịch vụ tin cậy
					</h3>
					<table class="table table-bordered table-hover">
						<thead>
							<tr>
								<th>Avatar</th>
								<th>Đại diện</th>
								<th>Dịch vụ</th>
								<th>Rate</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><img src={avt01} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>dieuhoa360.com</td>
								<td>Điện Lạnh Quang Thiện</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>
						</tbody>
					</table>
			
				</GridItem>

				<GridItem xs>
				</GridItem>
			</GridContainer >
		);
	}
}

export default withStyles(style)(GiupViec);

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

import xemay from "assets/img/image/xemay.jpg"


import avt01 from "assets/img/avatar/avt01.jpg";
import avt02 from "assets/img/avatar/avt02.jpg";
import avt03 from "assets/img/avatar/avt03.jpg";
import avt04 from "assets/img/avatar/avt04.jpg";
import avt05 from "assets/img/avatar/avt05.png";


import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountBox from "@material-ui/icons/AccountBox";
import Build from "@material-ui/icons/Build";


class XeMay extends React.Component {
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
									<img alt="Third slide" src={xemay} />
									<div className="container">
										<div className="carousel-caption">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="page-header">
						<h2 style={{ color: "green", fontWeight: "bold" }}>Dịch vụ thuê xe máy - 120k/ngày</h2>
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
					Dịch vụ thuê xe máy theo yêu cầu
					</h3>

					<p>
					Bạn cần thuê một chiếc xe máy để tự do di chuyển trong thành phố? Bạn muốn đi phượt bằng xe máy để ngắm cảnh thiên nhiên tươi đẹp? Bạn không muốn trả quá nhiều tiền cho việc đi lại bằng taxi?
					</p>
					<p>
					Hãy đặt dịch vụ thuê xe máy từ các nhà cung cấp dịch vụ của chúng tôi bất cứ khi nào bạn cần để nhận xe sao 30 phút.
					</p>
					<br />

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Thiết bị & mục công việc trong phạm vi:
					</h3>
					<ul>
						<li>Máy tính để bàn (PC), cài đặt, sửa chữa và cấu hình phần mềm</li>
						<li>Driver cho máy in, máy quét bao gồm cả máy in nối mạng</li>
						<li>Hệ điều hành và các phần mềm trên hệ điều hành: Windows, Linux, MacOS</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Chi phí giao/nhận xe tại nơi khách hàng yêu cầu
					</h3>
					<ul>
						<li>Giao xe/nhận xe tại nơi khách yêu cầu (1-5km): <a style={{ color: "red" }}>+ thêm 30.000đ/chiều</a></li>
						<li>Giao xe/nhận xe tại nơi khách yêu cầu (5-10km): <a style={{ color: "red" }}>+ thêm 55.000đ/chiều</a>
</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Thủ tục & trình tự quá trình thuê xe
					</h3>

					<ul>
						<li>Gửi yêu cầu dịch vụ từ ứng dụng chúng tôi đến nhà cung cấp dịch vụ gần nhất</li>
						<li>Nhà cung cấp sẵn sàng kết nối gọi điện cho bạn để xác nhận yêu cầu và trao đổi thủ tục</li>
						<li>Nhà cung cấp tiến hành chụp ảnh bạn, xác nhận số điện thoại (để đảm bảo tính pháp lý), viết biên nhận, hai bên ký kết</li>
						<li>Bạn nộp tiền đặt cọc, giấy tờ và vật phẩm đặt cọc cho nhà cung cấp dịch vụ.</li>
						<li>Nhà cung cấp đó giao xe cho bạn khi quá trình trên được xác thực.</li>
						<li><a style={{ color: "red" }}>Bạn tự đổ xăng</a> và di chuyển trong thời gian bạn thuê xe</li>
						<li>Kết thúc thời gian thuê, bạn mang xe đến điểm trả đã hẹn với nhà cung cấp</li>
						<li>Hai bên xác nhận thời gian thuê, tiến hành xác nhận thời gian và quyết toán giá thành.</li>
						<li>Giao xe lại cho nhà cung cấp, nhận lại tiền, giấy tờ & đồ vật đặt cọc.</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Lưu ý:
					</h3>
					<ul>
						<li>Chỉ sử dụng dịch vụ nếu hai bên thống nhất phương án sửa chữa, giá thành chi tiết.</li>
						<li>Chat/gọi cho chúng tôi nếu thấy điều gì bất thường.</li>
						<li>Đánh giá nhà cung cấp sau khi hoàn thành.</li>
						<li>Khiếu nại với chúng tôi nếu cảm thấy dịch vụ sửa TV chưa tốt để chúng tôi kiểm tra và loại bỏ các nhà cung cấp dịch vụ nếu không đáp ứng chất lượng yêu cầu.</li>
						<li>Hóa đơn (VAT): Bạn có thể yêu cầu xuất hóa đơn, nếu dịch vụ không đồng ý, bạn có thể từ chối kết nối và đánh giá, chấm điểm để chuyển sang dịch vụ khác.</li>
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
								<td>Rada 24x7</td>
								<td>Rada 24x7</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>
							<tr>
								<td><img src={avt02} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Nguyễn Trường Sơn</td>
								<td>Nguyễn Trường Sơn</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>

							<tr>
								<td><img src={avt03} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Gia Hưng Motorbike</td>
								<td>Gia Hưng Motorbike Rental</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>

							<tr>
								<td><img src={avt04} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Lê Hùng</td>
								<td>30A 013.88</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>

							<tr>
								<td><img src={avt05} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Nguyễn Vũ Quốc Anh</td>
								<td>Air Blade</td>
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

export default withStyles(style)(XeMay);

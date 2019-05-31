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

import cuuhoxemay from "assets/img/image/cuuhoxemay.jpg"


import avt01 from "assets/img/avatar/avt01.jpg";
import avt02 from "assets/img/avatar/avt02.jpg";
import avt03 from "assets/img/avatar/avt03.jpg";
import avt04 from "assets/img/avatar/avt04.jpg";
import avt05 from "assets/img/avatar/avt05.png";


import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountBox from "@material-ui/icons/AccountBox";
import Build from "@material-ui/icons/Build";


class CuuHoXeMay extends React.Component {
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
									<img alt="Third slide" src={cuuhoxemay} />
									<div className="container">
										<div className="carousel-caption">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="page-header">
						<h2 style={{ color: "green", fontWeight: "bold" }}>Cứu hộ, sửa chữa xe máy</h2>
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
					Xe của bạn không thể di chuyển được? Gặp trục trặc trên đường? Gặp tai nạn?
					</h3>
					<p>
					Yêu cầu của bạn sẽ gửi trực tiếp đến các điểm cứu hộ xe máy, các trung tâm dịch vụ mà chúng tôi tuyển dụng kỹ càng. Các dịch vụ cứu hộ gần nhất sẽ liên hệ với bạn để sửa chữa một số lỗi đơn giản như hóc khóa, săm lốp, hết xăng... hoặc hỗ trợ bạn đưa xe đến các cửa hàng gần nhất để sửa chữa nếu có hư hỏng lớn xẩy ra.
					</p>
					<p>Việc sửa chữa cứu hộ xe máy trên đường chỉ nhắm vào mục đích giúp bạn có thể di chuyển được chứ không thể xử lý hoàn toàn các vấn đề phát sinh xẩy ra vì công cụ mang đi sẽ không thể đầy đủ như tại cửa hàng dịch vụ xe máy.</p>
					<p>Việc sửa chữa xe máy trên đường giá thành có thể cao hơn bình thường vì các điểm dịch vụ cứu hộ xe máy phải di chuyển đến nơi bạn muốn sau đó sửa chữa sau đó quay về cửa hàng. Nếu bạn đồng ý với việc trả giá cao hơn thì mới nên sử dụng dịch vụ.</p>
					<p>Cơ cấu giá thành tham khảo:</p>
					<ul>
						<li>Tiền công cứu hộ xe máy: từ <a style={{ color: "red" }}>90.000 đ/lần -> 150.000 đ/lần tùy thuộc khoảng cách của bạn với điểm cứu hộ được kết nối. Tiền công này được trả trực tiếp cho người cứu hộ cho 1 lần thực hiện</a>.</li>
						<li>Thuê xe chở (nếu tai nạn): Tính riêng theo thực tế</li>
						<li>Công sửa chữa tại chỗ tham khảo: <a style={{ color: "red" }}>Theo thực tế</a>
							<ul>
								<li>Vá săm xe: <a style={{ color: "red" }}>35.000đ</a></li>
								<li>Vá dùi: <a style={{ color: "red" }}>25.000đ</a></li>
								<li>Thay săm xe: <a style={{ color: "red" }}>100.000đ</a></li>
								<li>Đổ xăng: <a style={{ color: "red" }}>Theo thực tế</a></li>
							</ul>
						</li>
						<li>Công sửa chữa tại cửa hàng: <a style={{ color: "red" }}>Theo thực tế</a></li>
					</ul>
					<br />

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Chúng tôi cam kết:
					</h3>
					<ul>
						<li>Đội ngũ tay nghề cao.</li>
						<li>Hoàn tiền nếu trục trặc trong vòng 1 tháng.</li>
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
								<td>911@Rada</td>
								<td>911@Rada</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>
							<tr>
								<td><img src={avt02} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Nguyễn Ngọc Hy</td>
								<td>Công ty TNHH Tuấn Huy</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>

							<tr>
								<td><img src={avt03} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Sửa Xe Moto Lưu Động TP Thanh Hóa</td>
								<td>Sửa Xe Moto Lưu Động TP Thanh Hóa</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>

							<tr>
								<td><img src={avt04} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Gia Dương Motor</td>
								<td>Cứu Hộ Xe Máy - Hà nội</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>

							<tr>
								<td><img src={avt05} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>MotoTech</td>
								<td>Cứu Hộ Xe Máy - MotoTech</td>
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

export default withStyles(style)(CuuHoXeMay);

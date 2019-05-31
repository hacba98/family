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

import suakhoa from "assets/img/image/suakhoa.jpg"


import avt01 from "assets/img/avatar/avt01.jpg";


import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountBox from "@material-ui/icons/AccountBox";
import Build from "@material-ui/icons/Build";


class SuaKhoa extends React.Component {
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
									<img alt="Third slide" src={suakhoa} />
									<div className="container">
										<div className="carousel-caption">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="page-header">
						<h2 style={{ color: "green", fontWeight: "bold" }}>Thợ sửa khóa</h2>
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
						Thợ sửa khóa
					</h3>

					<p>
						Mô tả thông tin về thương hiệu khóa mà bạn cần sửa chữa nếu có thể, tình trạng hoạt động, hiện tượng mà bạn gặp phải, ứng dụng sẽ chuyển thông tin này đến đội ngũ thợ sửa chữa uy tín mà chúng tôi tuyển dụng kỹ càng, họ sẽ nghiên cứu và phản hồi bạn về phương án xử lý. Nếu bạn đồng ý, dịch vụ sẽ được triển khai.
					</p>
					<br />

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Giá thành sửa khóa tại nhà:
					</h3>

					<ul>
						<li><p>Công dịch vụ tại nhà tối thiểu: <a style={{ color: "red" }}>150.000đ chi phí này áp dụng cho 1 lần thợ đến nhà để phục vụ khách hàng bao gồm việc khảo sát hoặc chi phí sửa chữa nhỏ có giá trị dưới 150.000đ</a></p></li>
						<li>
							<b>Khóa cửa nắm tròn:</b>
							<ul>
								<li><p>Mở cửa: <a style={{ color: "red" }}>50.000đ - 120.000đ/lần</a>.</p></li>
								<li><p>Sửa + đánh chìa mới: <a style={{ color: "red" }}>80.000đ - 150.000đ</a>.</p></li>
								<li><p>Thay mới khóa Thái Lan: <a style={{ color: "red" }}>170.000đ - 250.000đ</a>.</p></li>
								<li><p>Thay mới khóa Việt Tiệp: <a style={{ color: "red" }}>220.000đ - 340.000đ</a>.</p></li>
								<li><p>Thay mới khóa Nikke (Nhật): <a style={{ color: "red" }}>250.000đ - 350.000đ</a>.</p></li>
							</ul>
						</li>
						<li>
							<b>Khóa tay gạt:</b>
							<ul>
								<li><p>Các loại khóa tay gạt bình thường: <a style={{ color: "red" }}>80.000đ - 150.000đ</a>.</p></li>
								<li><p>Các loại khóa tay gạt cao cấp: <a style={{ color: "red" }}>120.000đ - 230.000đ</a>.</p></li>
							</ul>
						</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Chúng tôi cam kết:
					</h3>
					<ul>
						<li>Dịch vụ chỉ được triển khai khi hai bên thỏa thuận</li>
						<li>Thợ sửa điện tại nhà không được phép lấy công nếu sửa chữa không đạt yêu cầu như đã thỏa thuận.</li>
						<li>Bảo hành, bảo trì miễn phí trong 1 năm cho các nội dung thực hiện.</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Lưu ý:
					</h3>
					<ul>
						<li style={{ color: "red" }}>Giá mở khóa đơn giản chỉ là 50.000đ tuy nhiên công thợ tối thiểu cho một lần phục vụ là 150.000đ/lần vì vậy bạn nên nhờ thợ kiểm tra, tra dầu hoặc siết lại các ổ khóa khác để tối ưu tiền công mà mình phải chi trả.</li>
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
								<td><img src={avt01} alt="..." style={{ height: "25px", marginLeft: "10%", }} /></td>
								<td>dieuhoa360.com</td>
								<td>Điện Lạnh Quang Thiện</td>
								<td><Icon style={{ marginLeft: "20%" }}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
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

export default withStyles(style)(SuaKhoa);

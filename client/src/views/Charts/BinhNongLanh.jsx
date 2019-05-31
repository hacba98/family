import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Sidebar from "./Sidebar.jsx";

import Icon from "@material-ui/core/Icon"

import withStyles from "@material-ui/core/styles/withStyles";
import style from "views/Charts/style.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import binhnonglanh from "assets/img/image/binhnonglanh.jpg"
import binhnonglanh01 from "assets/img/image/binhnonglanh01.jpg"


import avt01 from "assets/img/avatar/avt01.jpg";


import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountBox from "@material-ui/icons/AccountBox";
import Build from "@material-ui/icons/Build";


class BinhNongLanh extends React.Component {
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
									<img alt="Third slide" src={binhnonglanh} />
									<div className="container">
										<div className="carousel-caption">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="page-header">
						<h2 style={{ color: "green", fontWeight: "bold" }}>Sửa bình nóng lạnh, bảo dưỡng tại nhà</h2>
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
										<h2 style={{ color: "green", fontWeight: "bold" }}>95.422</h2>
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
										<h2 style={{ color: "green", fontWeight: "bold" }}>7.347</h2>
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
										<h2 style={{ color: "green", fontWeight: "bold" }}>140.245</h2>
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
						Sửa bình nóng lạnh
					</h3>

					<p>
					Mô tả thông tin về bình nóng lạnh mà bạn cần sửa chữa, bảo dưỡng bao gồm nhãn hiệu, tình trạng hoạt động, hiện tượng mà bạn gặp phải, ứng dụng sẽ chuyển thông tin này đến đội ngũ thợ, dịch vụ sửa bình nóng lạnh uy tín mà chúng tôi tuyển dụng kỹ càng có khoảng cách gần bạn nhất họ sẽ nghiên cứu và phản hồi bạn về phương án xử lý. Nếu bạn đồng ý, dịch vụ sẽ được triển khai.
					</p>
					<p>
					<b>Các loại bình nóng lạnh thông dụng:</b> Ariston, Ferroli, Picenza, Rossi, Inax, Olimpic, Electrolux…
					</p>
					<br />
					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Quy trình tham khảo sửa chữa, bảo dưỡng bình nóng lạnh:
					</h3>
					<ol>
						<li>Kiểm tra tính ổn định của thiết bị</li>
						<li>Vệ sinh, bảo dưỡng</li>
						<li>Kiểm tra lại các linh kiện như sợi đốt, thanh magie: thay thế nếu thấy hiện tượng rỉ sét, ăn mòn cao.</li>
						<li>Xúc rửa cặn canxi trong máy bằng chất tẩy rửa chuyên dụng</li>
						<li>Lắp đặt lại nguyên trạng thiết bị sau khi bảo dưỡng</li>
						<li>Đấu thêm dây chống giật nếu cần thiết</li>
					</ol>

					<img src={binhnonglanh01} alt="..." style={{ marginLeft: "10%" }} />

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Giá thành tham khảo sửa bình nóng lạnh:
					</h3>

					<ul>
						<li><p>Kiểm tra, chuẩn đoán: <a style={{ color: "red" }}>100.000đ/lần</a> (chi phí này áp dụng trong trường hợp bạn chỉ khám/kiểm tra mà không sử dụng dịch vụ sửa bình nóng lạnh của thợ, trường hợp sửa chữa sẽ không tính chi phí này)</p></li>
					</ul>
					
					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Chúng tôi cam kết:
					</h3>
					<ul>
						<li>Chúng tôi chỉ tuyển dụng đội ngũ thợ sửa bình nóng lạnh tay nghề cao và các trung tâm dịch vụ có uy tín hoạt động lâu năm trên thị trường được khách hàng đánh giá cao.</li>
						<li>Không thu tiền nếu không khắc phục được sự cố</li>
						<li>Hoàn tiền nếu trục trặc trong vòng 1 tháng</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Lưu ý:
					</h3>
					<ul>
						<li>Chỉ sử dụng dịch vụ nếu hai bên thống nhất phương án sửa chữa, giá thành chi tiết.</li>
						<li>Chat/gọi cho chúng tôi nếu thấy điều gì bất thường.</li>
						<li>Đánh giá nhà cung cấp sau khi hoàn thành.</li>
						<li>Khiếu nại với chúng tôi nếu cảm thấy dịch vụ chưa tốt.</li>
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

export default withStyles(style)(BinhNongLanh);

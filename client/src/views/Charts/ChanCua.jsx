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

import chancua from "assets/img/image/chancua.jpg"
import chancua01 from "assets/img/image/chancua01.jpg"

import avt01 from "assets/img/avatar/avt01.jpg";
import avt02 from "assets/img/avatar/avt02.jpg";
import avt03 from "assets/img/avatar/avt03.jpg";
import avt04 from "assets/img/avatar/avt04.jpg";
import avt05 from "assets/img/avatar/avt05.png";


import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountBox from "@material-ui/icons/AccountBox";
import Build from "@material-ui/icons/Build";


class ChanCua extends React.Component {
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
									<img alt="Third slide" src={chancua} />
									<div className="container">
										<div className="carousel-caption">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="page-header">
						<h2 style={{ color: "green", fontWeight: "bold" }}>Thanh chắn cửa Ravo - 700.000đ/bộ</h2>
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
					Dịch vụ lắp đặt thanh chắn cửa Ravo
					</h3>
					<p>"ĐỂ ÂU LO KHÔNG VỀ SAU CÁNH CỬA"</p>
					<p>Nếu như <b>"Nhà là nơi bình yên nhất"</b> thì cánh cửa chính là người bảo vệ sự bình yên ấy.</p>
					<p>Nhưng nếu chỉ là một cánh cửa đơn thuần, liệu có thể giữ được sự an toàn cho gia đình bạn khỏi tiếng ồn, những ảnh hưởng môi trường  hay yếu tố khắc nghiệt của thời tiết?</p>
					<p>Với mong muốn gìn giữ môi trường sống của mọi gia đình, AMO xin trân trọng giới thiệu một chiến binh quả cảm trong công cuộc bảo vệ sự bình yên của mỗi gia đình: RAVO - <b>Thiết bị chặn đáy cửa tự động</b>.</p>
					<br />

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Với các ưu điểm nổi bật, RAVO sẽ giúp gia đình bạn loại bỏ hoàn toàn:
					</h3>
					<ul>
						<li>KHÓI, BỤI </li>
						<li>TIẾNG ỒN XUNG QUANH MÔI TRƯỜNG </li>
						<li>CÔN TRÙNG XÂM NHẬP  </li>
						<li>NƯỚC MƯA TRÀN VÀO NHÀ </li>
						<li>HƠI NÓNG TỪ BÊN NGOÀI , THẤT THOÁT NHIỆT KHI SỬ DỤNG ĐIỀU HÒA,TIẾT KIỆM NĂNG LƯỢNG.</li>
					</ul>
					<p>Thanh chắn cửa Ravo được sản xuất trên dây chuyền công nghệ cao, với vật liệu hiện đại, Ravo có khả năng lắp đặt dễ dàng và giá thành hợp lý cho mọi gia đình.</p>
					<p>Giá chỉ từ 700.000đ/bộ.</p>
					<p>Hãy cùng AMO X RAVO bảo vệ gia đình bạn!!!</p>

					<img src={chancua01} alt="..." style={{ marginLeft: "10%" }} />
					
					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Chúng tôi cam kết:
					</h3>
					<ul>
						<li>Thợ thi công tại nhà không được phép lấy công nếu sửa chữa không đạt yêu cầu như đã thỏa thuận.</li>
						<li>Bảo hành, bảo trì miễn phí trong 1 năm cho các nội dung thực hiện.</li>
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
								<td>Ngô Trung Hiếu</td>
								<td>RAVO Sài Gòn</td>
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
								<td>Ngô Trung Hiếu</td>
								<td>Sửa điều hoà</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>

							<tr>
								<td><img src={avt04} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Phan Thế Hoàng</td>
								<td>Mai Hoàng</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>

							<tr>
								<td><img src={avt05} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Ngô Trung Hiếu</td>
								<td>Bánh Chưng Bà Kiều</td>
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

export default withStyles(style)(ChanCua);

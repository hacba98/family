import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem";
import { ListGroup, ListGroupItem } from 'reactstrap';
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Icon from "@material-ui/core/Icon"

import withStyles from "@material-ui/core/styles/withStyles";
import style from "views/Charts/style.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import phanmem from "assets/img/image/phanmem.jpg"

import icon01 from "assets/img/icon/icon01.png";
import icon02 from "assets/img/icon/icon02.jpg";
import icon03 from "assets/img/icon/icon03.jpg";
import icon04 from "assets/img/icon/icon04.jpg";
import icon05 from "assets/img/icon/icon05.jpg";
import icon06 from "assets/img/icon/icon06.jpg";

import avt01 from "assets/img/avatar/avt01.jpg";


import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountBox from "@material-ui/icons/AccountBox";
import Build from "@material-ui/icons/Build";


class PhanMem extends React.Component {
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
					<ListGroup >
						<ListGroupItem active style={{ fontWeight: "bold", height: "50px", fontSize: "20px" }}>
							<img src={icon01} alt="..." width="32px" height="32px%"></img> Danh mục dịch vụ
            </ListGroupItem>
						<ListGroupItem onClick={this.handleClick} action style={{ height: "50px", fontSize: "18px" }}>
							<img src={icon02} alt="..." width="32px" height="32px%"></img> Sửa thiết bị gia đình
            </ListGroupItem>
						<ListGroupItem onClick={this.handleClick} action style={{ height: "50px", fontSize: "18px" }}>
							<img src={icon03} alt="..." width="32px" height="32px%"></img> Xây dựng, điện nước
            </ListGroupItem>
						<ListGroupItem onClick={this.handleClick} action style={{ height: "50px", fontSize: "18px" }}>
							<img src={icon04} alt="..." width="32px" height="32px%"></img> Dịch vụ văn phòng
            </ListGroupItem>
						<ListGroupItem onClick={this.handleClick} action style={{ height: "50px", fontSize: "18px" }}>
							<img src={icon05} alt="..." width="32px" height="32px%"></img> Ô tô, xe điện, xe máy
            </ListGroupItem>
						<ListGroupItem onClick={this.handleClick} action style={{ height: "50px", fontSize: "18px" }}>
							<img src={icon06} alt="..." width="32px" height="32px%"></img> Dịch vụ gia đình
            </ListGroupItem>
					</ListGroup>
				</GridItem >

				<GridItem xs={8}>
					<div style={{ width: "100%", margin: "auto" }}>
						<div id="carousel-id" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="item active">
									<img alt="Third slide" src={phanmem} />
									<div className="container">
										<div className="carousel-caption">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="page-header">
						<h2 style={{ color: "green", fontWeight: "bold" }}>Cài đặt, cấu hình phần mềm</h2>
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
					Máy tính quá chậm? Máy tính bị virus?
					</h3>

					<p style={{ color: "red" }}>
					Bạn muốn cài đặt lại hệ điều hành? Cài thêm phần mềm mới cho máy tính? Cài đặt driver, máy in, máy quét... Hãy đặt dịch vụ và lưu ý chuyện bản quyền các bạn nhé!
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
					Giá thành tham khảo:
					</h3>

					<ul>
						<li><p>Kiểm tra, chuẩn đoán xử lý online qua mạng: <a style={{ color: "red" }}>110.000đ/lần</a> (chi phí này áp dụng trong trường hợp kỹ thuật viên khám/kiểm tra và sửa lỗi từ xa, bạn cần chuyển tiền trước cho dịch vụ theo thỏa thuận trước khi tiến hành)</p></li>
						<li><p>Kiểm tra, chuẩn đoán, sửa chữa trực tiếp tại nhà: <a style={{ color: "red" }}>250.000đ/lần</a> (chi phí này tính theo ca làm việc 2 tiếng của kỹ sư hoặc kỹ thuật viên cho 1 thiết bị. Thiết bị thứ 2 trở đi trong cùng thời gian sẽ tính <a style={{ color: "red" }}>110.000đ/máy</a>.)</p></li>
						<li><p>Bản quyền phầm mềm: Theo thực tế sử dụng và giá thị trường</p></li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Chúng tôi cam kết:
					</h3>
					<ul>
						<li>Đội ngũ kỹ sư tay nghề cao có trình độ Đại học trở lên.</li>
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

export default withStyles(style)(PhanMem);

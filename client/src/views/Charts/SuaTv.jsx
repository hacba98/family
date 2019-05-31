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

import tivi from "assets/img/image/tivi.jpg"
import tivi01 from "assets/img/image/tivi01.jpg"


import avt01 from "assets/img/avatar/avt01.jpg";


import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountBox from "@material-ui/icons/AccountBox";
import Build from "@material-ui/icons/Build";


class SuaTv extends React.Component {
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
									<img alt="Third slide" src={tivi} />
									<div className="container">
										<div className="carousel-caption">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="page-header">
						<h2 style={{ color: "green", fontWeight: "bold" }}>Sửa TV tại nhà</h2>
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
						Sửa Tivi
					</h3>

					<p>
					Mô tả thông tin về chủng loại TV bạn đang sử dụng cần sửa chữa hoặc bảo dưỡng, tình trạng hoạt động, hiện 
					tượng mà bạn gặp phải, ứng dụng sẽ chuyển thông tin này đến đội ngũ thợ sửa TV uy tín mà chúng tôi tuyển 
					dụng kỹ càng, họ sẽ nghiên cứu và phản hồi bạn về phương án xử lý. Nếu bạn đồng ý, dịch vụ sẽ được triển 
					khai.
					</p>
					<br />

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Giá thành sửa tivi tham khảo:
					</h3>

					<ul>
						<li><p>Sửa tivi không vào điện (không có đèn báo nguồn): hỏng nguồn, giá sửa <a style={{ color: "red" }}>300.000 - 400.000đ</a>.</p></li>
						<li><p>Có đèn báo, đèn báo nhấp nháy, không hình không tiếng: hỏng boad nguồn hoặc boad cao áp, giá sửa từ <a style={{ color: "red" }}>300.000 - 400.000đ</a>.</p></li>
						<li><p>Sửa tivi có tiếng không có hình, có hình 2-5s tắt: hỏng boad nguồn cao, giá sửa từ <a style={{ color: "red" }}>300.000 - 600.000đ</a>.</p></li>
						<li>Sửa tivi hình bị bóng ma, lem màu, trắng hình, lang ben: hỏng boad tcon (car màn hình), giá sửa từ 300.000 - 500,000đ. (tivi Samsung model: LA32R71B, LA32R81B, LA32S81B, LA32A330J1, LA37A350, LA37A530, LA37R71B, LA32R81B, Samsung 40”, 46”. Sony model: KLV32S400A, KLV32V400A, KLV32T400A KLV37S400A, KLV37V400A, KLV37T400A, KLV37S310A, LG 32”, 37”, 40”…</li>
						<li><p>Mất hết đài hoặc mất 1 số đài: hỏng bộ thu sóng, giá sửa từ <a style={{ color: "red" }}>300.000 - 400.000đ</a>.</p></li>
						<li><p>Không điều khiển bằng remoter được (remeter còn tốt): hỏng mắt nhận hồng ngoại, giá sửa từ <a style={{ color: "red" }}>200.000 - 300.000đ</a>.</p></li>
						<li><p>Gãy đầu cắm cáp, giá sửa từ <a style={{ color: "red" }}>150.000 - 300.000đ</a>.</p></li>
						<li><p>Máy bị bong, rộp lớp dán màn hình hoặc bị hẹp góc nhìn (nhìn thẳng thì được, nhìn hơi xéo thì bị bóng ma, lem màu) Sony: KLV32BX300, KLV32EX300,  KLV32BX550…Samsung: LA32R71B, LA32R81B, LA32S81B, LA32A330J1… Giá sửa từ <a style={{ color: "red" }}>800.000đ - 1.000.000đ</a>. (riêng máy bị lỗi này thì phải đem về mới dán lại màn hình được)</p></li>
						<li><p>Máy có hình không tiếng: hỏng loa - thay loa, giá thay <a style={{ color: "red" }}>300.000 - 400.000đ/1 cặp loa</a>.</p></li>
						<li><p>Kiểm tra, chuẩn đoán tại nhà: <a style={{ color: "red" }}>150.000đ/lần</a> (chi phí này áp dụng trong trường hợp bạn chỉ khám/kiểm tra mà không sử dụng dịch vụ sửa chữa của thợ, trường hợp sửa chữa sẽ không tính chi phí này)</p></li>
					</ul>

					<img src={tivi01} alt="..." style={{ marginLeft: "10%" }} />
					
					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Chúng tôi cam kết:
					</h3>
					<ul>
						<li>Chúng tôi chỉ tuyển dụng đội ngũ thợ sửa tivi tay nghề cao và các trung tâm dịch vụ, bảo hành tivi có uy tín.</li>
						<li>Nhà cung cấp dịch vụ sửa tivi sẽ không được phép thu tiền nếu không khắc phục được sự cố như đã trao đổi và thống nhất với khách hàng.</li>
						<li>Dịch vụ sửa tivi cam kết hoàn tiền nếu trục trặc trong vòng 1 tháng và bảo hành cho trường hợp sửa chữa tối thiểu 1 năm.</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Lưu ý:
					</h3>
					<ul>
						<li style={{ color: "red" }}>Các dịch vụ không tiếp nhận sửa tivi sử dụng bóng hình CRT (TV dầy): TV dầy là các ti vi đời cũ, hiện tại có giá trị trên thị trường khá thấp nếu bán lại đồng thời sử dụng linh kiện điện tử cũ, khó kiếm linh kiện thay thế đồng thời việc sửa chữa khá phức tạp. Chúng tôi khuyến cáo khách hàng nên thay thế lên TV LCD, LED có diện tích sử dụng tiết kiệm hơn đồng thời cũng có giá khá thấp đối với những máy đã qua sử dụng.</li>
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

export default withStyles(style)(SuaTv);

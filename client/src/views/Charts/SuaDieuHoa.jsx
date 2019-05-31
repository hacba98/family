import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Icon from "@material-ui/core/Icon"
import Sidebar from "./Sidebar.jsx";
import {NavLink} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import style from "views/Charts/style.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import dieuhoa from "assets/img/image/dieuhoa.jpg"
import dieuhoa02 from "assets/img/image/dieuhoa02.jpg"
import dieuhoa03 from "assets/img/image/dieuhoa03.jpg"


import avt01 from "assets/img/avatar/avt01.jpg";
import avt02 from "assets/img/avatar/avt02.jpg";
import avt03 from "assets/img/avatar/avt03.jpg";
import avt04 from "assets/img/avatar/avt04.jpg";
import avt05 from "assets/img/avatar/avt05.png";


import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountBox from "@material-ui/icons/AccountBox";
import Build from "@material-ui/icons/Build";


class SuaDieuHoa extends React.Component {
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
				<GridItem xs={0.5}>
				</GridItem>
				<GridItem xs={2.5}>
					<Sidebar />
				</GridItem >

				<GridItem xs={8}>
					<div style={{ width: "100%", margin: "auto" }}>
						<div id="carousel-id" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="item active">
									<img alt="Third slide" src={dieuhoa} />
									<div className="container">
										<div className="carousel-caption">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="page-header">
						<h2 style={{ color: "green", fontWeight: "bold" }}>Sửa điều hòa, bảo dưỡng điều hòa</h2>
					</div>

					<NavLink to="dat_dv_nhanh">
						<Button color="rose" style={{ width: "100%", height: "55px" }}>
							<p><ShoppingCart style={{ width: "30px", height: "30px", fontSize: "50" }} /> Đặt dịch vụ</p>
						</Button>
					</NavLink>
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
						Đặt thợ Sửa điều hòa, bảo dưỡng điều hòa, máy lạnh
					</h3>

					<p>
						<b><u>Nội dung công việc:</u></b> Sửa điều hòa, máy lạnh; Bảo dưỡng điều hòa, máy lạnh; Nạp gas điều hòa, máy lạnh;
						Lắp mới; Ứng dụng sẽ kết nối bạn ngay lập tức đến các trung tâm sửa chữa, bảo dưỡng điều hòa uy tín, hoặc các
						thợ sửa điều hòa cá nhân, chuyên nghiệp được tuyển dụng kỹ càng xung quanh nơi bạn sinh sống.
						Các dịch vụ sửa điều hòa, bảo dưỡng điều hòa đều được ký kết hợp đồng, ký cam kết đảm bảo chất lượng nhằm
						phục vụ khách hàng tốt nhất, chuyên nghiệp nhất.
					</p>
					<br />
					<img src={dieuhoa02} alt="..." style={{ marginLeft: "0%" }} />

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Giá thành tham khảo:
					</h3>

					<ul>
						<li><div style={{ overflow: "hidden" }}><p style={{ float: "left", fontWeight: "bold" }}>Bảo dưỡng điều hòa:</p> <p style={{ color: "red" }}>150.000đ/máy - 250.000đ/máy</p></div></li>
						<li><p><b style={{ fontWeight: "bold" }}>Bổ sung gas điều hòa:</b>(thực tế có thể thay đổi vì còn phụ thuộc khoảng cách ống dẫn gas từ cục nóng đến cục lạnh, lượng cửa ra đối với hệ thống điều hòa multi hoặc điều hòa công nghiệp)</p></li>
						<li>Giá vật tư, linh kiện điều hòa thay thế trên thực tế có thể cao hơn đôi chút do điều kiện nhập hàng của nhà cung cấp vào các thời điểm khác nhau. Ví dụ nếu bạn cần thay thế linh kiện điều hòa vào mùa đông thì có thễ sẽ không sẵn có như mùa hè khi lượng hàng được nhập về nhiều.</li>

						<li><div style={{ overflow: "hidden" }}><p style={{ float: "left", fontWeight: "bold" }}>Sửa điều hòa:</p> <p style={{ color: "red" }}>Theo thực tế bệnh phát sinh</p></div></li>
						<li><p><b style={{ fontWeight: "bold" }}>Kiểm tra, khám bệnh:</b> <a style={{ color: "red" }}>100.000đ/lần</a> (chi phí này áp dụng trong trường hợp bạn chỉ khám/kiểm tra mà không sử dụng dịch vụ sửa điều hòa của thợ, trường hợp sửa chữa sẽ không tính chi phí này)</p></li>
						<li>Vật tư tham khảo:</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Tiêu chí mà chúng tôi tuyển dụng các trung tâm sửa điều hòa, máy lạnh:
					</h3>
					<ul>
						<li>Là doanh nghiệp, tổ chức, trung tâm hoặc các cá nhân có thâm niên hoạt động tối thiểu từ 3 năm trở lên trong lĩnh vực sửa chữa và bảo dưỡng điều hòa</li>
						<li>Có giới thiệu từ các cá nhân, khách hàng</li>
						<li>Có nhận diện thương hiệu và được khách hàng xác nhận</li>
						<li>Có lý lịch pháp lý rõ ràng phẩm chất, đạo đức tốt và chưa gặp phải bất cứ vấn đề liên quan đến an ninh, an toàn nào đối với khách hàng</li>
						<li>Tay nghề cao qua kiểm tra, chứng nhận của các trung tâm đào tạo</li>
						<li>Ký hợp đồng, scan chứng minh thư, chụp ảnh và đặt cọc tiền đảm bảo chất lượng</li>
						<li>Nhanh nhẹn, hoạt bát, vui vẻ</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Tiêu chí mà chúng tôi tuyển dụng các trung tâm sửa điều hòa, máy lạnh:
					</h3>
					<ul>
						<li>Điều hòa một chiều</li>
						<li>Điều hòa hai chiều</li>
						<li>Điều hòa trung tâm</li>
						<li>Điều hòa âm trần</li>
						<li>Điều hòa cây</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Quy trình bảo dưỡng tham khảo:
					</h3>
					<ul>
						<li>Kiểm tra hoạt động của điều hòa</li>
						<li>Đo áp suất gas, kiểm tra đấu nối dàn nóng</li>
						<li>Vệ sinh dàn nóng (dùng vòi xịt áp lực mạnh)</li>
						<li>Vệ sinh dàn lạnh (rửa màng lọc bụi, xịt phiến lạnh)</li>
						<li>Bổ sung gas nếu không đủ áp</li>
						<li>Hoàn trạng, kiểm tra hoạt động</li>
					</ul>
					<img src={dieuhoa03} alt="..." style={{ marginLeft: "0%" }} />

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
							<tr>
								<td><img src={avt02} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Vũ Văn Tiệp</td>
								<td>Điện Lạnh care</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>

							<tr>
								<td><img src={avt03} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Nguyễn Minh Đạt</td>
								<td>Tài An</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>

							<tr>
								<td><img src={avt04} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Bùi Văn Khiên</td>
								<td>Sửa Chữa Điện Nước</td>
								<td><Icon style={{marginLeft: "20%"}}>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon><Icon>grade</Icon></td>
							</tr>

							<tr>
								<td><img src={avt05} alt="..." style={{height: "25px", marginLeft: "10%",}}/></td>
								<td>Nguyễn Ngọc Lâm</td>
								<td>Nguyễn Ngọc Lâm</td>
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

export default withStyles(style)(SuaDieuHoa);

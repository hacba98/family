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

import suadien from "assets/img/image/suadien.jpg"
import suadien01 from "assets/img/image/suadien01.jpg"


import avt01 from "assets/img/avatar/avt01.jpg";


import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountBox from "@material-ui/icons/AccountBox";
import Build from "@material-ui/icons/Build";


class SuaDien extends React.Component {
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
									<img alt="Third slide" src={suadien} />
									<div className="container">
										<div className="carousel-caption">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="page-header">
						<h2 style={{ color: "green", fontWeight: "bold" }}>Sửa điện tại nhà</h2>
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
						Sửa điện
					</h3>

					<p>
					Mô tả thông tin về hệ thống điện bạn cần sửa chữa, tình trạng hoạt động, hiện tượng mà bạn gặp phải, ứng dụng sẽ chuyển thông tin này đến đội ngũ thợ sửa chữa điện tại nhà uy tín mà chúng tôi tuyển dụng kỹ càng, họ sẽ nghiên cứu và phản hồi bạn về phương án xử lý. Nếu bạn đồng ý, dịch vụ sẽ được triển khai đến nhà bạn.
					</p>
					<br />

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Giá tham khảo một số công việc, vật tư sửa điện tại nhà:
					</h3>

					<ul>
						<li><p>Công dịch vụ sửa điện tại nhà tối thiểu: <a style={{ color: "red" }}>200.000đ chi phí này áp dụng cho 1 lần thợ đến nhà để phục vụ khách hàng bao gồm việc khảo sát hoặc chi phí sửa chữa nhỏ có giá trị dưới 200.000đ</a></p></li>
						<li><p>Lắp đặt đồng hồ điện: <a style={{ color: "red" }}>80.000 - 150.0000đ/bộ</a>.</p></li>
						<li><p>Lắp mới bộ bóng đèn (gồm công tắc): <a style={{ color: "red" }}>80.000 - 100.0000đ/bộ</a>.</p></li>
						<li><p>Thay bóng đèn hư: <a style={{ color: "red" }}>20.000 - 50.000đ/bóng</a>.</p></li>
						<li><p>Lắp mới ổ cắm điện: <a style={{ color: "red" }}>50.000 - 100.000đ/cái</a>.</p></li>
						<li><p>Thay ổ cắm, công tắc: <a style={{ color: "red" }}>30.000 - 60.000đ/cái</a>.</p></li>
						<li><p>Thay CB phụ: <a style={{ color: "red" }}>80.000 - 100.000đ/cái</a>.</p></li>
						<li><p>Lắp quạt trần: <a style={{ color: "red" }}>100.000 - 150.000đ/cái</a>.</p></li>
						<li><p>Dây điện thông dụng loại lõi 2mm, mua lẻ: <a style={{ color: "red" }}>15.000đ/m</a>.</p></li>
						<li><p>Dây điện thông dụng loại lõi 1,5mm, mua lẻ: <a style={{ color: "red" }}>12.000đ/m</a>.</p></li>
						<li><p>Dây điện thông dụng loại lõi 1mm, mua lẻ: <a style={{ color: "red" }}>10.000đ/m</a>.</p></li>
						<li><p>APTOMAT thông dụng 1 pha, mua lẻ (6A - 25A): <a style={{ color: "red" }}>100.000đ/cái</a>.</p></li>
						<li><p>APTOMAT thông dụng 2 pha, mua lẻ (6A - 63A): <a style={{ color: "red" }}>200.000đ/cái</a>.</p></li>
						<li><p>Các công việc khác chưa được mô tả: <a style={{ color: "red" }}>Theo thực tế</a>.</p></li>
					</ul>

					<img src={suadien01} alt="..." style={{ marginLeft: "10%" }} />
					
					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Chúng tôi cam kết:
					</h3>
					<ul>
						<li>Thợ sửa điện tại nhà không được phép lấy công nếu sửa chữa không đạt yêu cầu như đã thỏa thuận.</li>
						<li>Bảo hành, bảo trì miễn phí trong 1 năm cho các nội dung thực hiện.</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Lưu ý:
					</h3>
					<ul>
						<li style={{ color: "red" }}>Công thợ sửa chữa điện tối thiểu với một lần phục vụ tại nhà là 200.000đ vì vậy khi cần đấu một công tắc hay lắp một bóng điện thì bạn cũng nên nhìn quanh để xem có những vấn đề gì cần khắc phục như làm chắc lại các ổ cắm hoặc tương tự như vậy trong một lần phục vụ nhằm tối ưu chi phí cho một lần gọi thợ. Trong một tiếng phục vụ với giá thành như đã nêu trên thì sẽ không tính thêm tiền công phụ trội.</li>
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

export default withStyles(style)(SuaDien);

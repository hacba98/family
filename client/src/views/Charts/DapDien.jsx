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

import dapdien from "assets/img/image/dapdien.jpg"
import dapdien01 from "assets/img/image/dapdien01.jpg"
import dapdien02 from "assets/img/image/dapdien02.jpg"


import avt01 from "assets/img/avatar/avt01.jpg";


import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountBox from "@material-ui/icons/AccountBox";
import Build from "@material-ui/icons/Build";


class DapDien extends React.Component {
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
									<img alt="Third slide" src={dapdien} />
									<div className="container">
										<div className="carousel-caption">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="page-header">
						<h2 style={{ color: "green", fontWeight: "bold" }}>Sửa xe đạp điện tại nhà</h2>
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
					Sửa xe đạp điện tại nhà - Đặt dịch vụ sửa chữa, bảo dưỡng, thay thế linh phụ kiện
					</h3>

					<p style={{ color: "red" }}>
					Xe đạp điện, xe máy điện, xe điện Vinfast Klara của bạn không thể di chuyển được? Bạn không tìm được cửa hàng sửa chữa uy tín, đáng tin cậy nào quanh khu vực bạn đang sinh sống? Hãy đặt dịch vụ sửa xe đạp điện tại nhà đến các trung tâm dịch vụ mà chúng tôi kết nối. Đây là các trung tâm mà chúng tôi đã thẩm tra, sẵn sàng phục vụ bạn tại nhà với thái độ cầu thị, có đầy đủ công cụ sửa chữa, được đào tạo chuyên nghiệp, bài bản và đặc biệt sử dụng hàng chính hãng, đảm bảo chất lượng.
					</p>
					<p>
					Các dịch vụ sửa xe đạp điện mà chúng tôi tuyển dụng là các đơn vị cam kết tuyệt đối chất lượng, sẵn sàng bảo hành được Rada giám sát chặt chẽ trong quá trình thực hiện.
					</p>
					<br />

					<img src={dapdien01} alt="..." style={{ marginLeft: "10%" }} />

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Sửa xe đạp điện:
					</h3>
					<p>Bạn chỉ cần đặt bảo dưỡng, đội ngũ thợ của các trung tâm mà chúng tôi tuyển dụng sẽ bảo dưỡng xe của bạn tại nhà bao gồm các nội dung sau:​​</p>
					<ul>
						<li>Bảo dưỡng phanh trước.</li>
						<li>Bảo dưỡng, tra dầu, bôi trơn các ổ trụ.</li>
						<li>Kiểm tra hệ thống điện.</li>
						<li>Kiểm tra ắc qui, xả, nạp.</li>
						<li>Xiết lại các ê ku bu lông.</li>
						<li>Kiểm tra lốp trước, sau.</li>
						<li>Kiểm tra vòng bi trước, sau.</li>
						<li>Kiểm tra giảm sóc trước, sau.</li>
						<li>Chỉnh còi.</li>
						<li>Kiểm tra sạc.</li>
						<li>Tư vấn tình trạng xe và phương án khắc phục</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Các loại linh phụ kiện có thể thay thế tận nơi:
					</h3>

					<ul>
						<li>Ắc quy xe điện</li>
						<li>Bộ nạp điện</li>
						<li>Hệ thống phanh xe (tay phanh, dây phanh, má phanh)</li>
						<li>Đèn chiếu sáng</li>
						<li>Còi điện</li>
						<li>Bộ khóa điện</li>
						<li>Vá xe</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Các loại xe điện mà nhà cung cấp dịch vụ chấp nhận sửa chữa:
					</h3>
					<ul>
						<li>Xe đạp điện</li>
						<li>Xe máy điện</li>
						<li>Xe ba bánh điện</li>
						<li>Ô tô điện</li>
						<li>Xe điện Drift cho trẻ em</li>
						<li>Xe điện tự cân bằng</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Các nhãn hiệu xe điện được chấp nhận:
					</h3>
					<p>Huyndai - NIJIA - GIANT - XMEN - Zoomer X - HONDA - YAMAHA - EMOTO - VESPA - Bridgestone - LIMIA - DTP - Terra Motor - DK bikes - Fuji - HTC - Sonik - Suzika - Jili - Detech - HKbike - VN.ECAR - Xe điện Vinfast Klara
</p>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
						Chúng tôi cam kết:
					</h3>
					<ul>
						<li>Chúng tôi chỉ tuyển dụng đội ngũ thợ <b>sửa chữa</b> và các trung tâm dịch vụ có tay nghề cao</li>
						<li>Sửa đúng bệnh, đúng nội dung</li>
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
						<li>Khiếu nại với chúng tôi nếu cảm thấy dịch vụ sửa TV chưa tốt để chúng tôi kiểm tra và loại bỏ các nhà cung cấp dịch vụ nếu không đáp ứng chất lượng yêu cầu.</li>
						<li>Hóa đơn (VAT): Bạn có thể yêu cầu xuất hóa đơn, nếu dịch vụ không đồng ý, bạn có thể từ chối kết nối và đánh giá, chấm điểm để chuyển sang dịch vụ khác.</li>
						<li>Chúng tôi không đảm bảo 100% các yêu cầu của quý khách sẽ được nhà cung cấp dịch vụ tiếp nhận vì đây là nền tảng ứng dụng chia sẻ. Các nhà cung cấp chỉ tiếp nhận yêu cầu của bạn khi họ sẵn sàng, có đủ nhân lực, vật lực cũng như khoảng cách tối ưu cho việc di chuyển.</li>
						<li>Cứu hộ: Trong trường hợp bạn đã có cửa hàng tin cậy và quen biết, bạn có thể yêu cầu dịch vụ hỗ trợ bạn để đưa xe về nơi mà bạn tin cậy. Tuy nhiên bạn cần thỏa thuận giá thành hỗ trợ đưa xe của bạn về với nhà cung cấp. Các nhà cung cấp hoàn toàn có quyền từ chối nếu họ không thấy tiền công được bạn trả là chưa xứng đáng.</li>
					</ul>

					<img src={dapdien02} alt="..." style={{ marginLeft: "10%" }} />

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

export default withStyles(style)(DapDien);

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

import bomnuoc from "assets/img/image/bomnuoc.jpg"


import avt01 from "assets/img/avatar/avt01.jpg";


import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountBox from "@material-ui/icons/AccountBox";
import Build from "@material-ui/icons/Build";


class BomNuoc extends React.Component {
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
									<img alt="Third slide" src={bomnuoc} />
									<div className="container">
										<div className="carousel-caption">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="page-header">
						<h2 style={{ color: "green", fontWeight: "bold" }}>Sửa máy bơm nước</h2>
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
						Sửa máy bơm
					</h3>

					<p>
					Mô tả thông tin về loại máy bơm nước mà bạn cần sửa chữa, tình trạng hoạt động, hiện tượng mà bạn gặp phải, ứng dụng sẽ chuyển thông tin này đến đội ngũ thợ sửa chữa uy tín mà chúng tôi tuyển dụng kỹ càng, họ sẽ nghiên cứu và phản hồi bạn về phương án xử lý. Nếu bạn đồng ý, dịch vụ sẽ được triển khai.
					</p>
					<br />

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Giá tham khảo một số công việc:
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
						<li>Chỉ sử dụng dịch vụ nếu hai bên thống nhất phương án sửa chữa, giá thành chi tiết.</li>
						<li>Chat/gọi cho chúng tôi nếu thấy điều gì bất thường.</li>
						<li>Đánh giá nhà cung cấp sau khi hoàn thành.</li>
						<li>Khiếu nại với chúng tôi nếu cảm thấy dịch vụ sửa TV chưa tốt để chúng tôi kiểm tra và loại bỏ các nhà cung cấp dịch vụ nếu không đáp ứng chất lượng yêu cầu.</li>
						<li>Hóa đơn (VAT): Bạn có thể yêu cầu xuất hóa đơn, nếu dịch vụ không đồng ý, bạn có thể từ chối kết nối và đánh giá, chấm điểm để chuyển sang dịch vụ khác.</li>
					</ul>

					<h3 style={{ color: "green", fontWeight: "bold" }}>
					Một số điểm bạn có thể kiểm tra làm trước khi gọi thợ:
					</h3>
					<div style={{ color: "red" }}>
						<p>Hệ thống máy bơm trong gia đình thường được thiết kế dành cho các chức năng chính như hút nước từ nguồn vào bể chứa cho những khu vực có nguồn nước yếu, đẩy nước lên bể chứa trên cao để sử dụng. Hệ thống thường bao gồm từ 1 đến 2 máy bơm, các hệ thống phao tự ngắt, phao chống cạn ở bể chứa ngầm. Nếu máy bơm của bạn không chạy, việc đầu tiên bạn cần kiểm tra các phao xem liệu nó có thỏa mãn các điều kiện được thiết lập hay không, đặc biệt là phao chống cạn ở bể ngầm vì rất có thể nước nguồn bị mất lâu ngày, bể cạn không còn hút được nữa dẫn đến máy bơm ngừng chạy.</p>
						<p>Các khóa van một chiều cũng cần được kiểm tra vì một số máy bơm sẽ có cảm biến lưu lượng nước, nó sẽ tự ngắt nếu bị khóa đường ống, nước không chẩy qua được.</p>
						<p>Hệ thống đường dây điện nối giữa các phao và máy bơm cũng có thể là nguyên nhân dẫn đến không vào điện cho máy, bạn nên có một bút thử điện để kiểm tra các đầu tiếp nối trong ổ điện cắm máy bơm, đầu tiếp nối điện trong các phao tự ngắt. Việc này các bạn có thể làm được mà chưa cần đến thợ. Nó cũng nhằm xác định chính xác nguyên nhân để khi gọi thợ họ có thể nhanh chóng giải quyết vấn đề của bạn, tránh mất thời gian của cả hai bên.</p>
						<p>Nếu vấn đề nằm ở hệ thống đường dây dẫn giữa các phao và máy bơm bạn cần gọi thợ điện và lưu ý chuẩn bị bản vẽ sơ đồ đường điện trong nhà để họ có thể xử lý một cách chính xác. Các đường dây dẫn, ổ cắm cũng có khả năng hỏng hóc rất cao vì nguyên nhân ẩm mốc, co ngót, lún nứt hay các sửa chữa khác vô tình làm hỏng nó.</p>
						<p>Phao tự ngắn thông thường hoạt động trong môi trường ẩm ướt cao nó cũng rất có thể bị hỏng nếu không phải bao tốt. Bạn có thể kiểm tra xem có còn đóng ngắt được không (dĩ nhiên là bạn cần có chút kiến thức về điện, bút thử điện, to vít...), nếu nó hỏng thì bạn cũng có thể tự mua ngoài các cửa hàng điện nước dân dụng mà thay thế.</p>
						<p>Bạn cũng có thể lấy ổ điện, cắm trực tiếp máy bơm vào để xem máy có chạy không. Nếu không chạy thì sẽ cần gọi thợ.</p>
						<p>Cấu tạo máy bơm chính bao gồm motor, cánh quạt đẩy nước, tụ đề (giống như tụ của cái quạt gió, nhưng công suất lớn hơn), khoang chứa nước mồi. Trường hợp máy bơm vẫn chạy mà không có tiếng ve ve kêu to, bạn có thể mở khoang chứa nước mồi ra để kiểm tra, nếu không có nước, bạn có thể đổ nước mồi vào đó, nó chạy được thì đóng nắp khoang vào.</p>
						<p>Trường hợp máy bơm bị hỏng thì sẽ có một số bệnh chính như sau:</p>
						<ul>
							<li>Mòn hoặc gẫy cánh quạt đẩy nước làm tắc, máy bơm không chạy được hoặc chạy mà không đẩy nước được, thợ phải thay thế nó.</li>
							<li>Mòn khoang chứa cánh quạt nước, bệnh này nặng hơn, nếu có thể thì thợ sẽ phải thay khoang chứa, nếu không tháo được thì coi như máy không còn sử dụng được.</li>
							<li>Chết tụ đề máy bơm, trường hợp này dễ, chỉ cần thay tụ mới với thông số quy định.</li>
							<li>Cháy motor, dĩ nhiên là có thể cuốn lại motor máy bơm tuy nhiên việc này khá phức tạp, lâu và mất thời gian, giá trị cũng không rẻ trong khi giá trị của máy bơm cũng không cao lắm, bạn cần thay máy mới.    </li>
							<li>Hỏng cảm biến: trong một số máy bơm cao cấp sẽ có các cảm biến lưu lượng nước, nếu chất lượng đường nước không tốt nó sẽ bị bám cặn canxi, cặn bẩn hoặc bị hỏng. Việc thay cảm biến cũng tương đối khó vì vậy bạn cũng cần lưu ý kiểm tra chất lượng nước bằng dịch vụ xét nghiệm nước sinh hoạt để tránh các vấn đề này xẩy ra.</li>
						</ul>
					</div>
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

export default withStyles(style)(BomNuoc);

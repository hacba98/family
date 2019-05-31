import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Sidebar from "./Sidebar.jsx";
import { NavLink } from "react-router-dom";

import withStyles from "@material-ui/core/styles/withStyles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "views/Charts/style.jsx";

import camera from "assets/img/image/camera.jpg";
import tinhin from "assets/img/image/tinhin.jpg";
import phanmem from "assets/img/image/phanmem.jpg";
import moithau from "assets/img/image/moithau.jpg";
import mucin from "assets/img/image/mucin.jpg";
import cartridge from "assets/img/image/cartridge.jpg";
import dnth from "assets/img/image/dnth.png";
import maytinh from "assets/img/image/maytinh.jpg";
import photocopy from "assets/img/image/photocopy.jpg";
import manhinh from "assets/img/image/manhinh.jpg";
import dtbang from "assets/img/image/dtbang.jpg";
import iphoneipad from "assets/img/image/iphoneipad.jpg";
import ocung from "assets/img/image/ocung.jpg";
import khcntt from "assets/img/image/khcntt.jpg";
import maychu from "assets/img/image/maychu.jpg";
import tvcntt from "assets/img/image/tvcntt.jpg";

import icon04 from "assets/img/icon/icon04.jpg";


const ColoredLine = ({ color }) => (
	<hr
		style={{
			color: color,
			backgroundColor: color,
			height: 5
		}}
	/>
);

class DichVu03 extends React.Component {
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
		const { classes } = this.props;
		const litsItem = [
      {
				name: "Sửa chữa lắp đặt Camera",
				img: camera,
				url: "/camera"
			},
			{
				name: "Sửa chữa máy tính, máy in, phần mềm",
				img: tinhin,
				url: "/tinh_in"
			},
			{
				name: "Cài đặt, cấu hình phần mềm",
				img: phanmem,
				url: "/phan_mem"
			},
			{
				name: "Mở tài khoản nhận tin mời thầu",
				img: moithau,
				url: "/#"
			},
			{
				name: "Mực in Siêu tốc, Siêu rẻ, Siêu sạch",
				img: mucin,
				url: "/#"
			},
			{
				name: "Cartridge mực máy in G&G",
				img: cartridge,
				url: "/#"
			},
			{
				name: "Dịch vụ doanh nghiệp tổng hợp",
				img: dnth,
				url: "/#"
			},
			{
				name: "Bảo dưỡng máy tính",
				img: maytinh,
				url: "/#"
			},
			{
				name: "Dịch vụ sửa và cho thuê máy photocopy",
				img: photocopy,
				url: "/#"
			},
			{
				name: "Sửa màn hình LCD/LED máy tính",
				img: manhinh,
				url: "/#"
			},
			{
				name: "Sửa điện thoại, máy tính bảng Android",
				img: dtbang,
				url: "/#"
			},
			{
				name: "Sửa iPhone, iPad",
				img: iphoneipad,
				url: "/#"
			},
			{
				name: "Phục hồi dữ liệu ổ cứng",
				img: ocung,
				url: "/#"
			},
			{
				name: "Khóa học CNTT cơ bản",
				img: khcntt,
				url: "/#"
			},
			{
				name: "Dịch vụ máy chủ",
				img: maychu,
				url: "/#"
			},
			{
				name: "Tư vấn CNTT",
				img: tvcntt,
				url: "/#"
			}
		]
		return (
			<GridContainer>
				<GridItem xs>
				</GridItem>

				<GridItem xs={2.5}>
					<Sidebar/>
				</GridItem >

				<GridItem xs={8}>

					<div className="page-header">
						<h2>
							<small><img src={icon04} alt="..." width="52px" height="52px"></img></small>
							{" "}Dịch vụ văn phòng
						</h2>
					</div>

					<ColoredLine color="red" />

					<GridContainer>
						{litsItem.map(
							(item) => {
								return <GridItem xs={12} sm={12} md={4}>
								<NavLink to={item.url}>
									<Card product className={classes.cardHover}>
										<CardHeader image className={classes.cardHeaderHover}>
											<a href="#pablo" onClick={e => e.preventDefault()}>
												<img src={item.img} alt="..." />
											</a>
										</CardHeader>
										<CardBody>
											<h3 className={classes.cardProductTitle}>
												<a href="#pablo" onClick={e => e.preventDefault()}>
													{item.name}
												</a>
											</h3>
										</CardBody>
									</Card>
									</NavLink>
								</GridItem>
							}
						)}
					</GridContainer>
				</GridItem>

				<GridItem xs={1}>
				</GridItem>
			</GridContainer>
		);
	}
}

export default withStyles(style)(DichVu03);

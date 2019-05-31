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

import binhnonglanh from "assets/img/image/binhnonglanh.jpg";
import dieuhoa from "assets/img/image/dieuhoa.jpg";
import tivi from "assets/img/image/tivi.jpg";
import maygiat from "assets/img/image/maygiat.jpg";
import tulanh from "assets/img/image/tulanh.jpg";
import quatdien from "assets/img/image/quatdien.jpg";
import amply from "assets/img/image/amply.jpg";
import bepga from "assets/img/image/bepga.jpg";
import lovisong from "assets/img/image/lovisong.jpg";
import lonuong from "assets/img/image/lonuong.jpg";
import mayhutkhoi from "assets/img/image/mayhutkhoi.jpg";
import mayruachen from "assets/img/image/mayruachen.jpg";
import mayruachen2 from "assets/img/image/mayruachen2.jpg";
import maylocnuoc from "assets/img/image/maylocnuoc.jpg";
import thietbikhac from "assets/img/image/thietbikhac.jpg";
import thanhly from "assets/img/image/thanhly.jpg";

import icon02 from "assets/img/icon/icon02.jpg";


const ColoredLine = ({ color }) => (
	<hr
		style={{
			color: color,
			backgroundColor: color,
			height: 5
		}}
	/>
);


class DichVu01 extends React.Component {
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
				name: "Sửa điều hòa, bão dưỡng diều hòa",
				img: dieuhoa,
				url: "/sua_dieu_hoa"
			},
			{
				name: "Sửa TV tại nhà",
				img: tivi,
				url: "/sua_tv"
			},
			{
				name: "Sửa bình nóng lạnh, bão dưỡng tại nhà",
				img: binhnonglanh,
				url: "/binh_nong_lanh"
			},
			{
				name: "Sửa máy giặt, bão dưỡng máy giặt",
				img: maygiat,
				url: "/#"
			},
			{
				name: "Sửa tủ lạnh, bảo dưỡng, nạp ga tại nhà",
				img: tulanh,
				url: "/#"
			},
			{
				name: "Sửa quạt điện",
				img: quatdien,
				url: "/#"
			},
			{
				name: "Sửa amply, loa, dàn âm thanh tại nhà",
				img: amply,
				url: "/#"
			},
			{
				name: "Sửa bếp ga, bếp từ",
				img: bepga,
				url: "/#"
			},
			{
				name: "Sửa lò vi sóng",
				img: lovisong,
				url: "/#"
			},
			{
				name: "Sữa lò nướng tại nhà",
				img: lonuong,
				url: "/#"
			},
			{
				name: "Sửa máy hút khói, máy hút mùi nhà bếp",
				img: mayhutkhoi,
				url: "/#"
			},
			{
				name: "Thuê máy rửa bát, chén, máy sấy...",
				img: mayruachen,
				url: "/#"
			},
			{
				name: "Sửa máy rửa bát, chén, đĩa",
				img: mayruachen2,
				url: "/#"
			},
			{
				name: "Sửa máy lọc nước",
				img: maylocnuoc,
				url: "/#"
			},
			{
				name: "Thiết bị khác",
				img: thietbikhac,
				url: "/#"
			},
			{
				name: "Gọi dịch vụ thanh lý đồ dùng",
				img: thanhly,
				url: "/#"
			}
		]
		return (
			<GridContainer>
				<GridItem xs>
				</GridItem>

				<GridItem xs={2.5}>
					<Sidebar />
				</GridItem >

				<GridItem xs={8}>

					<div className="page-header">
						<h2>
							<small><img src={icon02} alt="..." width="52px" height="52px"></img></small>
							{" "}Sửa thiết bị gia đình
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

export default withStyles(style)(DichVu01);

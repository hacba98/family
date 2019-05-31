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

import chancua from "assets/img/image/chancua.jpg";
import giupviec from "assets/img/image/giupviec.jpg";
import giatla from "assets/img/image/giatla.jpg";
import racthaidt from "assets/img/image/racthaidt.jpg";
import giatsofa from "assets/img/image/giatsofa.jpg";
import phunthuoc from "assets/img/image/phunthuoc.jpg";
import nuoctinhkhiet from "assets/img/image/nuoctinhkhiet.jpg";
import banhchung from "assets/img/image/banhchung.jpg";

import icon06 from "assets/img/icon/icon06.jpg";

const ColoredLine = ({ color }) => (
	<hr
		style={{
			color: color,
			backgroundColor: color,
			height: 5
		}}
	/>
);

class DichVu05 extends React.Component {
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
				name: "Thanh chắn cửa Ravo - 700.000đ/bộ",
				img: chancua,
				url: "/chan_cua"
			},
			{
				name: "Gọi dịch vụ giúp việc theo giờ",
				img: giupviec,
				url: "/giup_viec"
			},
			{
				name: "Gọi dịch vụ giặt là",
				img: giatla,
				url: "/giat_la"
			},
			{
				name: "Thu gom rác thải điện tử",
				img: racthaidt,
				url: "/#"
			},
			{
				name: "Giặt Thảm/Sofa",
				img: giatsofa,
				url: "/#"
			},
			{
				name: "Phun thuốc muỗi, diệt mối, côn trùng",
				img: phunthuoc,
				url: "/#"
			},
			{
				name: "Thay bình nước tinh khiết",
				img: nuoctinhkhiet,
				url: "/#"
			},
			{
				name: "Bánh chưng bà Kiều",
				img: banhchung,
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
							<small><img src={icon06} alt="..." width="52px" height="52px"></img></small>
							{" "}Dịch vụ gia đình
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

export default withStyles(style)(DichVu05);

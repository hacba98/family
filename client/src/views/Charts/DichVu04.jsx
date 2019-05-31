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

import xemay from "assets/img/image/xemay.jpg";
import dapdien from "assets/img/image/dapdien.jpg";
import cuuhoxemay from "assets/img/image/cuuhoxemay.jpg";
import cuuhooto from "assets/img/image/cuuhooto.jpg";
import phukienxehoi from "assets/img/image/phukienxehoi.jpg";

import icon05 from "assets/img/icon/icon05.jpg";


const ColoredLine = ({ color }) => (
	<hr
		style={{
			color: color,
			backgroundColor: color,
			height: 5
		}}
	/>
);

class DichVu04 extends React.Component {
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
				name: "Dịch vụ thuê xe máy - 120k/ngày",
				img: xemay,
				url: "/xe_may"
			},
			{
				name: "Sửa xe đạp điện tại nhà",
				img: dapdien,
				url: "/dap_dien"
			},
			{
				name: "Cứu hộ, sửa chữa xe máy",
				img: cuuhoxemay,
				url: "/cuu_ho_xe_may"
			},
			{
				name: "Cứu hộ, sửa chữa xe ôtô",
				img: cuuhooto,
				url: "/#"
			},
			{
				name: "Lắp đặt phụ kiện xe hơi tại nhà",
				img: phukienxehoi,
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
							<small><img src={icon05} alt="..." width="52px" height="52px"></img></small>
							{" "}Ô tô, xe điện, xe máy
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

export default withStyles(style)(DichVu04);

import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem";
import { ListGroup, ListGroupItem } from 'reactstrap';
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

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

import icon01 from "assets/img/icon/icon01.png";
import icon02 from "assets/img/icon/icon02.jpg";
import icon03 from "assets/img/icon/icon03.jpg";
import icon04 from "assets/img/icon/icon04.jpg";
import icon05 from "assets/img/icon/icon05.jpg";
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
				img: dieuhoa
			},
			{
				name: "Sửa TV tại nhà",
				img: tivi
			},
			{
				name: "Sửa bình nóng lạnh, bão dưỡng tại nhà",
				img: binhnonglanh
			},
			{
				name: "Sửa máy giặt, bão dưỡng máy giặt",
				img: maygiat
			},
			{
				name: "Sửa tủ lạnh, bảo dưỡng, nạp ga tại nhà",
				img: tulanh
			},
			{
				name: "Sửa quạt điện",
				img: quatdien
			},
			{
				name: "Sửa amply, loa, dàn âm thanh tại nhà",
				img: amply
			},
			{
				name: "Sửa bếp ga, bếp từ",
				img: bepga
			},
			{
				name: "Sửa lò vi sóng",
				img: lovisong
			},
			{
				name: "Sữa lò nướng tại nhà",
				img: lonuong
			},
			{
				name: "Sửa máy hút khói, máy hút mùi nhà bếp",
				img: mayhutkhoi
			},
			{
				name: "Thuê máy rửa bát, chén, máy sấy...",
				img: mayruachen
			},
			{
				name: "Sửa máy rửa bát, chén, đĩa",
				img: mayruachen2
			},
			{
				name: "Sửa máy lọc nước",
				img: maylocnuoc
			},
			{
				name: "Thiết bị khác",
				img: thietbikhac
			},
			{
				name: "Gọi dịch vụ thanh lý đồ dùng",
				img: thanhly
			}
		]
		return (
			<GridContainer>
				<GridItem xs>
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

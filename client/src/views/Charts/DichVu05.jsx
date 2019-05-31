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

import chancua from "assets/img/image/chancua.jpg";
import giupviec from "assets/img/image/giupviec.jpg";
import giatla from "assets/img/image/giatla.jpg";
import racthaidt from "assets/img/image/racthaidt.jpg";
import giatsofa from "assets/img/image/giatsofa.jpg";
import phunthuoc from "assets/img/image/phunthuoc.jpg";
import nuoctinhkhiet from "assets/img/image/nuoctinhkhiet.jpg";
import banhchung from "assets/img/image/banhchung.jpg";

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
				img: chancua
			},
			{
				name: "Gọi dịch vụ giúp việc theo giờ",
				img: giupviec
			},
			{
				name: "Gọi dịch vụ giặt là",
				img: giatla
			},
			{
				name: "Thu gom rác thải điện tử",
				img: racthaidt
			},
			{
				name: "Giặt Thảm/Sofa",
				img: giatsofa
			},
			{
				name: "Phun thuốc muỗi, diệt mối, côn trùng",
				img: phunthuoc
			},
			{
				name: "Thay bình nước tinh khiết",
				img: nuoctinhkhiet
			},
			{
				name: "Bánh chưng bà Kiều",
				img: banhchung
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
							<small><img src={icon06} alt="..." width="52px" height="52px"></img></small>
							{" "}Dịch vụ gia đình
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

export default withStyles(style)(DichVu05);

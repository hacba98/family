import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ReactTable from "react-table";
import Assignment from "@material-ui/icons/Timeline";
import Stars from "@material-ui/icons/Stars";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";

const styles = {
	cardIconTitle: {
		...cardTitle,
		marginTop: "15px",
		marginBottom: "0px"
	}
};

const fadeData = [
	["Sữa quạt điện", "Lý Thường Kiệt", "Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt", "Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt", "Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt", "Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt", "Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt", "Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt", "Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt", "Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt", "Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt", "Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt", "Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt", "Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
]

class History extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: fadeData.map((prop, key) => {
				return {
					id: key,
					stt: key,
					dichvu: prop[0],
					diachi: prop[1],
					trangthai: prop[2],
					thoigian: prop[3],
					thosua: prop[4],
					actions: (
						<div className="actions-right">
							
							<Tooltip title="Đánh giá" placement="left">
									<Button
										justIcon
										round
										simple
										// onClick={() => { this.setData2(prop.action_code); setTimeout(() => { this.openModal() }, 200) }}
										color="info"
										className="edit"
									>
										<Stars />
									</Button>
								</Tooltip>
						</div>
					)
				};
			})
		};
	}


	render() {
		const { classes } = this.props;
		return (
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={10}>
					<Card>
						<CardHeader color="primary" icon>
							<CardIcon color="primary">
								<Assignment />
							</CardIcon>
							<h4 className={classes.cardIconTitle} style={{ fontSize: "20px" }}>Lịch sử giao dịch</h4>
						</CardHeader>
						<CardBody>
							<ReactTable
								style={{ fontSize: "15px" }}
								data={this.state.data}
								filterable
								columns={[
									{
										Header: "Stt",
										accessor: "stt",
										sortable: false,
										filterable: false,
										headerStyle: { fontWeight: "600", fontSize: "15px" },
									},
									{
										Header: "Dịch vụ",
										accessor: "dichvu",
										sortable: false,
										filterable: false,
										headerStyle: { fontWeight: "600", fontSize: "15px" },
									},
									{
										Header: "Địa chỉ",
										accessor: "diachi",
										sortable: false,
										filterable: false,
										headerStyle: { fontWeight: "600", fontSize: "15px" },
									},
									{
										Header: "Trạng thái",
										accessor: "trangthai",
										sortable: false,
										filterable: false,
										headerStyle: { fontWeight: "600", fontSize: "15px" },
									},
									{
										Header: "Thời gian",
										accessor: "thoigian",
										sortable: false,
										filterable: false,
										headerStyle: { fontWeight: "600", fontSize: "15px" },
									},
									{
										Header: "Thợ sữa",
										accessor: "thosua",
										sortable: false,
										filterable: false,
										headerStyle: { fontWeight: "600", fontSize: "15px" },
									},
									{
										Header: "Đánh giá",
										accessor: "actions",
										sortable: false,
										filterable: false,
										headerStyle: { fontWeight: "600", fontSize: "15px" },
										
									}
								]}

								defaultPageSize={10}
								showPaginationBottom={true}
								className="-striped -highlight"
							/>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		);
	}
}

export default withStyles(styles)(History);

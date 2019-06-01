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

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";
import StarRatings from "react-star-ratings";
import 'feedback/FeedbackForm.css';


const styles = {
	cardIconTitle: {
		...cardTitle,
		marginTop: "15px",
		marginBottom: "0px"
	}
};

const fadeData = [
	["Sữa quạt điện", "Lý Thường Kiệt, Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt, Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt, Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt, Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt, Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt, Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt, Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt, Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt, Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt, Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt, Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
	["Sữa quạt điện", "Lý Thường Kiệt, Quận 10", "Mới đăng", "Đang sắp xếp", "1/6/2019"],
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
					thosua: prop[3],
					thoigian: prop[4],
					actions: (
						<div className="actions-right">

							<Tooltip title="Đánh giá" placement="left">
								<Button
									justIcon
									round
									simple
									onClick={() => this.handleClickOpen()}
									color="info"
									className="edit"
								>
									<Stars />
								</Button>
							</Tooltip>
						</div>
					)
				};
			}),
			open: false,
			feedbackContent: '',
			rating: 3
		};
		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.changeRating = this.changeRating.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleFeedbackOnChange = this.handleFeedbackOnChange.bind(this);
	}

	handleClose = () => {
        this.setState({ open: false });
    };

    handleFeedbackOnChange = (e) => {
        this.setState({feedbackContent: e.target.value});
    }

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	changeRating = (newRating, name) => {
		this.setState({
			rating: newRating
		});
	}

	handleFeedbackSubmit = () => {
		// TODO
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
				<GridItem xs={12}>
					<Dialog
						open={this.state.open}
						onClose={this.handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogTitle
							style={{ background: "crimson", color: "white" }}
							id="alert-dialog-title"
						>
							{"Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi"}
						</DialogTitle>
						<DialogContent>
							<TextField
								style={{ width: "500px" }}
								id="standard-multiline-static"
								multiline
								rows="4"
								autoFocus
								onChange={this.handleFeedbackOnChange}
								value={this.state.feedbackContent}
								placeholder="Hãy giúp chúng tôi đánh giá hiệu quả công việc"
								margin="normal"
							/>

							<div
								style={{
									transform: "scale(0.65)",
									display: "flex",
									justifyContent: "center",
									marginTop: "1em"
								}}
							>
								<StarRatings
									rating={this.state.rating}
									starRatedColor="crimson"
									changeRating={this.changeRating}
									numberOfStars={5}
									name="rating"
									svgIconPath="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
								/>
							</div>
							<div style={{ display: "flex", justifyContent: "center" }}>
								<DialogContentText id="alert-dialog-description">
									Hãy đánh giá dịch vụ bạn nhận được
              					</DialogContentText>
							</div>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose} color="primary">
								CANCEL
            				</Button>
							<Button
								onClick={() => {
									this.handleFeedbackSubmit();
									this.handleClose();
								}}
								color="secondary"
								variant="contained"
							>
								SEND
           	 				</Button>
						</DialogActions>
					</Dialog>
				</GridItem>
			</GridContainer>
		);
	}
}

export default withStyles(styles)(History);

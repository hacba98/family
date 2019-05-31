import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// import Datetime from "react-datetime";
// import FormControl from "@material-ui/core/FormControl";
// import CardIcon from "components/Card/CardIcon.jsx";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import AvTimer from "@material-ui/icons/AvTimer";

// // core components
// import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
// import CardText from "components/Card/CardText.jsx";
import CardBody from "components/Card/CardBody.jsx";
// import Divider from '@material-ui/core/Divider';
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ListAlt from '@material-ui/icons/ListAlt';
// import PhoneIphone from '@material-ui/icons/PhoneIphone';
// import Person from "@material-ui/icons/Person"
// import Room from "@material-ui/icons/Room";
// import BorderColor from "@material-ui/icons/BorderColor";
// import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
// import { ListGroup, ListGroupItem } from 'reactstrap';
// import Modal from 'react-awesome-modal';

// import icon02 from "assets/img/icon/icon02.jpg"
// import icon03 from "assets/img/icon/icon03.jpg"
// import icon04 from "assets/img/icon/icon04.jpg"
// import icon05 from "assets/img/icon/icon05.jpg"
// import icon06 from "assets/img/icon/icon06.jpg"

import ReactTable from "react-table";
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
import Button from "components/CustomButtons/Button.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import { dataTable } from "variables/general.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
// import postFormStyle from "assets/jss/material-dashboard-pro-react/views/postFormStyle";

const styles = {
	cardIconTitle: {
		...cardTitle,
		marginTop: "15px",
		marginBottom: "0px"
	}
};

class History extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: dataTable.dataRows.map((prop, key) => {
				return {
					id: key,
					name: prop[0],
					position: prop[1],
					office: prop[2],
					age: prop[3],
					actions: (
						// we've added some custom button actions
						<div className="actions-right">
							{/* use this button to add a like kind of action */}
							<Button
								justIcon
								round
								simple
								onClick={() => {
									let obj = this.state.data.find(o => o.id === key);
									alert(
										"You've clicked LIKE button on \n{ \nName: " +
										obj.name +
										", \nposition: " +
										obj.position +
										", \noffice: " +
										obj.office +
										", \nage: " +
										obj.age +
										"\n}."
									);
								}}
								color="info"
								className="like"
							>
								<Favorite />
							</Button>{" "}
							{/* use this button to add a edit kind of action */}
							<Button
								justIcon
								round
								simple
								onClick={() => {
									let obj = this.state.data.find(o => o.id === key);
									alert(
										"You've clicked EDIT button on \n{ \nName: " +
										obj.name +
										", \nposition: " +
										obj.position +
										", \noffice: " +
										obj.office +
										", \nage: " +
										obj.age +
										"\n}."
									);
								}}
								color="warning"
								className="edit"
							>
								<Dvr />
							</Button>{" "}
							{/* use this button to remove the data row */}
							<Button
								justIcon
								round
								simple
								onClick={() => {
									var data = this.state.data;
									data.find((o, i) => {
										if (o.id === key) {
											// here you should add some custom code so you can delete the data
											// from this component and from your server as well
											data.splice(i, 1);
											return true;
										}
										return false;
									});
									this.setState({ data: data });
								}}
								color="danger"
								className="remove"
							>
								<Close />
							</Button>{" "}
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
				<GridItem xs={12} sm={12} md={8}>
					<Card>
						<CardHeader color="primary" icon>
							<CardIcon color="primary">
								<Assignment />
							</CardIcon>
							<h4 className={classes.cardIconTitle}>React Table</h4>
						</CardHeader>
						<CardBody>
							<ReactTable
								data={this.state.data}
								filterable
								columns={[
									{
										Header: "Name",
										accessor: "name"
									},
									{
										Header: "Position",
										accessor: "position"
									},
									{
										Header: "Office",
										accessor: "office"
									},
									{
										Header: "Age",
										accessor: "age"
									},
									{
										Header: "Actions",
										accessor: "actions",
										sortable: false,
										filterable: false
									}
								]}
								defaultPageSize={10}
								showPaginationTop
								showPaginationBottom={false}
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

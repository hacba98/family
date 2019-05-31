import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";
import StarRatings from "react-star-ratings";
import Axios from "axios";

import "./FeedbackForm.css";

class FeedbackForm extends Component {
  state = {
    open: true,
    feedbackContent: "",
    rating: 3
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating
    });
  };

  handleFeedbackSubmit = () => {
    // TODO - Create API
    //console.log(this.state);
    let username = localStorage.getItem("username") || "minhpham";
    Axios.post(`http://localhost:8000/feedback/giveFb/${username}`, {
      content: this.state.feedbackContent,
      rating: this.state.rating
    });
    alert("Submit successfully! Thank you for your feedback.");
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleFeedbackOnChange = e => {
    this.setState({ feedbackContent: e.target.value });
  };

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Open alert dialog
        </Button>
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
      </div>
    );
  }
}

export default FeedbackForm;

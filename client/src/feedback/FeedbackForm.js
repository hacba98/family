import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import StarRatings from 'react-star-ratings';

import './FeedbackForm.css';

class FeedbackForm extends Component {
    state = {
        open: true,
        feedbackContent: '',
        rating: 3
    };

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

    handleClose = () => {
        this.setState({ open: false });
    };

    handleFeedbackOnChange = (e) => {
        this.setState({feedbackContent: e.target.value});
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Open alert dialog
            </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle style={{ background: "crimson", color: "white" }} id="alert-dialog-title">{"Bộ luật này có hay không? :D"}</DialogTitle>
                    <DialogContent>

                        <TextField style={{ width: "500px" }}
                            id="standard-multiline-static"
                            multiline
                            rows="4"
                            autoFocus
                            onChange={this.handleFeedbackOnChange}
                            value={this.state.feedbackContent}
                            placeholder="Hãy cho người khác biết suy nghĩ của bạn về bộ luật này :)"
                            margin="normal">
                        </TextField>

                        <div style={{ transform: "scale(0.65)", display: "flex", justifyContent: "center", marginTop: "1em" }}>
                            <StarRatings
                                rating={this.state.rating}
                                starRatedColor="crimson"
                                changeRating={this.changeRating}
                                numberOfStars={5}
                                name='rating'
                                svgIconPath="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                        <DialogContentText id="alert-dialog-description">
                            Hãy đánh giá về bộ luật này
                        </DialogContentText>

                        </div>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            CANCEL
                        </Button>
                        <Button onClick={() => {this.handleFeedbackSubmit(); this.handleClose()}} color="secondary" variant="contained">
                            SEND 
                </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default FeedbackForm;

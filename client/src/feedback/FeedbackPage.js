import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// import Button from "@material-ui/core/Button";
// import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import FeedbackCard from "./FeedbackCard";
// import LazyLoad from "react-lazyload";
import AverageRatingComponent from "./AverageRatingComponent";
import TotalRatingComponent from "./TotalRatingComponent";
import RatingBoard from "./RatingBoard";
import Axios from "axios";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  wraper: {
    backgroundColor: "#EEEEEE"
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

class Album extends Component {
  state = {
    count: 0,
    rating: 0,
    lstFb: []
  };

  componentDidMount() {
    Axios.get("http://localhost:8000/feedback/viewFB")
      .then(data => {
        this.setState({
          count: data.data.data.count,
          rating: data.data.data.rating,
          lstFb: data.data.data.lstFb
        });
        console.log(data);
      })
      .catch(e => alert(e));
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <main className={classes.wraper}>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Feedback
              </Typography>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container align spacing={24}>
              <Grid item md={3}>
                <AverageRatingComponent rating={this.state.rating} />
              </Grid>
              <Grid item md={6}>
                <RatingBoard />
              </Grid>
              <Grid item md={3}>
                <TotalRatingComponent count={this.state.count} />
              </Grid>
            </Grid>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container direction="row" alignItems="center" spacing={24}>
              {this.state.lstFb.map(ele => (
                <Grid item md={12}>
                  <FeedbackCard {...ele} />
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
        </footer>
      </React.Fragment>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Album);

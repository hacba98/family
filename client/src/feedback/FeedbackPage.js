import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
// import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import FeedbackCard from "./FeedbackCard";
import LazyLoad from "react-lazyload";
import AverageRatingComponent from './AverageRatingComponent'
import TotalRatingComponent from './TotalRatingComponent'
import RatingBoard from './RatingBoard'

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  wraper:{
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

function Album(props) {
  const { classes } = props;

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
              LawReading
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Click to submit review
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    View other reviews
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container align spacing={24}>
            <Grid item md={3}>
                  <AverageRatingComponent/>
            </Grid> 
            <Grid item md={6}>
                <RatingBoard/>
            </Grid>  
            <Grid item md={3}>
                <TotalRatingComponent/>
            </Grid>       
          </Grid>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container direction="row" alignItems="center" spacing={24}>
            <Grid item md={12}>
                <FeedbackCard />
            </Grid>
            <Grid item md={12}>
                <FeedbackCard />
            </Grid>
            <Grid item md={12}>
                <FeedbackCard />
            </Grid>
            <Grid item md={12}>
                <FeedbackCard />
            </Grid>
            <Grid item md={12}>
                <FeedbackCard />
            </Grid>
            <Grid item md={12}>
                <FeedbackCard />
            </Grid>
            <Grid item md={12}>
                <FeedbackCard />
            </Grid>
            <Grid item md={12}>
                <FeedbackCard />
            </Grid>
            <Grid item md={12}>
                <FeedbackCard />
            </Grid>
            <Grid item md={12}>
                <FeedbackCard />
            </Grid>
            <LazyLoad height={200} offset={100}>
              <Grid item md={12}>
                  <FeedbackCard />
              </Grid>
              <Grid item md={12}>
                <FeedbackCard />
              </Grid>
              <Grid item md={12}>
                  <FeedbackCard />
              </Grid>
              <Grid item md={12}>
                  <FeedbackCard />
              </Grid>
              <Grid item md={12}>
                  <FeedbackCard />
              </Grid>
              <Grid item md={12}>
                  <FeedbackCard />
              </Grid>
              <Grid item md={12}>
                  <FeedbackCard />
              </Grid>
              <Grid item md={12}>
                  <FeedbackCard />
              </Grid>
              <Grid item md={12}>
                  <FeedbackCard />
              </Grid>
              <Grid item md={12}>
                  <FeedbackCard />
              </Grid>
              <Grid item md={12}>
                  <FeedbackCard />
              </Grid>
              <Grid item md={12}>
                  <FeedbackCard />
              </Grid>
            </LazyLoad>
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

Album.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Album);

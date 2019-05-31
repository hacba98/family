import React from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import StarRatings from "react-star-ratings";

const styles = {
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function AverageRatingComponent(props) {
  const { classes } = props;
  //const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Average Rating
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h1" component="h2">
          {props.rating}
        </Typography>
        <StarRatings
          rating={props.rating}
          starDimension="20px"
          starSpacing="10px"
          starRatedColor="orange"
        />
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(AverageRatingComponent);

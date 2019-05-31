import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  text: {
    color: "#616161",
    fontSize: 19
  }
};

function TotalRatingComponent(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.text}>
          Total Rating with Reviews
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h1" component="h2">
          512
        </Typography>
      </CardContent>
    </Card>
  );
}

TotalRatingComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TotalRatingComponent);

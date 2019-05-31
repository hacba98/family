import React from 'react'
import './RatingBoard.css';
import { withStyles } from "@material-ui/core/styles";
import RatingStatistics from './RatingStatistics/RatingStatistics';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const styles = {
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
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

function RatingBoard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
          <RatingStatistics />
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(RatingBoard);

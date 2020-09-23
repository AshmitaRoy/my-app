import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ECFAE6",
    borderRadius: 15,
    width: "60%",
    margin: 18,
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
      margin: "0",
  },
}));

export default function SeedCounterCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="p" variant="p">
            Your Seed Counter
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Complete tasks, earn rewards!
          </Typography>
           </CardContent>
      </div>
    </Card>
  );
}

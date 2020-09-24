import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.5)
    }
  },
  button: {
    size: "small",
    margin: theme.spacing(1),
  },
}));

export default function EditProfileButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Button
      variant="contained"
      color="default"
      size="small"
      className={classes.button}
      startIcon={<EditIcon />}
    >
      Edit
    </Button>
    </div>
  );
}

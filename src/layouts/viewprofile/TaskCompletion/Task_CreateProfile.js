import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import CompleteProfileIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import { AlertComplete } from '../../../components/AlertComplete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: "#DDEAE4",
  },

  heading: {
    width: '95%',
    color: "#fff",
    backgroundColor: "#C2CBCB",
    borderRadius: 5,
    margin: 5,
  },
}));

export default function TaskCreateProfile() {
  const classes = useStyles();

  return (

    <div className="create-profile">
      <Grid container justify="center" align-items="center">
        
      <div className={classes.heading}>
          <ListItem>
            <ListItemText primary="TASK COMPLETION" />
          </ListItem>
        </div>
        </Grid>

        <div className={classes.root}>
      <Grid container justify="center" align-items="center">
          <List>
            <ListItem>

              <ListItemAvatar>
                <Avatar>
                  <CompleteProfileIcon />
                </Avatar>
              </ListItemAvatar>


              <ListItemText primary="Create your Profile" />
              <ListItemSecondaryAction>
                <AlertComplete
                  alerttitle="Oops!"
                  alerttext="You've already completed this task! Try another task"
                />
              </ListItemSecondaryAction>
            </ListItem>

            <Divider />
          </List>

      </Grid>
        </div>
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CompleteProfileIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';

let read_complete = 0
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: "#ACD5C4",
  },
}));

const handleClick = (event) => {
  
  window.open("#readarticle", "_self");
  /*
    if (read_complete === 0)
    {
        window.open("#readarticle", "_self");
        read_complete =  1 
    }
    else{
        alert("You've already completed this task!")
    }
    */
}
  
export default function TaskReadArticle() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container justify="center" align-items="center">
          <div className={classes.demo}>
            <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <CompleteProfileIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Read your first article!" onClick={handleClick} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" style={{ color: '#7BB551' }} >
                      <VerifiedUserIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>

            </List>
          </div>
        </Grid>
    </div>
  );
}

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
import IncompleteIcon from '@material-ui/icons/Error';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CompleteIcon from '@material-ui/icons/CheckCircle';
import CompleteProfileIcon from '@material-ui/icons/AccountCircle';
import ReferFriendIcon from '@material-ui/icons/GroupAdd';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 799,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 4, 0),
  },
}));

export default function InteractiveList() {
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
                  <ListItemText primary="Create Profile" />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" style={{ color: '#7BB551' }} >
                      <VerifiedUserIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <CompleteIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Complete profile" />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" style={{ color: '#FF0000' }}>
                      <IncompleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ReferFriendIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Refer a friend" />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" style={{ color: '#FF0000' }}>
                      <IncompleteIcon />
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
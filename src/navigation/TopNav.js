import React, { Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export class TopNav extends Component {
    render() {

  return (
    <div className="top-nav-container">
      <AppBar position="static" style={{ backgroundColor: '#7BB551' }} >
        <Toolbar>
          <IconButton edge="start" aria-label="menu" style={{ color: '#fff' }} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Carbonbase
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import DialogContentText from '@material-ui/core/DialogContentText';

export class AlertComplete extends Component {
  constructor(props) {
    super();
    this.state = {
      open: false
    }

    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  };

  render() {
    return (
      <div>

        <IconButton edge="end" variant="outlined" 
        style={{ padding: 15, color: '#7BB551', marginTop: "2%" }}
        onClick={this.handleClickOpen}>
          <VerifiedUserIcon />
        </IconButton>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.alerttitle}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.props.alerttext}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="black" autoFocus>
              OK
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

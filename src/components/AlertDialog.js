import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export class AlertDialog extends Component {
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
      open:true
    })

  }

  handleClose = () => {
    this.setState({
      open:false
    })
    window.open("#viewprofile", "_self");
  };

  render() {
    return (
    <div>
      
      <Button variant="outlined" style={{ padding: 15, color: '#7BB551', marginTop: 12}}
      onClick={this.handleClickOpen}>
        {this.props.buttontext}
      </Button>
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

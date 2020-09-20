import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export class SaveButton extends Component {
    render() {
        return (
                <Button onClick={this.props.onClick} variant="contained" 
                href="#viewprofile">
                  Save 
                </Button>           
        )
    }
}

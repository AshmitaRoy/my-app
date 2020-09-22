import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export class CBButton extends Component {
    render() {
        return (    
                <Grid container justify="center" alignItems="center" >
                <Button onClick={this.props.onClick} variant="contained" 
                href={this.props.url} value={this.props.label}
                style={{ backgroundColor: '#7BB551' }}  > 
                </Button>  
                </Grid>     
        )
    }
}

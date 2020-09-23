import CardMedia from '@material-ui/core/CardMedia';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

export class SeedNumber extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="seednum-container">
                    <Typography variant="h2" color="#ffff">
                        {this.props.seedNum}
                    </Typography>
            </div>
        );
    }

}
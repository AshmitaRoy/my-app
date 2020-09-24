//import CardMedia from '@material-ui/core/CardMedia';
import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";

export class SeedNumber extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="seednum-container">
                    <Typography variant="h3" color="#ffff">
                        {this.props.seedNum}
                    </Typography>
            </div>
        );
    }

}
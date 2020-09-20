import React, { Component } from 'react';
import ProfileIcon from '../viewprofile/ProfileIcon';
import InputTags from './InputTags';
import Grid from '@material-ui/core/Grid';
import BasicTextFields from './InputName';

export class EditProfileLayout extends Component {
    render() {
        return (
            <div className="editprofile-container">
                <ProfileIcon />
                <Grid container justify="center" alignItems="center">
                    <InputTags />
                    <BasicTextFields/>
                </Grid>
            </div>
        );
    }

}
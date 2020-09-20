import React, { Component } from 'react';
import ProfileIcon from '../viewprofile/ProfileIcon';
import InputTags from './InputTags';
import Grid from '@material-ui/core/Grid';
import InputName from './InputName';
import CountrySelect from './InputCountry';
import InputBio from './InputBio';
import { SaveButton } from '../../components/button/SaveButton';

export class EditProfileLayout extends Component {
    render() {
        return (
            <div className="editprofile-container">
                <div className="row">
                <ProfileIcon />
                </div>
                <div className="row">
                <Grid container justify="center" alignItems="center">
                    <InputTags/>
                    <InputBio/>
                    <InputName/>
                    <CountrySelect/>
                </Grid>
                <Grid container justify="center" alignItems="center" >
                    <SaveButton onClick={this.handleSave} />
                </Grid>
            </div>
            </div>
        );
    }

}
import React, { Component } from 'react';
import ProfileTags from './ProfileTags';
import ProfileIcon from './ProfileIcon';
import queryString from 'query-string'
import TaskCreateProfile from './TaskCompletion/Task_CreateProfile';
import TaskReadArticle from './TaskCompletion/Task_ReadArticle';
import TaskCompleteProfile from './TaskCompletion/Task_CompleteProfile';
import SeedCounterCard from './SeedCounter/SeedCounterCard'
import { SeedNumber } from './SeedCounter/SeedNumber';
import Grid from '@material-ui/core/Grid';
import BioField from './BioField';
import EditProfileButton from '../../components/button/EditProfileButton';
import { Typography } from '@material-ui/core';

export class ViewProfileLayout extends Component {
    constructor(props) {
        super();
        this.state = {
            seedNum: 0
        }
    }

    componentDidMount() {

        const parameters = queryString.parse(this.props.location.search)

        let addedSeeds = parameters.seeds
        /*
        let seedSum = this.state.seedNum + addedSeeds
        console.log("added",addedSeeds)
        console.log("seedsum",seedSum)
        */
        this.setState({ seedNum: Number(this.state.seedNum + addedSeeds) })
        /*
        parse URL to find if edited
        if % > 60% then setState of editcomplete=1
        if < 60, setState editcomplete=0
        IconRenderer // similar to WasteSources popup
        If 1, show 
        */

    }

    render() {
        return (
            <div className="viewprofile-container">
                <ProfileIcon />
                <BioField />
                <ProfileTags />

                <Grid container justify="flex-end" align-items="flex-end">
                    <EditProfileButton />
                </Grid>

                <Grid container justify="flex-start" align-items="flex-start">
                    <Grid item>
                        <SeedCounterCard />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">{this.state.seedNum}</Typography>
                    </Grid>
                </Grid>

                <TaskCreateProfile />
                <TaskCompleteProfile />
                <TaskReadArticle />
            </div >
        );
    }

}
import React, { Component } from 'react';
import Article from './Article';
import Grid from '@material-ui/core/Grid';
import { AlertDialog} from '../../components/AlertDialog';

export class ReadArticleLayout extends Component {
    render() {
        return (
            <div className="card read-article-container">
                <Grid container justify="center" align-items="center">
                    <Article />
                    <AlertDialog url="#viewprofile"
                        buttontext="I read this"
                        alerttitle="Congratulations!"
                        alerttext="You just finished reading your first article! You have earned 10 seeds!"
                    />
                </Grid>
            </div>
        );
    }

}
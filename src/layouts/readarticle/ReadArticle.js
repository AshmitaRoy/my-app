import React, { Component } from 'react';
import Article from './Article';
import Grid from '@material-ui/core/Grid';
import { CBButton } from '../../components/button/CB-Button';

const handleClick = (event) => {
    alert("Congratulations on reading your first article! You have earned 10 seeds!")
    //axios post 10 seeds to viewprofile?
    //send 10seeds in URL and parse in viewprofile?
}

export class ReadArticleLayout extends Component {
    render() {
        return (
            <div className="card read-article-container">
                <Grid container justify="center" align-items="center">
                    <Article />
                <CBButton onClick={handleClick} label="Complete" 
                url="#viewprofile"/>
                </Grid>
            </div>
        );
    }

}
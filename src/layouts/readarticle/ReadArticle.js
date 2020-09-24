import React, { Component } from 'react';
import Article from './Article';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { AlertDialog} from '../../components/AlertDialog';

export class ReadArticleLayout extends Component {
    constructor(props) {
      super();
      this.handleReturn = this.handleReturn.bind(this)
    }
    
handleReturn(){
    window.open("#viewprofile?seeds=0", "_self");
}
    render() {
        return (
            <div className="card read-article-container">
                <Grid container justify="center" align-items="center">
                    <Article />
                    <AlertDialog url="#viewprofile?seeds=100"
                        buttontext="I read this"
                        alerttitle="Congratulations!"
                        alerttext="You just finished reading your first article! You have earned 100 seeds!"
                    />
                </Grid>
          <Button onClick={this.handleReturn} color="black" autoFocus>
            Return
          </Button>
            </div>
        );
    }

}
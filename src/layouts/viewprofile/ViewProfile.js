import React, { Component } from 'react';
import ProfileTags from './ProfileTags';
import ProfileIcon from './ProfileIcon';
import TaskCreateProfile from './TaskCompletion/Task_CreateProfile';
import TaskReadArticle from './TaskCompletion/Task_ReadArticle';
import TaskCompleteProfile from './TaskCompletion/Task_CompleteProfile';
import SeedCounterCard from './SeedCounter/SeedCounterCard'
import { SeedNumber } from './SeedCounter/SeedNumber';

export class ViewProfileLayout extends Component {
    constructor(props) {
        super();
    this.state = {
        seedNum: 0
    }
}

    componentDidMount(){
        
        const parameters = queryString.parse(this.props.location.search)
        this.setState({ seedNum: parameters.seeds })
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
                <ProfileIcon/>
                <ProfileTags/>
                <SeedCounterCard/>
                <SeedNumber seedNum={this.state.seedNum}/>
                <TaskCreateProfile/>
                <TaskCompleteProfile/>
                <TaskReadArticle/>
            </div>
        );
    }

}
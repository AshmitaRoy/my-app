import React, { Component } from 'react';
import ProfileTags from './ProfileTags';
import ProfileIcon from './ProfileIcon';
import TaskCreateProfile from './TaskCompletion/Task_CreateProfile';
import TaskReadArticle from './TaskCompletion/Task_ReadArticle';
import TaskCompleteProfile from './TaskCompletion/Task_CompleteProfile';

export class ViewProfileLayout extends Component {
    componentDidMount(){
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
                <TaskCreateProfile/>
                <TaskCompleteProfile/>
                <TaskReadArticle/>
            </div>
        );
    }

}
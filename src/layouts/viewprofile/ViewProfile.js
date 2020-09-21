import React, { Component } from 'react';
import InteractiveList from './ProfileCompletion';
import ProfileTags from './ProfileTags';
import ProfileIcon from './ProfileIcon';
import CreateProfile from './TaskCompletion/Task_CreateProfile';
import ReadArticle from './TaskCompletion/Task_ReadArticle';
import CompleteProfile from './TaskCompletion/Task_CompleteProfile';

export class ViewProfileLayout extends Component {
    render() {
        return (
            <div className="viewprofile-container">
                <ProfileIcon/>
                <ProfileTags/>
                <CreateProfile/>
                <CompleteProfile/>
                <ReadArticle/>
                <InteractiveList/>
            </div>
        );
    }

}
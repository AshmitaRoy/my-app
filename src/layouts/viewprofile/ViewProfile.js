import React, { Component } from 'react';
import InteractiveList from './ProfileCompletion';
import ProfileTags from './ProfileTags';
import ProfileIcon from './ProfileIcon';
import CreateProfile from './TaskCompletion/CreateProfile';

export class ViewProfileLayout extends Component {
    render() {
        return (
            <div className="viewprofile-container">
                <ProfileIcon/>
                <ProfileTags/>
                <CreateProfile/>
                <InteractiveList/>
            </div>
        );
    }

}
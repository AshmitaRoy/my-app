import React, { Component } from 'react';
import InteractiveList from './ProfileCompletion';
import ProfileTags from './ProfileTags';
import ProfileIcon from './ProfileIcon';

export class ViewProfileLayout extends Component {
    render() {
        return (
            <div className="viewprofile-container">
                <ProfileIcon/>
                <ProfileTags/>
                <InteractiveList/>
            </div>
        );
    }

}
import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

export type profilePostsType = {
    profile: ProfileType
}

function Profile(props: profilePostsType) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
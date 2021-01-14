import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

export type profilePostsType = {
    profilePage: ProfilePageType
    dispatch: (action: any) => void
    newPostText: string
}

function Profile(props:profilePostsType) {
    return(
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;
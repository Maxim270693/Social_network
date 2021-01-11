import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

export type profilePostsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    changeNewText: (newText: string) => void
    newPostText: string
}

function Profile(props:profilePostsType) {
    return(
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     changeNewText={props.changeNewText}
                     addPost={props.addPost}/>
        </div>
    );
}

export default Profile;
import React from 'react';
import {
    addPostActionCreator,
    ChangeNewTextActionCreator,
    setStatus,
    setUserProfile,
} from "../../../redux/profile-reducer";
import MyPosts, {PostsType} from "./MyPosts";
import {SendMessageCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollowSuccess
} from "../../../redux/users-reducer";
import {AllStateType} from "../../../redux/redux-store";
import {setAuthUserData} from "../../../redux/auth-reducer";


export type ActionType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof ChangeNewTextActionCreator>
    | ReturnType<typeof SendMessageCreator>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setStatus>


type mapStateToPropsType = {
    posts: Array<PostsType>
    // newPostText: string
}

type mapDispatchToPropsType = {
    addPost: (newPostText:string) => void
}

export type MyPostsPropsType = mapStateToPropsType | mapDispatchToPropsType


let mapStateToProps = (state: AllStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        // newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
import React from 'react';
import {addPostActionCreator, ChangeNewTextActionCreator, setUserProfile,} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
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
import {PostType} from "../../../redux/store";
import {setAuthUserData} from "../../../redux/auth-reducer";


export type ActionType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof ChangeNewTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
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


type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}

type mapDispatchToPropsType = {
    updateNewPostText: (value: string) => void
    addPost: () => void
}

let mapStateToProps = (state: AllStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewPostText: (value: string) => {
            let action = ChangeNewTextActionCreator(value);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
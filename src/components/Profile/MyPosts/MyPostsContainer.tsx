import React from 'react';
import {addPostActionCreator, ChangeNewTextActionCreator,} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../../redux/users-reducer";
import {AllStateType} from "../../../redux/redux-store";
import {PostType} from "../../../redux/store";


export type ActionType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof ChangeNewTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof SendMessageCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>


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
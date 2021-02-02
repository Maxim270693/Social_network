import React from 'react';
import {addPostActionCreator, ChangeNewTextActionCreator,} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/users-reducer";
import {AllStateType} from "../../../redux/redux-store";


export type ActionType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof ChangeNewTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof SendMessageCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>


type mapStateToPropsType = {

}

type mapDispatchToPropsType = {
    updateNewPostText: (value: string) => void
    addPost: () => void
}

let mapStateToProps = (state: AllStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
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



const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts);


export default MyPostsContainer;
import {ActionType} from "../components/Profile/MyPosts/MyPostsContainer";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";
import {PostsType} from "../components/Profile/MyPosts/MyPosts";


const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

type PostPropsType = {
    id: number
    message: string
    like: number
}

type initialStatePropsType = {
    posts: Array<PostPropsType>
    //newPostText: string
    profile: null | ProfileType
    status: string
}
export type ProfileContactsType = {
    "facebook": null | string,
    "website": null | string,
    "vk": null | string,
    "twitter": null | string,
    "instagram": null | string,
    "youtube": null | string,
    "github": null | string,
    "mainLink": null | string
}
export type PhotosType = {
    "small": null | string,
    "large": null | string,
}
export type ProfileType = {
    "aboutMe": string,
    "contacts": ProfileContactsType,
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos":PhotosType
}


let initialState = {
    posts: [
        {id: 1, message: 'Hi how are you?', like: 12},
        {id: 2, message: "It's my first post", like: 1}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state: initialStatePropsType = initialState, action: ActionType): initialStatePropsType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsType = {
                id: 5,
                message: action.newPostText,
                like: 32
            };
            return {...state,posts: [...state.posts,newPost] }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }

}

export const addPostActionCreator = (newPostText:string) => ({type: ADD_POST,newPostText}  as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    userAPI.getProfile(userId)
        .then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}
export const ChangeNewTextActionCreator = (newText: string) => ({type: CHANGE_NEW_TEXT, newText: newText} as const)

export default profileReducer
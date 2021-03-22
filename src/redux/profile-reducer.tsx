import {PostType} from "./store";
import {ActionType} from "../components/Profile/MyPosts/MyPostsContainer";
import {Dispatch} from "redux";
import {userAPI} from "../api/api";


const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

type PostPropsType = {
    id: number
    message: string
    like: number
}

type initialStatePropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    profile: null | ProfileType
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
    newPostText: '',
    profile: null
}

const profileReducer = (state: initialStatePropsType = initialState, action: ActionType): initialStatePropsType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                like: 32
            };
            return {...state,posts: [...state.posts,newPost],newPostText: '' }
        }
        case CHANGE_NEW_TEXT: {
            return {...state,newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }

}

export const addPostActionCreator = () => ({type: ADD_POST}  as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const ChangeNewTextActionCreator = (newText: string) => ({type: CHANGE_NEW_TEXT, newText: newText} as const)

export default profileReducer
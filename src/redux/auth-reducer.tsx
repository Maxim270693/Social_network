import {ActionType} from "../components/Profile/MyPosts/MyPostsContainer";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export const SET_USER_DATA = "SET-USER-DATA"

type FieldsErrorsType = {
    fieldsErrors: []
}

type MessagesType = {
    messages: []
}

export type DataType = {
    data: InitialStatePropsType
    messages: MessagesType
    fieldsErrors: FieldsErrorsType
    resultCode: number
}

export type InitialStatePropsType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth:null | boolean
}

/*
{"data":{
    "id":14465,
    "login":"MaksimZhuk93",
    "email":"maxim.zhuk.93@mail.ru"
},
"messages":[],
"fieldsErrors":[],
"resultCode":0
}
*/

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialStatePropsType = initialState, action: ActionType): InitialStatePropsType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId:null | number, email:null | string, login:null | string) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
} as const)
export const getAuthUserData = () => (dispatch:Dispatch) => {
    authAPI.me()
        .then(response => {
            if( response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id,email,login))
            }
        })
}

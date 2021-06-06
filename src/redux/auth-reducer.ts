import {ActionType} from "../components/Profile/MyPosts/MyPostsContainer";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AllStateType} from "./redux-store";
import {stopSubmit} from "redux-form";


export const SET_USER_DATA = "samurai-network/auth/SET-USER-DATA"

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
    userId: string
    email: null | string
    login: null | string
    isAuth: null | boolean
    authorizedUserId: null | string
}

let initialState = {
    userId: '',
    email: null,
    login: null,
    isAuth: false,
    authorizedUserId: null
}

export const isAuthReducer = (state: InitialStatePropsType = initialState, action: ActionType): InitialStatePropsType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId: string, email: null | string, login: null | string, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
} as const)


export const getAuthUserData = () => async (dispatch: ThunkDispatch<AllStateType, unknown, ActionType>) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = () => async (dispatch: ThunkDispatch<AllStateType, unknown, ActionType>) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData('', null, null, false))
    }
}

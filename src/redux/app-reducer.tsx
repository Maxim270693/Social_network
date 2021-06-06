import {ActionType} from "../components/Profile/MyPosts/MyPostsContainer";
import {ThunkDispatch} from "redux-thunk";
import {AllStateType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";


export type InitialStatePropsType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}

export const appReducer = (state: InitialStatePropsType = initialState, action: ActionType): InitialStatePropsType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS": {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}
export const initializedSuccess = () => ({type: "INITIALIZED_SUCCESS"} as const)
export const initializeApp = () => async (dispatch: ThunkDispatch<AllStateType, unknown, ActionType>) => {
    let promise = dispatch(getAuthUserData())
    let response = await promise
    dispatch(initializedSuccess())
}

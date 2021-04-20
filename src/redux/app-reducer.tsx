import {ActionType} from "../components/Profile/MyPosts/MyPostsContainer";
import {ThunkDispatch} from "redux-thunk";
import {AllStateType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";


// export const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

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
export const initializeApp = () => (dispatch: ThunkDispatch<AllStateType, unknown, ActionType>) => {
    let promise = dispatch(getAuthUserData())
    promise.then((res) => {
        dispatch(initializedSuccess())
    })
}

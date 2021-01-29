import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

let store = createStore(reducers)


export type AllStateType = ReturnType<typeof reducers>
export type StoreTypeRedux = typeof store

export default store
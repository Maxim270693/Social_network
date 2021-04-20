import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {appReducer} from "./app-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from "redux-form";
import {isAuthReducer} from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: isAuthReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware))


export type AllStateType = ReturnType<typeof reducers>
export type StoreTypeRedux = typeof store

export default store
import {applyMiddleware, combineReducers, createStore,compose} from "redux";
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

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


//let store = createStore(reducers,applyMiddleware(thunkMiddleware))


export type AllStateType = ReturnType<typeof reducers>
export type StoreTypeRedux = typeof store

export default store
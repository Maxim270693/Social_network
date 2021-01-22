import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store, {AllStateType} from './redux/redux-store';


const rerenderEntireTree = (state: AllStateType) => {
    ReactDOM.render(
        <BrowserRouter>
                <App dispatch={store.dispatch.bind(store)}
                     newPostText={state.profilePage.newPostText}
                     store={store}
                />
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

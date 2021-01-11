import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, changeNewText} from './redux/state'
import {BrowserRouter} from "react-router-dom";

 const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state}
                 addPost={addPost}
                 changeNewText={changeNewText}
                 newPostText={state.profilePage.newPostText}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree();

 subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

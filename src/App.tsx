import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";


type PropsType = {
    dispatch: (action: any) => void
    appState: RootStateType
    newPostText: string
}

function App(props: PropsType) {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs state={props.appState.dialogsPage}/>}/>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.appState.profilePage}
                           dispatch={props.dispatch}
                           // changeNewText={props.changeNewText}
                           newPostText={props.newPostText}
                       />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;





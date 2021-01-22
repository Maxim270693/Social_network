import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {StoreTypeRedux} from "./redux/redux-store";


type PropsType = {
    store: StoreTypeRedux
    dispatch: (action: any) => void
    newPostText: string
}

const App: React.FC<PropsType> = (props) => {

    const state = props.store.getState()

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer
                    // dialogsPage={state.dialogsPage}
                    store={props.store}
                />}/>
                <Route path='/profile'
                       render={() => <Profile
                           // profilePage={state.profilePage}
                           // dispatch={props.dispatch}
                           // newPostText={props.newPostText}
                           store={props.store}
                       />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;





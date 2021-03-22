import React from 'react'
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AllStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";



let mapStateToProps = (state:AllStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(SendMessageCreator())
        }
    }
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs)


export default DialogsContainer;
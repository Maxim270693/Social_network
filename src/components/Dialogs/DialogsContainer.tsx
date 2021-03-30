import React from 'react'
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs, {DialogsType} from "./Dialogs";
import {AllStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


export type MapStatePropsType = {
    dialogsPage: DialogsType
    //isAuth: boolean | null
}

export type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type PropsType = MapStatePropsType | MapDispatchToPropsType


let mapStateToProps = (state:AllStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        //isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(SendMessageCreator())
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect<MapStatePropsType,MapDispatchToPropsType, {}, AllStateType>(mapStateToProps,mapDispatchToProps) (AuthRedirectComponent)


export default DialogsContainer;
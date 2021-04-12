import React from 'react'
import {SendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs, {DialogsType} from "./Dialogs";
import {AllStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


export type MapStatePropsType = {
    dialogsPage: DialogsType
}

export type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void
}

export type PropsType = MapStatePropsType | MapDispatchToPropsType


let mapStateToProps = (state:AllStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(SendMessageCreator(newMessageBody))
        }
    }
}


export default compose<React.ComponentType>(
    connect<MapStatePropsType,MapDispatchToPropsType, {}, AllStateType>(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
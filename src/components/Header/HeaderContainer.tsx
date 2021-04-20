import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {AllStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";


type MapStateToPropsType = {
    isAuth: null | boolean
    login: null | string
}
type MapDispatchToPropsType = {
    // getAuthUserData:() => void
    logout: () => void
}
type ClassType = MapStateToPropsType & MapDispatchToPropsType


class HeadersContainer extends React.Component <ClassType, {}> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AllStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const HeaderContainer =  connect<MapStateToPropsType,MapDispatchToPropsType, {}, AllStateType>(mapStateToProps, {logout})(HeadersContainer);
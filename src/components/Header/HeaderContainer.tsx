import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {AllStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    isAuth: null | boolean
    login: null | string
}
type MapDispatchToPropsType = {
    getAuthUserData:() => void
    logout: () => void
}
type ClassType = MapStateToPropsType & MapDispatchToPropsType


class HeadersContainer extends React.Component <ClassType, {}> {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AllStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const HeaderContainer =  connect<MapStateToPropsType,MapDispatchToPropsType, {}, AllStateType>(mapStateToProps, {getAuthUserData,logout})(HeadersContainer);
import React from 'react'
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AllStateType} from "../../redux/redux-store";

/*type AuthType = {
    isAuth: null | boolean
    login: null | string
}*/


type MapStateToPropsType = {
    isAuth: null | boolean
    login: null | string
}

type MapDispatchToPropsType = {
    setAuthUserData:(id: null |  number,email: null | string,login: null | string) => void
}

type ClassType = MapStateToPropsType & MapDispatchToPropsType


class HeadersContainer extends React.Component <ClassType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if( response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id,email,login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state: AllStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const HeaderContainer =  connect<MapStateToPropsType,MapDispatchToPropsType, {}, AllStateType>(mapStateToProps, {setAuthUserData})(HeadersContainer);
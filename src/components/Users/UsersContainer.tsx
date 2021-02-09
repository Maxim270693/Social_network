import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, usersType} from "../../redux/users-reducer";
import {AllStateType} from "../../redux/redux-store";
import Users from "./Users";


type mapStateToPropsType = {
    users: Array<usersType>
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<usersType>) => void
}

export let mapStateToProps = (state: AllStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: usersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AllStateType>(mapStateToProps, mapDispatchToProps)(Users)
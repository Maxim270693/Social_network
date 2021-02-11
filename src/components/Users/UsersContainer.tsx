import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    usersType
} from "../../redux/users-reducer";
import {AllStateType} from "../../redux/redux-store";
import Users from "./Users";


type MapStateToPropsType = {
    users: Array<usersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<usersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export let mapStateToProps = (state: AllStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: usersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
    }
}

export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllStateType>(mapStateToProps, mapDispatchToProps)(Users)
import React from "react";
import {connect} from "react-redux";
import {
    follow,
    FollowingInProgressType,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    usersType
} from "../../redux/users-reducer";
import {AllStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    users: Array<usersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<FollowingInProgressType>
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean,userId: number) => void
    getUsers:(currentPage: number,pageSize: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export let mapStateToProps = (state: AllStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsers(pageNumber,this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

// let withRedirect = withAuthRedirect(UsersContainer)


export const UserContainer = withAuthRedirect((connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllStateType>(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersContainer)))
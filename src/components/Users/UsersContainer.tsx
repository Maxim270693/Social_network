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
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getTotalUsersCount,
    getUsersPageSize,
    getUsersSuperSelector
} from "../../redux/users-selectors";


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
        users:getUsersSuperSelector(state),
        pageSize: getUsersPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        let {currentPage,pageSize} = this.props
        this.props.getUsers(currentPage,pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        let {pageSize} = this.props
        this.props.getUsers(pageNumber,pageSize)
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

export default  compose<React.ComponentType>(
    withAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AllStateType>(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    })
)(UsersContainer)



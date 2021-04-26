import { createSelector } from "reselect";
import {AllStateType} from "./redux-store";

export const getUsersPage = (state: AllStateType) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsersPage,(users) => {
    return users.filter(() => {})
})

export const getUsersPageSize = (state: AllStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AllStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AllStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AllStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AllStateType) => {
    return state.usersPage.followingInProgress
}
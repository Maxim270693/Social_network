import {ActionType} from "../components/Profile/MyPosts/MyPostsContainer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


type LocationType = {
    city: string
    country: string
}

export type usersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType

}

export type usersPropsType = {
    users: Array<usersType>
}


let initialState = {
    users: [ ]
}

export const usersReducer = (state: usersPropsType = initialState, action: ActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state,users: [...state.users,...action.users]}
        default:
            return state
    }

}

export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsersAC = (users:  usersType[]) => ({type: SET_USERS, users}) as const // actioncreator function которая возвращает объект action

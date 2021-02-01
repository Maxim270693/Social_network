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
    users: [
        {
            id: 1,
            photoUrl: 'https://images.pexels.com/photos/3031396/pexels-photo-3031396.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            followed: false,
            fullName: 'Julia',
            status: 'I am a sister',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://i.pinimg.com/236x/a6/d0/87/a6d087f3ee63e499977841d2a90a53e6.jpg',
            followed: true,
            fullName: 'Vlad',
            status: 'I am a friend',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaXrFMnQrS3cdGFTB-UpG-5qMGMQyybPu7xg&usqp=CAU',
            followed: false,
            fullName: 'Yura',
            status: 'I am a friend too',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ]
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
            return {...state,users: [...state.users,...action.users.users]}
        default:
            return state
    }

}

export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsersAC = (users: usersPropsType) => ({type: SET_USERS, users}) as const

import {followSuccess, initialStatePropsType, unfollowSuccess, usersReducer} from "./users-reducer";

test('user should be follow', () => {

    const state:initialStatePropsType = {
        users: [{
            id: 1,
            name: 'Alex',
            status: 'sdsd',
            followed: false,
            photos: {
                large:'asdas',
                small:'sdsd'
            },
            uniqueUrlName:'ewed'

        }],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    }

    const newState = usersReducer(state,followSuccess( 1))

    expect(newState.users[0].followed).toBe(true)


    /*const newState2 = usersReducer(state,setUsers([{
        id: 1,
        name: 'Alex',
        status: 'sdsd',
        followed: false,
        photos: {
            large:'asdas',
            small:'sdsd'
        },
        uniqueUrlName:'ewed'

    }]))*/
})
test('test should be unfollow', () => {

    const state:initialStatePropsType = {
        users: [{
            id: 1,
            name: 'Alex',
            status: 'sdsd',
            followed: false,
            photos: {
                large:'asdas',
                small:'sdsd'
            },
            uniqueUrlName:'ewed'

        }],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    }

    const newState = usersReducer(state,unfollowSuccess(2))

    expect(newState.users[0].followed).toBe(false)
})

import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";

let state: any = {
    posts: [
        {id: 1, message: 'Hi how are you?', like: 12},
        {id: 2, message: "It's my first post", like: 1}
    ]
}

it('new post should be added', () => {
    let action = addPostActionCreator('BalBla')

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})
it('message of new post should be correct',() => {
    let action = addPostActionCreator('BlaBla')

    let newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe('BlaBla')
})
it('after deleting length of messages should be decrement', () => {
    let action = deletePostActionCreator(1)

    let newState = profileReducer(state,action)

    expect(newState.posts.length).toBe(1)
})

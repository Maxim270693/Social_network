let rerenderEntireTree = () => {
    console.log('State changed')
}

export type MessageType = {
    id: number
    message: string

}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    like: number
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export type AppStateType = {
    appState: RootStateType
}




let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi how are you?', like: 12},
            {id: 2, message: "It's my first post", like: 1}
        ],
        newPostText: ' '
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Maksim'},
            {id: 2, name: 'Lika'},
            {id: 3, name: 'Houston'},
            {id: 4, name: 'Sofa'},
            {id: 5, name: 'Eva'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'Hello'},
            {id: 4, message: 'Goodbye'},
            {id: 5, message: 'Welcome'}
        ]
    }
}



export const addPost = () => {
    const newPost:PostType = {    // что значит лучше перменную типизировать(типизация 31-34 выпуски 10мин 42сек )
        id: 5,
        message:state.profilePage.newPostText,   // почему тут postMessage а не string
        like: 32
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree();
}

export const changeNewText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree();
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}

export default state;


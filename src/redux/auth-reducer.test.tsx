import {authReducer, InitialStatePropsType, SET_USER_DATA} from "./auth-reducer";

test('isAuth should be true', () => {
    const state:InitialStatePropsType = {
        userId: null,
        email: null,
        login: null,
        isAuth: false
    }

    const newAuthReducer = authReducer(state, {type: SET_USER_DATA, data: {userId: null, email: null, login: null}})

    expect(newAuthReducer.isAuth).toBe(true)

})
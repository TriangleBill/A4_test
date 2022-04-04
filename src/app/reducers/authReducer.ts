import { createReducer } from "@reduxjs/toolkit";
import { addUser } from './../actions';

const initialState = {
    users: [{
        username: 'admin',
        password: 12345
    }]
}

export const authReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(addUser, (state, action) => {
        const {user} = action.payload
        state.users.push = user
    })
})
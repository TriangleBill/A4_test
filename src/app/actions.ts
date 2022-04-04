import { createAction } from "@reduxjs/toolkit";
import { ActionTypes } from "./types";

export const addUser = createAction(
    ActionTypes.AddUser,
    (user) => ({
        payload: {
            user
        }
    })
)
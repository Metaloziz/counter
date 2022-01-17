import {combineReducers, createStore} from "redux";
import {reducer} from "../reducer_my/Reducer";


export const rootReducer = combineReducers({
    counter: reducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = typeof store

export const store = createStore(rootReducer)

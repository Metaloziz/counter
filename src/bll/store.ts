import {combineReducers, createStore, applyMiddleware} from "redux";
import {reducer} from "../reducer_my/Reducer";
import thunk from "redux-thunk";


export const rootReducer = combineReducers({
    counter: reducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = typeof store

export const store = createStore(rootReducer, applyMiddleware(thunk))

import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";


export const allReducer = combineReducers(
    {counterData: counterReducer}
)


export type allReducerType = ReturnType<typeof allReducer>
export type newStoreType = typeof newStore

export const newStore = createStore(allReducer)
import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";


export const allReducer = combineReducers(
    {counterData: counterReducer}
)


type allReducerType = ReturnType<typeof allReducer>
type newStoreType = typeof newStore

export const newStore = createStore(allReducer)
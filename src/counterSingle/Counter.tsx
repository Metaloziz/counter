import React from 'react';
import s from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {allReducerType, newStoreType} from "./counter-store";
import {addAC} from "./counter-reducer";


const Counter = () => {

    const data = useSelector<allReducerType, number>(state => state.counterData.data)
    const dispatch = useDispatch()

    const addCallBack = () => {
        dispatch(addAC())
    }


    return (
        <div className={s.main}>
            {data}
            <button onClick={addCallBack}>add</button>
        </div>
    );
};

export default Counter;
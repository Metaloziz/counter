import s from './DisplayContainer.module.css'
import {Button} from "../Button/Button";
import React, {useEffect} from "react";
import {addAC, resAC, setAC, setMaxAC, setMinAC, statePT} from "../../reducer_my/Reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";


type DisplayContainerPT = {
    // state: statePT
    // dispatch: (action: actionPT) => void
    titleADD: string
    titleRES: string
}

export const DisplayContainer = React.memo(({titleADD, titleRES}: DisplayContainerPT) => {

    console.log('DisplayContainer')

    let state = useSelector<AppStateType, statePT>(store => store.counter)
    let dispatch = useDispatch();

    useEffect(() => {

        let newMax = localStorage.getItem('max')
        let newMin = localStorage.getItem('min')

        if (newMax && newMin) {
            dispatch(setMaxAC(+newMax))
            dispatch(setMinAC(+newMin))
            dispatch(setAC())
        }

    }, [])


    let disableForAdd = state.presentValue === state.maxValue
    let disableForRes = state.presentValue === state.minValue

    return (<div className={s.app}>
            <div className={state.presentValue === state.maxValue ? s.end : s.display}>
                <span>{state.presentValue}</span>
            </div>
            <div className={s.buttons}>
                <Button disabled={disableForAdd} dispatch={dispatch} action={addAC} title={titleADD}/>
                <Button disabled={disableForRes} dispatch={dispatch} action={resAC} title={titleRES}/>
            </div>
        </div>
    )
})


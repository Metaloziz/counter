import React, {ChangeEvent, useEffect} from "react";
import s from './SettingContainer.module.css'
import {Button} from "../Button/Button";
import {
    actionPT,
    disableSettingButtonAC,
    setAC,
    setMaxAC,
    setMinAC,
    setSettingErrorAC,
    statePT
} from "../../reducer_my/Reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";


type SettingContainerPT = {
    titleSET: string
}

export const SettingContainer = React.memo(({titleSET}: SettingContainerPT) => {

    console.log('SettingContainer')

    let state = useSelector<AppStateType, statePT>(store => store.counter)
    let dispatch = useDispatch()

    useEffect(() => {

        let newMax = localStorage.getItem('max')
        let newMin = localStorage.getItem('min')

        if (newMax && newMin) {
            dispatch(setMaxAC(JSON.parse(newMax)))
            dispatch(setMinAC(JSON.parse(newMin)))
        }
    }, [])


    useEffect(() => {
        if (state.minValue === state.settingMinValue
            && state.maxValue === state.settingMaxValue
            && !state.disableSettingButton) {
            dispatch(disableSettingButtonAC(true))
        }

        if (state.settingMinValue === state.settingMaxValue && !state.disableSettingButton) {
            if (!state.settingError) {
                dispatch(setSettingErrorAC(true))
            }
            dispatch(disableSettingButtonAC(true))
        }
    })

    const maxCB = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSettingErrorAC(false))
        dispatch(disableSettingButtonAC(false))
        dispatch(setMaxAC(+e.currentTarget.value))
    }
    const minCB = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSettingErrorAC(false))
        dispatch(disableSettingButtonAC(false))
        dispatch(setMinAC(+e.currentTarget.value))
    }

    const localSetCB = (action: actionPT) => {

        localStorage.setItem('min', JSON.stringify(state.settingMinValue))
        localStorage.setItem('max', JSON.stringify(state.settingMaxValue))

        dispatch(action)
    }

    return (
        <div className={s.app}>
            <label> max <input className={state.settingError ? s.error : ''}
                               onChange={maxCB}
                               min={state.settingMinValue}
                               type="number"
                               value={state.settingMaxValue}/></label>
            <label> min <input className={state.settingError ? s.error : ''}
                               onChange={minCB}
                               max={state.settingMaxValue}
                               type="number"
                               value={state.settingMinValue}/></label>
            <div className={s.messageError}>{state.settingError ? <div>MAX and MIN should not be equal</div> : ''}</div>
            <div className={s.set}>
                <Button disabled={state.disableSettingButton}
                        action={setAC}
                        dispatch={localSetCB}
                        title={titleSET}/>
            </div>
        </div>
    )
})


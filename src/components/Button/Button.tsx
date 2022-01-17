import React from "react";
import {actionPT} from "../../reducer_my/Reducer";


export type buttonPT = {
    disabled: boolean
    action: () => actionPT
    title: string
    dispatch: (action: actionPT) => void
}

export const Button = React.memo(({title, dispatch, action, disabled}: buttonPT) => {

    const callback = () => {
        console.log('click')
        dispatch(action())
    }

    return <div>
        <button disabled={disabled} onClick={callback}>{title}</button>
    </div>
})


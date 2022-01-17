export type actionPT =
    addACPT
    | resACPT
    | setACPT
    | setMaxACPT
    | setMinACPT
    | setSettingErrorACPT
    | disableSettingButtonACPT

export type addACPT = ReturnType<typeof addAC>
export type resACPT = ReturnType<typeof resAC>
export type setACPT = ReturnType<typeof setAC>
export type setMaxACPT = ReturnType<typeof setMaxAC>
export type setMinACPT = ReturnType<typeof setMinAC>
export type setSettingErrorACPT = ReturnType<typeof setSettingErrorAC>
export type disableSettingButtonACPT = ReturnType<typeof disableSettingButtonAC>

export const ADD = "ADD"
export const RES = "RES"
export const SET = "SET"
export const SET_MAX = "SET_MAX"
export const SET_MIN = "SET_MIN"
export const SET_SETTING_ERROR = "SET_SETTING_ERROR"
export const DISABLE_SETTING_BUTTON = "DISABLE_SETTING_BUTTON"

export const addAC = () => ({type: ADD} as const)
export const resAC = () => ({type: RES} as const)
export const setAC = () => ({type: SET} as const)
export const setMaxAC = (max: number,) => ({type: SET_MAX, max} as const)
export const setMinAC = (min: number) => ({type: SET_MIN, min} as const)
export const setSettingErrorAC = (error: boolean) => ({type: SET_SETTING_ERROR, error} as const)
export const disableSettingButtonAC = (disable: boolean) => ({type: DISABLE_SETTING_BUTTON, disable} as const)

export type statePT = {
    settingError: boolean
    disableSettingButton: boolean
    settingMinValue: number
    settingMaxValue: number
    minValue: number
    maxValue: number
    presentValue: number
}

export const initialState: statePT = {
    settingError: false,
    disableSettingButton: false,
    settingMinValue: 0,
    settingMaxValue: 5,
    minValue: 0,
    maxValue: 5,
    presentValue: 0,
}

export const reducer = (state: statePT = initialState, action: actionPT): statePT => {

    switch (action.type) {
        case ADD:
            return state.presentValue !== state.maxValue ? {...state, presentValue: state.presentValue + 1} : state;
        case RES:
            return {...state, presentValue: state.minValue}
        case SET:
            return {
                ...state,
                presentValue: state.settingMinValue,
                minValue: state.settingMinValue,
                maxValue: state.settingMaxValue,
            }
        case SET_MAX:
            return {...state, settingMaxValue: action.max}
        case SET_MIN:
            return {...state, settingMinValue: action.min}
        case SET_SETTING_ERROR:
            return {...state, settingError: action.error}
        case DISABLE_SETTING_BUTTON:
            return {...state, disableSettingButton: action.disable}
    }
    return state
}
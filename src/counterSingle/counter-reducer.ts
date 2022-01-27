const ADD = "ADD"

type AllActionsType = AddACT

type AddACT = ReturnType<typeof addAC>

const addAC = () => ({type: ADD} as const)


type initialStateType = {
    data: number
}


const initialState: initialStateType = {
    data: 1
}

export const counterReducer = (state: initialStateType = initialState, action: AllActionsType): initialStateType => {
    switch (action.type) {
        case ADD:
            return {data: state.data + 1}
    }
    return state
}
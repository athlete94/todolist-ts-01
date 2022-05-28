
export type RequestStatusType = 'idle' | 'loading' | 'successed' | 'failed'


type NulableType<T> = null | T
export type InitialStateType = typeof initialState
let initialState = {
    status: 'idle' as RequestStatusType,
    error: null as NulableType<string>,
}

export const AppReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'APP/SET-ERROR':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
};


export type AppActionsType = AppSetStatusType | SetOpenType

export type AppSetStatusType = ReturnType<typeof appSetStatus>
export const appSetStatus = (status: RequestStatusType) => {
    return {
        type: 'APP/SET-STATUS',
        status,
    }as const
}

export type SetOpenType = ReturnType<typeof setOpen>
export const setOpen = (error: NulableType<string>) => {
    return {
        type: 'APP/SET-ERROR',
        error,
    }as const
}


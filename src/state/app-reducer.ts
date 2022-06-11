import {Dispatch} from "redux";
import {authApi} from "../API/todolistApi";
import {setIsLoggedIn} from "./authReducer";
import {AxiosError} from "axios";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";
import {AppThunk} from "./store";

export type RequestStatusType = 'idle' | 'loading' | 'successed' | 'failed'


type NulableType<T> = null | T
export type InitialStateType = typeof initialState
let initialState = {
    status: 'idle' as RequestStatusType,
    error: null as NulableType<string>,
    id: null as null | number,
    login: '',
    email: '',
    isInitialized: false,
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
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
        case 'APP/SET-INITIALIZED':
            return {
                ...state,
                isInitialized: action.isInitialized
            }
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.userData
            }
        default:
            return state
    }
};


export type AppActionsType = AppSetStatusType | SetOpenType | SetIsInitializedType | SetUserDataType

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

export type SetIsInitializedType = ReturnType<typeof setIsInitialized>
export const setIsInitialized = (isInitialized: boolean) => {
    return {
        type: 'APP/SET-INITIALIZED',
        isInitialized,
    }as const
}

export type SetUserDataType = ReturnType <typeof setUserData>
export const setUserData = (userData: {id: number, email: string, login: string}) => {
    return {
        type: 'SET_USER_DATA',
        userData
    }as const
}

//thunk

export const isInitializedTC = (): AppThunk => dispatch => {
    authApi.me()
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(setIsLoggedIn(true))
                dispatch(setUserData(res.data.data))
            }
            else {
                handleServerAppError(res.data, dispatch)
            }
            dispatch(setIsInitialized(true))
        })
        .catch((err: AxiosError) => {
            handleServerNetworkError(dispatch, err.message)
        })
}


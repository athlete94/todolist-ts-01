import {Dispatch} from "redux";
import {appSetStatus, setOpen} from "../state/app-reducer";
import {ResponseType} from "../API/todolistApi";

export const handleServerNetworkError = (dispatch: Dispatch, message: string) => {
    dispatch(setOpen(message))
    dispatch(appSetStatus('failed'))
}

export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: Dispatch,) => {
    if (data.messages.length) {
        dispatch(setOpen(data.messages[0]))
    } else {
        dispatch(setOpen('Some error ocured'))
    }
    dispatch(appSetStatus('failed'))
}
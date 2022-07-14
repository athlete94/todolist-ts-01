import {FilterValuesType} from "../components/Main/Main";
import {todolistApi, TodolistApiType} from "../API/todolistApi";
import {AppActionsType, appSetStatus, RequestStatusType} from "./app-reducer";
import {AxiosError} from "axios";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";
import {AppThunk} from "./store";
import {setTasksTC} from "./tasksReducer";

export type TodolistType = TodolistApiType & {
    filter: FilterValuesType,
    entityStatus: RequestStatusType
}

const initialState: Array<TodolistType> = []


export const todolistsReducer = (state: Array<TodolistType> = initialState, action: todolistsReducerActionType): Array<TodolistType> => {
    switch (action.type) {
        case 'SET-TODOLISTS':
            return action.todolists.map(t => ({...t, filter: 'all', entityStatus: 'idle'}))
        case 'REMOVE-TODOLIST':
            return state.filter(el => el.id !== action.id)
        case 'ADD-TODOLIST':
            let newTodolist: TodolistType = {
                id: action.todolist.id,
                addedDate: action.todolist.addedDate,
                order: action.todolist.order,
                title: action.todolist.title,
                filter: 'all',
                entityStatus: 'idle',
            }
            return [newTodolist, ...state]
        case 'CHANGE-TODOLIST-TITLE':
            return state.map(el => el.id === action.id ? {...el, title: action.title} : el)
        case 'CHANGE-TODOLIST-FILTER':
            return state.map(el => el.id === action.id ? {...el, filter: action.filter} : el)
        case 'SET_ENTITY_STATUS':
            return state.map(tl => tl.id === action.id ? {...tl, entityStatus: action.entityStatus} : tl)
        case 'CLEAR_DATA':
            return []
        default:
            return state
    }
}

export type todolistsReducerActionType =
    RemovetodolistACType
    | AddTodolistACType
    | changeTodolistTitleACType
    | changeTodolistFilterACType
    | SetTodoListsType
    | AppActionsType
    | SetEntityStatusType
    | SetDisabledBtnType
    | ClearDataType


// action creators

export type SetTodoListsType = ReturnType<typeof setTodoLists>
export const setTodoLists = (todolists: TodolistApiType[]) => {
    return {
        type: 'SET-TODOLISTS',
        todolists
    } as const
}

export type RemovetodolistACType = ReturnType<typeof removeTodoListAC>
export const removeTodoListAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        id
    } as const
}
export type AddTodolistACType = ReturnType<typeof addTodoListAC>
export const addTodoListAC = (todolist: TodolistApiType) => {
    return {
        type: 'ADD-TODOLIST',
        todolist
    } as const
}
type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        id,
        title
    } as const
}
export type changeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>
export const changeTodolistFilterAC = (id: string, filter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        id,
        filter
    } as const
}

export type SetEntityStatusType = ReturnType<typeof setEntityStatus>
export const setEntityStatus = (id: string, entityStatus: RequestStatusType) => {
    return {
        type: 'SET_ENTITY_STATUS',
        entityStatus,
        id
    } as const
}

export type SetDisabledBtnType = ReturnType<typeof setDisabledBtn>
export const setDisabledBtn = (disabled: boolean) => {
    return {
        type: 'SET_DISABLED_ADD_BTN',
        disabled,
    } as const
}

export type ClearDataType = ReturnType<typeof clearData>
export const clearData = () => {
    return {
        type: 'CLEAR_DATA'
    } as const
}


//thunk creators

export const setTodolistTC = (): AppThunk => dispatch => {
    dispatch(appSetStatus('loading'))
    todolistApi.getTodolists()
        .then(res => {
            dispatch(setTodoLists(res.data))
            dispatch(appSetStatus('successed'))
            return res.data
        })
        .then((todos) => {
            todos.forEach(tl => {
                dispatch(setTasksTC(tl.id)) // сетаем такси только после загрузкки тудулистов
            })
        })
        .catch((err: AxiosError) => {
            handleServerNetworkError(dispatch, err.message)
        })


}

export const addTodolistTC = (title: string): AppThunk => dispatch => {
    dispatch(appSetStatus('loading'))
    todolistApi.createTodolist(title)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(addTodoListAC(res.data.data.item))
                dispatch(appSetStatus('successed'))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((err: AxiosError) => {
            handleServerNetworkError(dispatch, err.message)
        })

}

export const deleteTodolistTC = (todolistId: string): AppThunk => dispatch => {
    dispatch(appSetStatus('loading'))
    dispatch(setEntityStatus(todolistId, 'loading'))
    todolistApi.deleteTodolist(todolistId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(appSetStatus('successed'))
                dispatch(removeTodoListAC(todolistId))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((err: AxiosError) => {
            handleServerNetworkError(dispatch, err.message)
        })

}
export const updateTodolistTC = (todolistId: string, title: string): AppThunk => dispatch => {
    dispatch(appSetStatus('loading'))
    todolistApi.updateTodolist(todolistId, title)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(appSetStatus('successed'))
                dispatch(changeTodolistTitleAC(todolistId, title))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((err: AxiosError) => {
            handleServerNetworkError(dispatch, err.message)
        })
}
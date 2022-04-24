import {FilterValuesType} from "../App";
import {todolistApi, TodolistApiType} from "../API/todolistApi";
import {Dispatch} from "redux";

export type TodolistType = TodolistApiType & {
    filter: FilterValuesType
}

const initialState: Array<TodolistType> = []


export const todolistsReducer = (state: Array<TodolistType> = initialState, action: todolistsReducerActionType): Array<TodolistType> => {
    switch (action.type) {
        case 'SET-TODOLISTS':
            return action.todolists.map(t => ({...t, filter: 'all'}))
        case 'REMOVE-TODOLIST':
            return state.filter(el => el.id !== action.id)
        case 'ADD-TODOLIST':
            let newTodolist: TodolistType = {
                id: action.todolist.id,
                addedDate: action.todolist.addedDate,
                order: action.todolist.order,
                title: action.todolist.title,
                filter: 'all'
            }
            return [newTodolist, ...state]
        case 'CHANGE-TODOLIST-TITLE':
            return state.map(el => el.id === action.id ? {...el, title: action.title} : el)
        case 'CHANGE-TODOLIST-FILTER':
            return state.map(el => el.id === action.id ? {...el, filter: action.filter} : el)
        default:
            return state
    }
}

type todolistsReducerActionType =
    RemovetodolistACType
    | AddTodolistACType
    | changeTodolistTitleACType
    | changeTodolistFilterACType
    | SetTodoListsType

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

//thunk creators

export const setTodolistTC = () => (dispatch: Dispatch<todolistsReducerActionType>) => {
    todolistApi.getTodolists()
        .then(res => {
            dispatch(setTodoLists(res.data))
            debugger
        })
}

export const addTodolistTC = (title: string) => (dispatch: Dispatch<todolistsReducerActionType>) => {
    todolistApi.createTodolist(title)
        .then(res => {
            dispatch(addTodoListAC(res.data.data.item))
        })
}

export const deleteTodolistTC = (todolistId: string) => (dispatch: Dispatch<todolistsReducerActionType>) => {
    todolistApi.deleteTodolist(todolistId)
        .then(() => {
            dispatch(removeTodoListAC(todolistId))
        })
}
export const updateTodolistTC = (todolistId: string, title: string) => (dispatch: Dispatch<todolistsReducerActionType>) => {
    todolistApi.updateTodolist(todolistId, title)
        .then(() => {
            dispatch(changeTodolistTitleAC(todolistId, title))
        })
}
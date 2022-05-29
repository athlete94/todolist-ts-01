import {TasksStateType} from "../components/Main/Main";
import {AddTodolistACType, RemovetodolistACType, SetTodoListsType} from "./todolists-reducer";
import {Dispatch} from "redux";
import {TaskPriorities, TaskStatuses, TaskApiType, TaskUpdateType, todolistApi} from "../API/todolistApi";
import {AppRootStateType} from "./store";
import {AppActionsType, appSetStatus, RequestStatusType} from "./app-reducer";
import {AxiosError} from "axios";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";


export type TaskType = TaskApiType & { disabled: RequestStatusType }
const initialState: TasksStateType = {}

type tasksReducerActionType =
    removeTaskType |
    addTaskType |
    AddTodolistACType |
    RemovetodolistACType
    | SetTodoListsType
    | SetTasksType
    | UpdateTaskType
    | AppActionsType
    | SetDisabledDelTask

export const tasksReducer = (state: TasksStateType = initialState, action: tasksReducerActionType): TasksStateType => {
    switch (action.type) {
        case 'SET_TASKS':
            return {
                ...state,
                [action.todolistId]: action.tasks.map(t => ({...t, disabled: 'idle'}))
            }
        case 'REMOVE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].filter(el => el.id !== action.taskId)}
        case 'ADD-TASK':
            return {
                ...state,
                [action.task.todoListId]: [{...action.task, disabled: 'idle'}, ...state[action.task.todoListId]]
            }
        case 'UPDATE_TASK':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(t => t.id === action.taskId ? {...t, ...action.model} : t)
            }
        case 'ADD-TODOLIST':
            return {
                ...state,
                [action.todolist.id]: []
            }
        case 'SET-TODOLISTS':
            let stateCopy = {...state}
            action.todolists.forEach(t => {
                stateCopy[t.id] = []
            })
            return stateCopy
        case "REMOVE-TODOLIST":
            delete state[action.id]
            return {...state}
        case 'SET_DISABLED_DEL_TASK':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(t => t.id === action.taskId ? {
                    ...t,
                    disabled: action.disabled
                } : t)
            }
        default:
            return state
    }
};


// action creators
type removeTaskType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (todolistId: string, taskId: string) => {
    return {
        type: 'REMOVE-TASK',
        taskId,
        todolistId
    } as const
}

type addTaskType = {
    type: 'ADD-TASK'
    task: TaskApiType
}
export const addTaskAC = (task: TaskApiType): addTaskType => {
    return {
        type: 'ADD-TASK',
        task,
    } as const
}


type UpdateTaskType = {
    type: 'UPDATE_TASK'
    taskId: string
    todolistId: string
    model: TaskUpdateModelType
}
export const updateTask = (todolistId: string, taskId: string, model: TaskUpdateModelType): UpdateTaskType => {
    return {
        type: 'UPDATE_TASK',
        taskId,
        todolistId,
        model
    } as const
}

type SetTasksType = ReturnType<typeof setTasks>
export const setTasks = (tasks: TaskApiType[], todolistId: string) => {
    return {
        type: 'SET_TASKS',
        tasks,
        todolistId
    } as const
}


export type SetDisabledDelTask = ReturnType<typeof setDisabledDelTask>
export const setDisabledDelTask = (todolistId: string, taskId: string, disabled: RequestStatusType) => {
    return {
        type: 'SET_DISABLED_DEL_TASK',
        todolistId,
        taskId,
        disabled,
    } as const
}

// thunk creators

export const setTasksTC = (todolistId: string) => (dispatch: Dispatch<tasksReducerActionType>) => {
    dispatch(appSetStatus('loading'))
    todolistApi.getTasks(todolistId)
        .then(res => {
            dispatch(setTasks(res.data.items, todolistId))
            dispatch(appSetStatus('successed'))
        })
        .catch((err: AxiosError) => {
            handleServerNetworkError(dispatch, err.message)
        })

}

export const createTaskTC = (todolistId: string, title: string) => (dispatch: Dispatch) => {
    dispatch(appSetStatus('loading'))
    todolistApi.createTask(todolistId, title)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(addTaskAC(res.data.data.item))
                dispatch(appSetStatus('successed'))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((err: AxiosError) => {
            handleServerNetworkError(dispatch, err.message)
        })

}

export const deleteTaskTC = (todolistId: string, taskId: string) => (dispatch: Dispatch) => {
    dispatch(appSetStatus('loading'))// крутилка
    dispatch(setDisabledDelTask(todolistId, taskId, 'loading'))// кнопка удаления
    todolistApi.deleteTask(todolistId, taskId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setDisabledDelTask(todolistId, taskId, 'successed'))// кнопка удаления
                dispatch(removeTaskAC(todolistId, taskId))
                dispatch(appSetStatus('successed'))// крутилка
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((err: AxiosError) => {
            handleServerNetworkError(dispatch, err.message)
        })

}


export type TaskUpdateModelType = {
    title?: string
    description?: string
    completed?: boolean
    status?: TaskStatuses
    priority?: TaskPriorities
    startDate?: string
    deadline?: string
}

export const updateTaskTC = (todolistId: string, taskId: string, model: TaskUpdateModelType) =>
    (dispatch: Dispatch, getState: () => AppRootStateType) => {


        const state = getState()
        let task = state.tasksReducer[todolistId].find(t => t.id === taskId)
        if (!task) {
            //throw new Error("task not found in the state");
            console.warn('task not found in the state')
            return
        }

        let taskApi: TaskUpdateType = {
            title: task.title,
            description: task.description,
            completed: task.completed,
            status: task.status,
            priority: task.priority,
            startDate: task.startDate,
            deadline: task.deadline,
            ...model
        }

        dispatch(appSetStatus('loading'))
        todolistApi.updateTask(todolistId, taskId, taskApi)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(appSetStatus('successed'))
                    dispatch(updateTask(todolistId, taskId, model))
                } else {
                    handleServerAppError(res.data, dispatch)
                }
            })
            .catch((err: AxiosError) => {
                handleServerNetworkError(dispatch, err.message)
            })
    }


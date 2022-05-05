import {TasksStateType} from "../components/Main/Main";
import {AddTodolistACType, RemovetodolistACType, SetTodoListsType} from "./todolists-reducer";
import {Dispatch} from "redux";
import {TaskPriorities, TaskStatuses, TaskType, TaskUpdateType, todolistApi} from "../API/todolistApi";
import {AppRootStateType} from "./store";


const initialState: TasksStateType = {}

type tasksReducerActionType =
    removeTaskType |
    addTaskType |
    AddTodolistACType |
    RemovetodolistACType
    | SetTodoListsType
    | SetTasksType
    | UpdateTaskType

export const tasksReducer = (state: TasksStateType = initialState, action: tasksReducerActionType): TasksStateType => {
    switch (action.type) {
        case 'SET_TASKS':
            return {
                ...state,
                [action.todolistId]: action.tasks
            }
        case 'REMOVE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].filter(el => el.id !== action.taskId)}
        case 'ADD-TASK':
            return {
                ...state,
                [action.task.todoListId]: [action.task, ...state[action.task.todoListId]]
            }
        case 'UPDATE_TASK':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(t => t.id === action.taskId ? {...t,  ...action.model} : t)
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
    task: TaskType
}
export const addTaskAC = (task: TaskType): addTaskType => {
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
export const setTasks = (tasks: TaskType[], todolistId: string) => {
    return {
        type: 'SET_TASKS',
        tasks,
        todolistId
    } as const
}

// thunk creators

export const setTasksTC = (todolistId: string) => (dispatch: Dispatch<tasksReducerActionType>) => {
    debugger
    todolistApi.getTasks(todolistId)
        .then(res => {
            dispatch(setTasks(res.data.items, todolistId))
        })
}

export const createTaskTC = (todolistId: string, title: string) => (dispatch: Dispatch) => {
    todolistApi.createTask(todolistId, title)
        .then(res => {
            dispatch(addTaskAC(res.data.data.item))
        })
}

export const deleteTaskTC = (todolistId: string, taskId: string) => (dispatch: Dispatch) => {
    todolistApi.deleteTask(todolistId, taskId)
        .then(() => {
            dispatch(removeTaskAC(todolistId, taskId))
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

        todolistApi.updateTask(todolistId, taskId, taskApi)
            .then((res) => {
                dispatch(updateTask(todolistId, taskId, model))
            })
    }

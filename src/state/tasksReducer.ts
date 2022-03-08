import {TasksStateType} from "../App";
import {v1} from "uuid";
import {AddTodolistACType, RemovetodolistACType} from "./todolists-reducer";



type tasksReducerActionType = removeTaskType | addTaskType | updateTaskTitle | changeTaskStatusType | AddTodolistACType | RemovetodolistACType

export const tasksReducer = (state: TasksStateType, action: tasksReducerActionType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].filter(el => el.id !== action.taskId)}
        case 'ADD-TASK':
            let newTask = {id: v1(), title: action.title, isDone: false }
            return {...state, [action.todolistId]: [ newTask, ...state[action.todolistId]]}
        case 'CHANGE-STATUS':
            return {...state, [action.todolistId]: state[action.todolistId].map(t => t.id === action.taskId ? {...t, isDone: action.isDone} : t)}
        case 'UPDATE-TASK-TITLE':
            return {...state, [action.todolistId]: state[action.todolistId].map(t => t.id === action.taskId ? {...t, title: action.title} : t)}
        case 'ADD-TODOLIST':
            return {...state, [action.todolistId]: []}
        case "REMOVE-TODOLIST":
            delete state[action.id]
            return {...state}
        default:
            return state
    }
};



type removeTaskType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (taskId: string, todolistId: string) => {
    return {
        type: 'REMOVE-TASK',
            taskId,
            todolistId
        }as const
}

type addTaskType = {
    type:'ADD-TASK'
    title: string
    todolistId: string
}
export const addTaskAC = (title: string, todolistId: string): addTaskType => {
    return {
        type: 'ADD-TASK',
            title,
            todolistId
        }as const
}

type updateTaskTitle = {
    type: 'UPDATE-TASK-TITLE',
    taskId: string,
    todolistId: string
    title: string
}
export const updateTaskTitleAC = (taskId: string, todolistId: string, title: string): updateTaskTitle => {
    return {
        type: 'UPDATE-TASK-TITLE',
        taskId,
        todolistId,
        title
    }
}

type changeTaskStatusType = {
    type: 'CHANGE-STATUS'
    taskId: string
    todolistId: string
    isDone: boolean
}
export const changeTaskStatusAC = (taskId: string, todolistId: string, isDone: boolean): changeTaskStatusType => {
    return {
        type: 'CHANGE-STATUS',
        taskId,
        todolistId,
        isDone
    } as const
}


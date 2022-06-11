import axios, { AxiosResponse } from 'axios'
// todolists types
export type TodolistApiType = {
    id: string
    addedDate: string
    order: number
    title: string
}

export type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

// tasks types

export type TaskApiType = {
    description: string
    title: string
    completed: boolean
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export type GetTasksType = {
    items: TaskApiType[],
    totalCount: number,
    error: string | null,
}

export type TaskUpdateType = {
    title: string
    description: string
    completed: boolean
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
}

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}

export enum TaskPriorities {
    Low =0,
    Middle= 1,
    High = 2,
    Urgently = 3,
    Later = 4
}

// auth type

export type LoginRequestType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: string,
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a1cb2198-6145-426b-aef5-83678121f4d6',
    }
})

export const todolistApi = {
    getTodolists() {
        return instance.get<TodolistApiType[]>('todo-lists')
    },
    createTodolist(title: string) {
        return instance.post<{title: string}, AxiosResponse<ResponseType<{item: TodolistApiType}>>>('todo-lists', {title})
    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put<{title: string}, AxiosResponse<ResponseType>>(`todo-lists/${todolistId}`, {title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask(todolistId: string, title: string) {
        return instance.post<{title: string}, AxiosResponse<ResponseType<{item: TaskApiType}>>>(`todo-lists/${todolistId}/tasks`, {title})
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId: string, taskId: string, model: TaskUpdateType) {
        return instance.put<TaskUpdateType, AxiosResponse<ResponseType<{item: TaskApiType}>>>(`todo-lists/${todolistId}/tasks/${taskId}`, model)
    }
}

export const authApi =  {
    login(data: LoginRequestType) {
        return instance.post<ResponseType<{userId: number}>>('auth/login', data)
    },
    logout() {
        return instance.delete<ResponseType>('auth/login')
    },
    me() {
        return instance.get<ResponseType<{id: number, email: string, login: string}>>('auth/me')
    }
}
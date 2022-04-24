import axios from "axios";


export type TodolistApiType = {
    id: string
    addedDate: string
    order: number
    title: string
}

export type ResponceType<T = {}> = {
    resultCode: number
    messages: []
    data: T
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
        return instance.post<ResponceType<{item: TodolistApiType}>>('todo-lists', {title})
    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponceType>(`todo-lists/${todolistId}`, {title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponceType>(`todo-lists/${todolistId}`)
    },
}
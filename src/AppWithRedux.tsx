import React, {useCallback, useReducer, useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import {AddItemForm} from "./components/AddItemForm";
import {TaskType, Todolist} from "./TodoList";
import {
    addTodoListAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodoListAC,
    todolistsReducer
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, removeTaskAC, tasksReducer, updateTaskTitleAC} from "./state/tasksReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function AppWithRedux() {

    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasksReducer)//AppRootStateType - тип входных, TasksStateType - тип на выходе
    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolistsReducer)

    //const {tasksReducer: tasks, todolistsReducer: todolists} = useSelector<AppRootStateType, AppRootStateType>(state => state)

    const dispatch = useDispatch()

    //tasks functions
    const removeTask = useCallback((id: string, todolistId: string) => {
        dispatch(removeTaskAC(id, todolistId))
    }, [dispatch])

    const addTask = useCallback((title: string, todolistId: string) => {
        dispatch(addTaskAC(title, todolistId))
    }, [dispatch])

    const updateTaskTitle = useCallback((todolistId: string, taskId: string, title: string) => {
        dispatch(updateTaskTitleAC(todolistId, taskId, title))
    }, [dispatch])

    const changeStatus = useCallback((id: string, todolistId: string, isDone: boolean) => {
        dispatch(changeTaskStatusAC(id, todolistId, isDone))
    },[dispatch])

    //list functions
    // const addTodolist = useCallback((titleTodoList: string) => {
    //     dispatch(addTodoListAC(titleTodoList))
    // },[dispatch])

    const removeTodolist = useCallback((id: string) => {
        dispatch(removeTodoListAC(id))
    }, [dispatch])

    const updateTodolistTitle = useCallback((todolistId: string, title: string) => {
        dispatch(changeTodolistTitleAC(todolistId, title))
    }, [dispatch])

    const changeFilter = useCallback((value: FilterValuesType, todolistId: string) => {
        dispatch(changeTodolistFilterAC(todolistId, value))
    }, [dispatch])

    return (
        <div className="App">
            {/*<AddItemForm callBack={addTodolist}/>*/}
            {/*{*/}
            {/*    todolists.map(tl => {*/}

            {/*        return (*/}
            {/*            <div key={tl.id}>*/}
            {/*                <Todolist*/}
            {/*                    id={tl.id}*/}
            {/*                    title={tl.title}*/}
            {/*                    tasks={tasks[tl.id]}*/}
            {/*                    removeTask={removeTask}*/}
            {/*                    changeFilter={changeFilter}*/}
            {/*                    addTask={addTask}*/}
            {/*                    changeTaskStatus={changeStatus}*/}
            {/*                    filter={tl.filter}*/}
            {/*                    removeTodolist={removeTodolist}*/}
            {/*                    updateTodolistTitle={updateTodolistTitle}*/}
            {/*                    updateTaskTitle={updateTaskTitle}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        )*/}


            {/*    })*/}
            {/*}*/}

        </div>
    );
}

export default AppWithRedux;

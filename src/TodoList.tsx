import React, {ChangeEvent, useState, KeyboardEvent, useCallback, useDebugValue} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./components/AddItemForm";
import {EditableSpan} from "./components/EditableSpan";
import CheckBox from "./components/CheckBox";
import {TodolistType} from "./AppWithRedux";
import Task from "./Task";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string,todolistId: string, isDone: boolean) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    updateTodolistTitle: (todolistId: string, title: string) => void
    updateTaskTitle: (todolistId: string, tasksTitle: string, title: string) => void
}

export const Todolist = React.memo((props: PropsType) => {
    const {
        id,
        title,
        tasks,
        removeTask,
        changeFilter,
        addTask,
        changeTaskStatus,
        removeTodolist,
        filter,
        updateTodolistTitle,
        updateTaskTitle
    } = props

    console.log('Todolist')

    const removeTodoList = useCallback(() => removeTodolist(id),[removeTask, id])
    const onAllClickHandler = useCallback(() => changeFilter("all", id),[changeFilter, id] )
    const onActiveClickHandler = useCallback(() => changeFilter("active", id), [changeFilter, id])
    const onCompletedClickHandler = useCallback(() => changeFilter("completed", id), [changeFilter, id])

    const addTaskHandler = useCallback((title: string) => {
        addTask(title, id)
    },[addTask, id] )

    const updateTodolistTitleHandler = useCallback((title: string) => {
        updateTodolistTitle(id, title)
    }, [updateTodolistTitle, id])

    const updateTaskTitleHandler = useCallback((title: string, taskId: string) => {
        updateTaskTitle(id, taskId, title)
    }, [updateTodolistTitle, id])


    const changeStatus = useCallback((taskId: string, newIsDoneValue: boolean) => {
        changeTaskStatus(taskId, id, newIsDoneValue)
    }, [changeTaskStatus, id])

    const deleteTask = useCallback((taskId: string) => removeTask(taskId, id), [removeTask, id])

    let allTodolistTasks = tasks;

    if (filter === "active") {
        allTodolistTasks = allTodolistTasks.filter(t => !t.isDone);
    }
    if (filter === "completed") {
        allTodolistTasks = allTodolistTasks.filter(t => t.isDone);
    }

    return <div>
        <h3> <EditableSpan callback={updateTodolistTitleHandler} title={title} />
            <button onClick={removeTodoList}>x</button>
        </h3>
        <AddItemForm callBack={addTaskHandler}/>

        <ul>
            {
                allTodolistTasks.map(t => {
                    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    //     let newIsDoneValue = e.currentTarget.checked;
                    //     changeTaskStatus(t.id, newIsDoneValue, id);
                    // }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        {/*<CheckBox callback={(e) => onChangeHandler(t.id, e)} checkedValue={t.isDone}/>*/}
                        {/*<EditableSpan callback={(title)=>updateTaskTitleHandler(title, t.id)} title={t.title} />*/}
                        {/*<button onClick={onClickHandler}>x</button>*/}
                        <Task id={t.id}
                              isDone={t.isDone}
                              title={t.title}
                              deleteTask={deleteTask}
                              updateTaskTitleHandler={updateTaskTitleHandler}
                              changeStatus={changeStatus}/>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
})



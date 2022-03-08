import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./components/AddItemForm";
import {EditableSpan} from "./components/EditableSpan";
import CheckBox from "./components/CheckBox";

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
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    updateTodolistTitle: (todolistId: string, title: string) => void
    updateTaskTitle: (todolistId: string, tasksTitle: string, title: string) => void
}

export function Todolist(props: PropsType) {
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


    const removeTodoList = () => removeTodolist(props.id)
    const onAllClickHandler = () => changeFilter("all", id);
    const onActiveClickHandler = () => changeFilter("active", id);
    const onCompletedClickHandler = () => changeFilter("completed", id);

    const addTaskHandler = (title: string) => {
        addTask(title, id)
    }

    const updateTodolistTitleHandler = (title: string) => {
        updateTodolistTitle(id, title)
    }

    const updateTaskTitleHandler = (title: string, taskId: string) => {
        updateTaskTitle(id, taskId, title)
    }


    const onChangeHandler = (taskId: string, newIsDoneValue: boolean) => {
        changeTaskStatus(taskId, newIsDoneValue, id);
    }

    return <div>
        <h3> <EditableSpan callback={updateTodolistTitleHandler} title={title} />
            <button onClick={removeTodoList}>x</button>
        </h3>
        <AddItemForm callBack={addTaskHandler}/>

        <ul>
            {
                tasks.map(t => {
                    const onClickHandler = () => removeTask(t.id, id)
                    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    //     let newIsDoneValue = e.currentTarget.checked;
                    //     changeTaskStatus(t.id, newIsDoneValue, id);
                    // }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <CheckBox callback={(e) => onChangeHandler(t.id, e)} checkedValue={t.isDone}/>
                        <EditableSpan callback={(title)=>updateTaskTitleHandler(title, t.id)} title={t.title} />
                        <button onClick={onClickHandler}>x</button>
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
}



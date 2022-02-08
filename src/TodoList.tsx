import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./components/AddItemForm";
import {EditableSpan} from "./components/EditableSpan";

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

    // let [title, setTitle] = useState("")
    // let [error, setError] = useState<string | null>(null)

    // const addTask = () => {
    //     let newTitle = title.trim();
    //     if (newTitle !== "") {
    //         props.addTask(newTitle, props.id);
    //         setTitle("");
    //     } else {
    //         setError("Title is required");
    //     }
    // }

    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }

    // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    //     setError(null);
    //     if (e.charCode === 13) {
    //         addTask();
    //     }
    // }

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

    return <div>
        <h3> <EditableSpan callback={updateTodolistTitleHandler} title={title} />
            <button onClick={removeTodoList}>x</button>
        </h3>
        <AddItemForm callBack={addTaskHandler}/>

        {/*<AddItemForm callBack={props.addTask}  todolistID={props.id}/>*/}

        {/*<div>*/}
        {/*    <input value={title}*/}
        {/*           onChange={onChangeHandler}*/}
        {/*           onKeyPress={onKeyPressHandler}*/}
        {/*           className={error ? "error" : ""}*/}
        {/*    />*/}
        {/*    <button onClick={addTask}>+</button>*/}
        {/*    {error && <div className="error-message">{error}</div>}*/}
        {/*</div>*/}
        <ul>
            {
                tasks.map(t => {
                    const onClickHandler = () => removeTask(t.id, id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        changeTaskStatus(t.id, newIsDoneValue, id);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
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



import React, {useCallback, useEffect} from 'react';
import {FilterValuesType} from '../Main/Main';
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import Task from "../Task/Task";
import {useDispatch} from "react-redux";
import {setTasksTC, TaskType} from "../../state/tasksReducer";
import {TaskStatuses} from "../../API/todolistApi";
import s from './Todolist.module.css'
import {DeleteButton} from "../DeleteButton/DeleteButton";
import {RequestStatusType} from "../../state/app-reducer";


type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    addedDate: string
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, todolistId: string, status: TaskStatuses) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    updateTodolistTitle: (todolistId: string, title: string) => void
    updateTaskTitle: (todolistId: string, tasksTitle: string, title: string) => void
    entityStatus: RequestStatusType
}

export const Todolist = React.memo((props: PropsType) => {
    const {
        id,
        title,
        tasks,
        addedDate,
        removeTask,
        changeFilter,
        addTask,
        changeTaskStatus,
        removeTodolist,
        filter,
        updateTodolistTitle,
        updateTaskTitle,
        entityStatus
    } = props

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTasksTC(id))
    }, [])

    // const removeTodoList = useCallback(() => removeTodolist(id), [removeTodolist, id])
    const onAllClickHandler = useCallback(() => changeFilter("all", id), [changeFilter, id])
    const onActiveClickHandler = useCallback(() => changeFilter("active", id), [changeFilter, id])
    const onCompletedClickHandler = useCallback(() => changeFilter("completed", id), [changeFilter, id])

    const addTaskHandler = useCallback((title: string) => {
        addTask(title, id)
    }, [addTask, id])

    const updateTodolistTitleHandler = useCallback((title: string) => {
        updateTodolistTitle(id, title)
    }, [updateTodolistTitle, id])

    const updateTaskTitleHandler = useCallback((title: string, taskId: string) => {
        updateTaskTitle(id, taskId, title)
    }, [updateTaskTitle, id])


    const changeStatus = useCallback((taskId: string, status: TaskStatuses) => {
        changeTaskStatus(id, taskId, status)
    }, [changeTaskStatus, id])

    const deleteTask = useCallback((taskId: string) => removeTask(taskId, id), [removeTask, id])

    let allTodolistTasks = tasks;

    if (filter === "active") {
        allTodolistTasks = allTodolistTasks.filter(t => t.status === TaskStatuses.New);
    }
    if (filter === "completed") {
        allTodolistTasks = allTodolistTasks.filter(t => t.status === TaskStatuses.Completed);
    }


    return <div className={s.todolist}>
        <h3 style={{display: 'flex', justifyContent: "space-between"}}><EditableSpan
            callback={updateTodolistTitleHandler} title={title}/>
            <DeleteButton onClick={() => removeTodolist(id)} disabled={entityStatus === 'loading'}>x</DeleteButton>
        </h3>
        <AddItemForm callBack={addTaskHandler} disabled={entityStatus === 'loading'}/>

        <ul>
            {

                allTodolistTasks.map(t => {

                    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    //     let newIsDoneValue = e.currentTarget.checked;
                    //     changeTaskStatus(t.id, newIsDoneValue, id);
                    // }

                    return <li key={t.id} className={t.status > 0 ? "is-done" : ""}>
                        {/*<CheckBox callback={(e) => onChangeHandler(t.id, e)} checkedValue={t.isDone}/>*/}
                        {/*<EditableSpan callback={(title)=>updateTaskTitleHandler(title, t.id)} title={t.title} />*/}
                        {/*<button onClick={onClickHandler}>x</button>*/}
                        <Task id={t.id}
                              status={t.status}
                              title={t.title}
                              addedDate={t.addedDate}
                              deleteTask={deleteTask}
                              updateTaskTitleHandler={updateTaskTitleHandler}
                              changeStatus={changeStatus}
                              disabled={t.disabled}/>
                    </li>
                })
            }
        </ul>
        <div className={s.filters}>
            <button className={filter === 'all' ? "active-filter" : "filter"}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={filter === 'active' ? "active-filter" : "filter"}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={filter === 'completed' ? "active-filter" : "filter"}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
        <div className={s.date}>
            <span>{addedDate.slice(0, 10)}</span>
        </div>
    </div>
})



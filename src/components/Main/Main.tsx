import React, {useEffect} from 'react';
import './Main.css';
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {Todolist} from "../Todolist/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {
    addTodolistTC,
    changeTodolistFilterAC,
    deleteTodolistTC,
    setTodolistTC,
    TodolistType,
    updateTodolistTC
} from "../../state/todolists-reducer";
import {TaskStatuses, TaskType} from "../../API/todolistApi";
import {createTaskTC, deleteTaskTC, updateTaskTC} from "../../state/tasksReducer";

export type FilterValuesType = "all" | "active" | "completed";

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function Main() {

    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolistsReducer)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasksReducer)
    const dispatch = useDispatch();

    debugger
    useEffect(() => {
        dispatch(setTodolistTC())
    }, [])

    //tasks functions
    function removeTask(id: string, todolistId: string) {
        dispatch(deleteTaskTC(todolistId, id))
    }

    function addTask(title: string, todolistId: string) {
        dispatch(createTaskTC(todolistId, title))
    }

    const updateTaskTitle = (todolistId: string, taskId: string, title: string) => {
        dispatch(updateTaskTC(todolistId, taskId, {title}))
    }

    function changeStatus(todolistId: string, taskId: string, status: TaskStatuses) {
        dispatch(updateTaskTC(todolistId, taskId, {status}))
    }

    //list functions
    const addTodolist = (title: string) => {
        dispatch(addTodolistTC(title))
    }

    function removeTodolist(id: string) {
        dispatch(deleteTodolistTC(id))
    }

    const updateTodolistTitle = (todolistId: string, title: string) => {
        dispatch(updateTodolistTC(todolistId, title))
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        dispatch(changeTodolistFilterAC(todolistId, value))
    }

    return (
        <div className='App'>
            <AddItemForm callBack={addTodolist}
                         placeholder={'add list..'}/>
            <div className="todolists">
                {
                    todolists.map(tl => {
                        let tasksForTodolist = tasks[tl.id];


                        return (
                            <div>
                                <Todolist
                                    key={tl.id}
                                    id={tl.id}
                                    title={tl.title}
                                    addedDate={tl.addedDate}
                                    tasks={tasksForTodolist}
                                    removeTask={removeTask}
                                    changeFilter={changeFilter}
                                    addTask={addTask}
                                    changeTaskStatus={changeStatus}
                                    filter={tl.filter}
                                    removeTodolist={removeTodolist}
                                    updateTodolistTitle={updateTodolistTitle}
                                    updateTaskTitle={updateTaskTitle}
                                />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default Main;

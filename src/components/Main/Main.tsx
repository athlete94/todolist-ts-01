import React, {useEffect} from 'react';
import './Main.css';
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {Todolist} from "../Todolist/TodoList";
import {
    addTodolistTC,
    changeTodolistFilterAC,
    deleteTodolistTC,
    setTodolistTC,
    updateTodolistTC
} from "../../state/todolists-reducer";
import {TaskStatuses} from "../../API/todolistApi";
import {createTaskTC, deleteTaskTC, TaskType, updateTaskTC} from "../../state/tasksReducer";
import {Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../state/hooks";

export type FilterValuesType = "all" | "active" | "completed";

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function Main() {
    const todolists = useAppSelector(state => state.todolistsReducer)
    const tasks = useAppSelector(state => state.tasksReducer)
    let isLoggedIn = useAppSelector(state => state.authReducer.isLoggedIn)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(!isLoggedIn) {
            return
        }
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


    if(!isLoggedIn) {
        return <Navigate to={'/login'} />
    }

    return (
        <div className='App'>
            <AddItemForm callBack={addTodolist}
                         placeholder={'add list..'}
            />
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
                                    entityStatus={tl.entityStatus}
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

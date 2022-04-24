import React, {useEffect} from 'react';
import './App.css';
import {AddItemForm} from "./components/AddItemForm";
import {TaskType, Todolist} from "./TodoList";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    addTodoListAC,
    addTodolistTC, changeTodolistFilterAC,
    deleteTodolistTC,
    setTodolistTC,
    TodolistType,
    updateTodolistTC
} from "./state/todolists-reducer";

export type FilterValuesType = "all" | "active" | "completed";

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function App() {

    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolistsReducer)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasksReducer)
    const dispatch = useDispatch();

    debugger
    useEffect(() => {
        dispatch(setTodolistTC())
    }, [])

    //tasks functions
    function removeTask(id: string, todolistId: string) {

    }

    function addTask(title: string, todolistId: string) {
    }

    const updateTaskTitle = (todolistId: string, taskId: string, title: string) => {

    }

    function changeStatus(id: string, todolistId: string, isDone: boolean) {
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
        <div className="App">
            <AddItemForm callBack={addTodolist}/>
            {
                todolists.map(tl => {
                    let allTodolistTasks = tasks[tl.id];
                    let tasksForTodolist = allTodolistTasks;

                    if (tl.filter === "active") {
                        tasksForTodolist = allTodolistTasks.filter(t => !t.isDone);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone);
                    }

                    return (
                        <div>
                            <Todolist
                                key={tl.id}
                                id={tl.id}
                                title={tl.title}
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
    );
}

export default App;

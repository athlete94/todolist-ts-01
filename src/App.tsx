import React from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid"
import {useState} from "react";


export type TasksType = {
    id: string,
    title: string,
    isDone: boolean
}

export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type FilterValuesType = 'All' | 'Active' | 'Completed'


function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();
    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'All'},
        {id: todolistID2, title: 'What to buy', filter: 'All'},
    ])

    // list functions
    const removeList = (todoListId: string) => {
        setTodolists(todolists.filter(t => t.id !== todoListId))
    }


    // remove task
    const removeTask = (todoListId: string, id: string) => {
        setTasks({...tasks, [todoListId]: tasks[todoListId].filter(t => t.id !== id)})
    }
    //add task
    const addTask = (todoListId: string, title: string) => {
        let newTask = {id: v1(), title, isDone: false}
        setTasks({...tasks, [todoListId]: [newTask, ...tasks[todoListId]]})
    }
    //change status
    const changeTaskStatus = (todoListId: string, id: string, isDone: boolean) => {
        setTasks({...tasks, [todoListId]: tasks[todoListId].map(t => t.id === id ? {...t, isDone} : t)})
    }

    // function filter task
    const changeFilter = (todoListId: string, filter: FilterValuesType) => {
        setTodolists(todolists.map(t => t.id === todoListId ? {...t, filter} : t))
    }

    // UI
    return (
        <div className="App">
            {todolists.map((tl, index) => {
                const getTasksForRender = () => {
                    switch (tl.filter) {
                        case 'Active':
                            return tasks[tl.id].filter(t => !t.isDone)
                        case 'Completed':
                            return tasks[tl.id].filter(t => t.isDone)
                        default:
                            return tasks[tl.id]
                    }
                }
                let filteredTasks = getTasksForRender()
                return (
                    <Todolist
                        key={index}
                        todoListId={tl.id}
                        titleList={tl.title}
                        tasks={filteredTasks}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeTaskStatus}
                        filter={tl.filter}
                        removeList={removeList}
                    />
                )
            })}
        </div>
    );
}

export default App;

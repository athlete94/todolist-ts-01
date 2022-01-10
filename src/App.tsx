import React from 'react';
import './App.css';
import {TodoList} from './TodoList';
import {useState} from "react";


export type TasksType = {
    id: number,
    title: string,
    isDone: boolean
}

export type FilterType = 'All' | 'Active' | 'Completed'

//export type FilterType = "All" | "Active" | "Completed"

function App() {

    const [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6", isDone: true},
        {id: 3, title: "REACT", isDone: false}
    ])
    const [filter, setFilter] = useState<FilterType>('All')

    // BLL
    const todoListTitle1: string = "What to learn"

    // remove task
    const removeTask = (id: number) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    // function filter task
    const filterTask = (task: FilterType) => {
        setFilter(task)
    }

    // filter tasks

    const getTasksForRender = () => {
        switch (filter) {
            case 'Active':
                return tasks.filter(t => !t.isDone)
            case 'Completed':
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }
    let filteredTasks = getTasksForRender()

    // UI
    return (
        <div className="App">
            <TodoList title={todoListTitle1}
                      tasks={filteredTasks}
                      removeTask={removeTask}
                      filterTask={filterTask}/>
        </div>
    );
}

export default App;

import React from "react"
import TodoListHeader from "./TodoListHeader"
import Button from "./Button"
import {TasksType} from "./App"
import Task from "./Task"

type TodoListPropsType = {
    title: string,
    tasks: Array<TasksType>
    removeTask: Function
    filterTask: Function
}


const TodoList = ({
                      title,
                      tasks,
                      removeTask,
                      filterTask
                  }: TodoListPropsType) => {

    const buttons = [
        {title: 'All'},
        {title: 'Active'},
        {title: 'Completed'}
    ]

    return <div>
        <TodoListHeader title={title}/>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {tasks.map(t => <Task key={t.id}
                                  {...t}
                                  removeTask={removeTask}/>)}
        </ul>
        <div>
            {buttons.map((b) => <Button title={b.title} filterTask={filterTask}/>)}
        </div>

    </div>
}

export {TodoList}
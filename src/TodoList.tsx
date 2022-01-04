import React from "react"
import TodoListHeader from "./TodoListHeader"
import Button from "./Button"
import { TasksType } from "./App"
import Task from "./Task"

type TodoListPropsType = {
    title: string,
    tasks: Array<TasksType>
}

const TodoList = (props: TodoListPropsType) => {

    const {title, tasks} = props // деструктуризация

    return <div>
            <TodoListHeader title={title} />
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <Task key={tasks[0].id} {...tasks[0]} />
                <Task key={tasks[1].id} {...tasks[1]} />
                <Task key={tasks[2].id} {...tasks[2]} />
            </ul>
            <div>
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>
        </div>
}

export {TodoList}
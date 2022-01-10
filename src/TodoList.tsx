import React from "react"
import TodoListHeader from "./TodoListHeader"
import Button from "./Button"
import {FilterType, TasksType} from "./App"
import Task from "./Task"

type TodoListPropsType = {
    title: string,
    tasks: Array<TasksType>
    removeTask: (id: number) => void,
    filterTask: (filter: FilterType) => void
}

// export type ButtonsType = {
//     title: FilterType
// }

const TodoList = ({
                      title,
                      tasks,
                      removeTask,
                      filterTask
                  }: TodoListPropsType) => {

    // const buttons:Array<ButtonsType> = [
    //     {title: "All"},
    //     {title: 'Active'},
    //     {title: 'Completed'}
    // ]

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
            <Button title={'all'}  filterFunc={() => filterTask('All')} />
            <Button title={'active'} filterFunc={() => filterTask("Active")} />
            <Button title={'completed'} filterFunc={() => filterTask("Completed")} />
        </div>

    </div>
}

export {TodoList}
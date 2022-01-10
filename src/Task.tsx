import React from "react";
import {TasksType} from "./App";

type TaskPropsType = TasksType & {
    removeTask: (id: number) => void
}


const Task: React.FC<TaskPropsType> = ({title, isDone, removeTask, id}) => {

    return <div>
        <li>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
            <button onClick={() => removeTask(id)}>x</button>
        </li>
    </div>
}

export default Task
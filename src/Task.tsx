import React from "react";

type TaskPropsType = {
    id: number
    title: string,
    isDone: boolean;
    removeTask: Function
}


const Task = ({title, isDone, removeTask, id}: TaskPropsType) => {

    return <div>
        <li>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
            <button onClick={() => removeTask(id) }>x</button>
        </li>
    </div>
}

export default Task
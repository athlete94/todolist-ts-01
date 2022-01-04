import React from "react";

type TaskPropsType = {
    //id: number
    title: string,
    isDone: boolean;
}


const Task = (props: TaskPropsType) => {

    const { title, isDone} = props

    return <div>
        <li><input type="checkbox" checked={isDone}/> <span>{title}</span></li>
    </div>
}

export default Task
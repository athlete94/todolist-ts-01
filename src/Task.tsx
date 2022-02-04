import React, {ChangeEvent} from "react";

type TasksPropsType = {
    id: string
    title: string
    isDone: boolean
    removeTask: () => void
    changeStatus: (id: string, isDone: boolean) => void
}


const Tasks: React.FC<TasksPropsType> = ({id, title, isDone, removeTask, changeStatus}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeStatus(id, e.currentTarget.checked)
    }

    return <li>
        <input type="checkbox" onChange={onChangeHandler} id={id} name={title} checked={isDone}/>
        {title}
        <button onClick={removeTask}>X</button>
    </li>
}

export default Tasks
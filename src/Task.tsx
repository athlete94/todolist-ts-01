import React, {ChangeEvent} from "react";
import {EditableSpan} from "./components/EditableSpan";
import CheckBox from "./components/CheckBox";

type TasksPropsType = {
    id: string
    title: string
    isDone: boolean
    changeStatus: (id: string, isDone: boolean) => void,
    deleteTask: (taskId: string) => void,
    updateTaskTitleHandler: (title: string, taskId: string) => void
}


const Tasks: React.FC<TasksPropsType> = React.memo(({
                                             id,
                                             title,
                                             isDone,
                                             deleteTask,
                                             changeStatus,
                                             updateTaskTitleHandler
                                         }) => {

    const onClickHandler = () => {
        deleteTask(id)
    }

    console.log('Task')

    return <div>
        <CheckBox callback={(e) => changeStatus(id, e)} checkedValue={isDone}/>
        <EditableSpan callback={(title) => updateTaskTitleHandler(title, id)} title={title}/>
        <button onClick={onClickHandler}>x</button>
    </div>
})

export default Tasks
import React from "react";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {CheckBox} from "../CheckBox/CheckBox"
import {TaskStatuses} from "../../API/todolistApi";
import s from './Task.module.css'
import {DeleteButton} from "../DeleteButton/DeleteButton";
import {RequestStatusType} from "../../state/app-reducer";


type TasksPropsType = {
    id: string
    title: string
    status: TaskStatuses
    addedDate: string
    disabled: RequestStatusType
    changeStatus: (id: string, status: TaskStatuses) => void,
    deleteTask: (taskId: string) => void,
    updateTaskTitleHandler: (title: string, taskId: string) => void
}


const Tasks = React.memo(({
                              id,
                              title,
                              status,
                              addedDate,
                              deleteTask,
                              changeStatus,
                              updateTaskTitleHandler,
                              disabled
                          }: TasksPropsType) => {

    const onClickHandler = () => {
        deleteTask(id)
    }

    const onChangeHandler = (e: boolean) => {
        let newStatus = e ? TaskStatuses.Completed : TaskStatuses.New
        changeStatus(id, newStatus)
    }


    let time = addedDate.slice(11, 16)
    let date = addedDate.slice(0, 10)
    console.log('Task')

    return <div className={s.taskBlock}>
        <div className={s.task}>
            <CheckBox callback={onChangeHandler} checkedValue={status === TaskStatuses.Completed}/>
            <EditableSpan callback={(title) => updateTaskTitleHandler(title, id)} title={title}/>
            <DeleteButton onClick={onClickHandler} disabled={disabled === 'loading'}>x</DeleteButton>
        </div>
        <div className={s.dateTime}>
            <div>{time}</div>
            <div>{date}</div>
        </div>
    </div>
})

export default Tasks
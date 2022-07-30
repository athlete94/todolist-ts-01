import {v1} from "uuid";
import {addTaskAC, createTaskTC, tasksReducer, TaskType} from "./tasksReducer";
import {TasksStateType} from "../components/Main/Main";
import {TaskApiType, TaskPriorities, TaskStatuses} from "../API/todolistApi";

test('add task', () => {

    let key = v1()
    let startState: TasksStateType = {
    }

    let task: TaskApiType = {
            description: '',
            title: 'new task',
            completed: false,
            status: TaskStatuses.New,
            priority: TaskPriorities.Middle,
            startDate: '',
            deadline: '',
            id: v1(),
            todoListId: v1(),
            order: 1,
            addedDate: ''
        }


    let endState = tasksReducer(startState, addTaskAC(task))

    expect(endState.hasOwnProperty(key)).toBe(1)
})
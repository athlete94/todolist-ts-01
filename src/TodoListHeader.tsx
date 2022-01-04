import React from "react"

type TodoListHeaderPropsType = {
    title: string
}

const TodoListHeader = ({title}: TodoListHeaderPropsType) => { // деструктуризация
    return <div>
        <h3>{title}</h3>
    </div>
}

export default TodoListHeader


// const TodoListHeader: React.FC<TodoListHeaderPropsType> = ({title}) - альтернативная запись
import React from "react";

type ButtonPropsType = {
    title: string,
    filterTask: Function
}

const Button = ({title,filterTask}: ButtonPropsType) => {
     return <button onClick={() => filterTask(title)}>{title}</button>
}

export default Button
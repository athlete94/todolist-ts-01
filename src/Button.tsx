import React from "react";



// type ButtonPropsType = {
//     title: string,
//     filterTask: () => void
// }

type ButtonPropsType = {
    filterFunc: () => void,
    title: string
}

const Button = ({title, filterFunc}: ButtonPropsType) => {
     return <button onClick={filterFunc}>{title}</button >

}

export default Button
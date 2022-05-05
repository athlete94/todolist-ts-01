import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './DeleteButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


type DeleteButtonType = DefaultButtonPropsType

export const DeleteButton = ({...restProps}: DeleteButtonType) => {


    return <div className={s.deleteButton}>
        <button {...restProps}/>
    </div>

}
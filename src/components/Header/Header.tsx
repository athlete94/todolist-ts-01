import React from 'react';
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {useDispatch} from "react-redux";
import s from './Header.module.css'

const Header = () => {
    let dispatch = useDispatch()

    return (
        <div className={s.header}>
            <span>Login</span>
        </div>
    );
};

export default Header;
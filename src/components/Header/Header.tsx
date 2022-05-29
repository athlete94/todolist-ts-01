import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import Button from '@mui/material/Button'
import {AuthReducerStateType, logoutTC} from "../../state/authReducer";

const Header = () => {
    let isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.authReducer.isLoggedIn)
    let login = useSelector<AppRootStateType, string>(state =>  state.appReducer.login)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logoutTC())
    }

    return (
        <div className={s.header}>
            {isLoggedIn &&
                <div className={s.header_content}>
                    <div>Hello {login}</div>
                    <Button variant="contained" color="secondary" onClick={logoutHandler}>Logout</Button>
                </div>
            }

        </div>
    );
};

export default Header;
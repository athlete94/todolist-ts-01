import React from 'react';
import s from './Header.module.css'
import Button from '@mui/material/Button'
import { logoutTC} from "../../state/authReducer";
import {useAppDispatch, useAppSelector} from "../../state/hooks";

const Header = () => {
    let isLoggedIn = useAppSelector(state => state.authReducer.isLoggedIn)
    let login = useAppSelector(state =>  state.appReducer.login)
    const dispatch = useAppDispatch()

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
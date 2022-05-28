import React from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import s from './App.module.css'
import {LinearProgress} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {RequestStatusType} from "./state/app-reducer";
import CustomizedSnackbars from "./components/Error/ErrorSnackbar";

const App = () => {

    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.AppReducer.status)
    return (
        <div>
            <Header />
            {status === 'loading' && <LinearProgress color="secondary" />}

            <div className={s.wrap}>
                <Main />
            </div>
            <CustomizedSnackbars/>
        </div>
    );
};

export default App;
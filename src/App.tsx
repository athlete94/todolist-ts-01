import React from 'react';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import s from './App.module.css'

const App = () => {
    return (
        <div>
            <Header />
            <div className={s.wrap}>
                <Nav />
                <Main />
            </div>
        </div>
    );
};

export default App;
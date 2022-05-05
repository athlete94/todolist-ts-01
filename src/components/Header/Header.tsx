import React from 'react';
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {useDispatch} from "react-redux";
import s from './Header.module.css'
import {addSectionTC} from "../../state/navReducer";

const Header = () => {
    let dispatch = useDispatch()

    const addSection = (title: string) => {
        dispatch(addSectionTC(title))
    }
    return (
        <div className={s.header}>
            <AddItemForm callBack={addSection}
                         placeholder={'add section..'}/>
        </div>
    );
};

export default Header;
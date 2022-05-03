import React from 'react';
import {Section} from "./Section";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {changeSectionTC, NavReducerStateType, removeSectionTC} from "../../state/navReducer";
import s from './Nav.module.css'
import {NavLink} from 'react-router-dom'

class Navlink extends React.Component {
    render() {
        return null;
    }
}

const Nav = () => {

    let sections = useSelector<AppRootStateType, NavReducerStateType[]>(state => state.navReducer)
    let dispatch = useDispatch()

    const deleteSection = (id: string) => {
        dispatch(removeSectionTC(id))
    }
    const changeSection = (id: string, title: string) => {
        dispatch(changeSectionTC(id, title))
    }

    return (
        <div className={s.nav}>

            <ul>
                {
                    sections.map(s => {
                        return <li>
                                <Section
                                    key={s.id}
                                    id={s.id}
                                    title={s.title}
                                    deleteSection={deleteSection}
                                    changeSection={changeSection}/>
                        </li>
                    })
                    }

                    </ul>
                    </div>
                    );
                };

                export default Nav;
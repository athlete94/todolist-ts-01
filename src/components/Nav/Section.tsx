import React, {useState} from 'react';
import s from './Nav.module.css'
import {EditableSpan} from "../EditableSpan/EditableSpan";

type SectionPropsType = {
    id: string
    deleteSection: (id: string) => void
    changeSection: (id: string, title: string) => void
    title: string
}


export const Section = ({id, title, deleteSection, changeSection}: SectionPropsType) => {
    const [hover, setHover] = useState<boolean>(false)

    const onClickHandler = () => {
        deleteSection(id)
    }
    const onMouseEnter = () => {
        setHover(true)
    }
    const onMouseLeave = () => {
        setHover(false)
    }


    return (
        <div className={s.section}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}>
            <div>
                <EditableSpan title={title} callback={(title) => changeSection(id, title)}/>
            </div>
            {
                hover && <div>
                    <button onClick={onClickHandler}>x</button>
                </div>
            }
        </div>

    );
};

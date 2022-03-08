import React, {ChangeEvent, useState} from 'react';


type EditableSpanPropsType = {
    title: string
    callback: (title: string) => void
}

export const EditableSpan = ({title, callback}: EditableSpanPropsType) => {

    const [edit, setEdit] = useState(true)
    const [titleList, setTitleList] = useState(title)

    const onDoubleClickHandler = () => {
        setEdit(false)

    }

    const onBlurHandler = () => {
        callback(titleList)
        setEdit(true)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleList(e.currentTarget.value)
    }

    return (
        <div>
            {edit ?
                <span onDoubleClick={onDoubleClickHandler}>{title}</span> :
                <input onBlur={onBlurHandler}
                       autoFocus
                       value={titleList}
                       onChange={onChangeHandler}/>}
        </div>
    );
};

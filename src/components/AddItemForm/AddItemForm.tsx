import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './AddItemForm.module.css'

type AddItemFormTypeProps={
    callBack:(title:string)=>void,
    placeholder?: string
    //todolistID:string
}

export const AddItemForm = React.memo((props:AddItemFormTypeProps) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        let newTitle = title.trim();
        if (newTitle !== "") {
            props.callBack(newTitle);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(error) setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }

    return (
        <div>
            <div className={s.addItemForm}>
                <div>
                    <input value={title}
                           onChange={onChangeHandler}
                           onKeyPress={onKeyPressHandler}
                           className={error ? "error" : ""}
                           placeholder={props.placeholder}
                    />
                </div>
                <div>
                    <button onClick={addTask}>add</button>
                </div>

            </div>
            {error && <div className="error-message">{error}</div>}

        </div>

    );
});


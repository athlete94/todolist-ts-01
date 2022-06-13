import React from 'react';


type CheckBoxPropsType = {
    callback: (e: boolean) => void
    checkedValue: boolean
}



export const CheckBox = React.memo(({callback, checkedValue}: CheckBoxPropsType) => {

    return (
        <div>
            <input type="checkbox" onChange={(e) => callback(e.currentTarget.checked)} checked={checkedValue}/>
        </div>
    );
})
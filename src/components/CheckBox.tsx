import React, {ChangeEvent} from 'react';


type CheckBoxPropsType = {
    callback: (e: boolean) => void
    checkedValue: boolean
}


const CheckBox = ({callback, checkedValue}: CheckBoxPropsType) => {
    return (
        <div>
            <input type="checkbox" onChange={(e) => callback(e.currentTarget.checked)} checked={checkedValue}/>
        </div>
    );
};

export default CheckBox;
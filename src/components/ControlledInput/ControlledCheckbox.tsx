import React, {ChangeEvent} from 'react';

type ControlledCheckboxPropsType = {
    parentCheckboxValue: boolean
    setParentCheckboxValue: (c: boolean)=>void
}

export const ControlledCheckbox = (props: ControlledCheckboxPropsType) => {
    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.setParentCheckboxValue(e.currentTarget.checked)
    }
    return (
        <div>
            <h4>Controlled Checkbox</h4>
            <input type="checkbox" checked={props.parentCheckboxValue} onChange={onChangeCheckboxHandler} />
            <span>first checkbox</span>
        </div>
    );
};

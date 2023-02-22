import React, {ChangeEvent} from 'react';

type ControlledSelectPropsType = {
    parentSelectValue: string | undefined
    setParentSelectValue: (n: string | undefined)=>void
}

export const ControlledSelect = (props: ControlledSelectPropsType) => {
    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      props.setParentSelectValue(e.currentTarget.value)
    }
    return (
        <div>
            <h4>Controlled Select</h4>
            <select value={props.parentSelectValue} onChange={onChangeSelectHandler}>
                <option>spring</option>
                <option value="1">March</option>
                <option value="2">April</option>
                <option value="3">May</option>
            </select>
        </div>
    );
};


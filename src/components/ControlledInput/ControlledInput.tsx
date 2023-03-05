import React, {ChangeEvent} from 'react';

type ControlledInputPropsType = {
    parentInputValue: string
    setParentInputValue: (e: string)=>void
}

export const ControlledInput = (props: ControlledInputPropsType) => {
    console.log('controlledInput rendering')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.setParentInputValue(e.currentTarget.value)
    }
    return (
        <div>
            <h4>Controlled Input</h4>
            <input value={props.parentInputValue} onChange={onChangeHandler} />
        </div>
    );
};

export const ControlledInputM = React.memo(ControlledInput);
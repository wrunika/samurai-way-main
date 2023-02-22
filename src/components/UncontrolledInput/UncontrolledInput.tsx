import React, {ChangeEvent, useRef, useState} from 'react';

export const UncontrolledInput = () => {
    const [value, setValue] = useState('');
    const [valueForButton, setValueForButton] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)
    const el = inputRef.current as HTMLInputElement
    const getInputValue = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
    }
    const saveInputValue = () => {
      setValueForButton(el.value)
    }
    return (
        <div>
            <div>
                <input onChange={getInputValue}/> - {value}
            </div>
            <div>
                <input ref={inputRef} />
                <button onClick={saveInputValue} >save</button> - actual value: {valueForButton}
            </div>
        </div>
    );
};


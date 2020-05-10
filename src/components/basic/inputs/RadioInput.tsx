import React from 'react';

type InputProps = {
    label: string,
    name: string,
    id: string,
    isChecked: boolean,
    onCheck: () => void,
};

export const RadioInput = (props: InputProps) => (
    <label>
        <span className={"radio-indicator "+  (props.isChecked ? 'checked' : '')}/>
        <input type="radio" name={props.name} id={props.id} onChange={props.onCheck} />{props.label}
    </label>
);

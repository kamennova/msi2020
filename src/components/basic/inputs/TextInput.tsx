import React from 'react';

type InputProps = {
    name: string,
    className?: string,
    placeholder?: string,
    value?: string,
    onChange?: (evt: any) => void,
};

export const TextInput = (props: InputProps) => (
    <input type="text" value={props.value} name={props.name} onChange={props.onChange} className={props.className}
           placeholder={props.placeholder}/>
);

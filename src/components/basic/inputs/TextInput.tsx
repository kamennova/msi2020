import React from 'react';

type InputProps = {
    name: string,
    className?: string,
    placeholder?: string,
    value?: string,
    onChange?: (evt: any) => void,
};

export const TextInput = (props: InputProps) => (
    <input
        style={style}
        type="text" value={props.value} name={props.name} onChange={props.onChange} className={props.className}
        placeholder={props.placeholder}/>
);

const style = {
    height: 42,
    marginTop: 15,
    padding: '8px 14px',
    fontSize: 16,
    border: '2px solid #333',
    borderRadius: 10,
};

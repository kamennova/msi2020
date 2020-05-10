import React from 'react';

type ButtonProps = {
    label: string,
    onClick?: () => void,
};

export const Button = (props: ButtonProps) => (
    <button className="btn submit" onClick={props.onClick}>{props.label}</button>
);

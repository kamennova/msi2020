import React from 'react';

/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core'
import { Colors } from "../../../Style";

type ButtonProps = {
    label: string,
    onClick?: () => void,
    icon?: JSX.Element,
    style?: SerializedStyles
};

export const Button = (props: ButtonProps) => (
    <button className="btn submit" css={[styles, props.style]} onClick={props.onClick}>
        {props.icon}
        {props.label}</button>
);

const styles = css`
    position: relative;
    display: inline-block;
    padding: 12px 38px;

    color: white;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;

    background-color: ${Colors.Primary};
    background-image: linear-gradient(92.01deg, ${Colors.Primary} 0%, #7291FF 100%);
    border: 0;
    border-radius: 10px;

    cursor: pointer;
    transition: 0.2s linear box-shadow;
    
    &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
`;

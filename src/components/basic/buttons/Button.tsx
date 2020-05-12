import React from 'react';

/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'

type ButtonProps = {
    label: string,
    onClick?: () => void,
    icon?: JSX.Element,
};

export const Button = (props: ButtonProps) => (
    <button className="btn submit" css={styles} onClick={props.onClick}>
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

    background-color: #8EA7FF;;
    background-image: linear-gradient(92.01deg, #8EA7FF 0%, #7291FF 100%);
    border: 0;
    border-radius: 10px;

    cursor: pointer;
    transition: 0.2s linear box-shadow;
`;

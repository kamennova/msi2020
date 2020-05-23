import React from 'react';

/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core'
import { Colors } from "../Style";

export const Category = (props: { name: string, style?: SerializedStyles | (SerializedStyles | undefined)[] }) => (
    <p css={[style, props.style]}>
        {props.name}
    </p>
);

const style = css`
    margin: 0;
    padding: 4px 13px;

    font-weight: 500;
    font-size: 12px;
    color: ${Colors.Grey};
    letter-spacing: 2px;
    text-transform: uppercase;

    border: 2px solid ${Colors.Lightgrey};
    border-radius: 6px;

    user-select: none;
    transition: 0.2s linear color;
    
    &:hover {
        color: ${Colors.Darkgrey};
    } 
`;

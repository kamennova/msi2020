import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Colors } from "../../../Style";

type InputProps = {
    name: string,
    placeholder?: string,
    value?: string,
    onChange?: (evt: any) => void,
};

export const TextInput = (props: InputProps) => (
    <input css={style}
           type="text" value={props.value} name={props.name} onChange={props.onChange}
           placeholder={props.placeholder}/>
);

const style = css`
    height: 42px;
    margin-top: 15px;
    padding: 8px 14px;
    font-size: 16px;
    border: 2px solid ${Colors.Darkgrey};
    border-radius: 10px;
    width: 100%;
    
    &:focus {
        outline: none;
    }
`;

import React from 'react';
import { Colors } from "../../../Style";

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

type InputProps = {
    name: string,
    placeholder?: string,
    value?: string,
    onChange?: (evt: any) => void,
    autoFocus?: boolean,
};

export const TextInput = (props: InputProps) => (
    <input css={style}
           type="text" value={props.value} name={props.name} onChange={props.onChange}
           placeholder={props.placeholder} autoFocus={props.autoFocus}/>
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

import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export const Fieldset = (props: {children: JSX.Element | JSX.Element[]}) => (
    <fieldset css={style}>
        {props.children}
    </fieldset>
);

const style = css`
    margin: 0;
    padding: 0;
    border: 0;
`;

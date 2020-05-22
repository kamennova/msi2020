import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export const MainTitle = (props: { children: string }) => (
    <h2 css={style}>
        {props.children}
    </h2>
);

const style = css`
    padding-top: 10px;
    margin-bottom: 6px;

    font-weight: bold;
    font-size: 32px;
    `;

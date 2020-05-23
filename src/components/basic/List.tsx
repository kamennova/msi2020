import React from 'react';

/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core'

export const List = (props: { children: any, style?: SerializedStyles }) => (
    <ul css={[style, props.style]}>{props.children}</ul>
);

const style = css`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;

    list-style: none;
`;

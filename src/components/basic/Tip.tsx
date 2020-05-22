import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Colors } from "../../Style";

export const Tip = (props: { children: string }) => (
    <p css={style}>{props.children}</p>
);

const style = css`
    color: ${Colors.Grey};
    font-size: 14px;
    `;

import React from 'react';

/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { Colors } from "../../Style";

export const Tip = (props: { children: string, style?: SerializedStyles }) => (
    <p css={[style, props.style]}>{props.children}</p>
);

const style = css`
    color: ${Colors.Grey};
    font-size: 14px;
    `;

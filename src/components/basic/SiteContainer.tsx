import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export const SiteContainer = (props: { children?: JSX.Element | (JSX.Element | undefined)[] }) => (
    <div css={style}>{props.children}</div>
);

const style = css`
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    width: 100%;
    flex-grow: 1;
    margin: 0 auto;
`;

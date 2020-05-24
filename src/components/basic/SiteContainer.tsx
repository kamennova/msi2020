import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useWindowHeight } from "../../hooks";

type ContainerProps = {
    children?: JSX.Element | (JSX.Element | undefined)[],
    isBlocked?: boolean, // blocks scrolling, e.g. when modal is open
}

export const SiteContainer = (props: ContainerProps) => {
    const height = useWindowHeight();

    return (
        <div css={style(height, props.isBlocked)}>{props.children}</div>
    );
};

const style = (height: number, isBlocked?: boolean) => css`
    position: relative;
    max-height: ${isBlocked ? height + 'px' : 'auto'};
    min-height: ${height}px;
    overflow: ${isBlocked ? 'hidden' : 'auto'};
    width: 100%;
    margin: 0 auto;
`;

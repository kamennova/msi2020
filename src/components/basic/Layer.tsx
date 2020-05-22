import React from "react";

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export const OpacityLayer = (props: { isVisible: boolean, onClick?: () => void }) => (
    <div css={style(props.isVisible)} onClick={props.onClick}/>
);

const style = (isOpen: boolean) => css`
        display: ${isOpen ? 'block' : 'none'};
        position: absolute;
        left: 0;
        top: 0;
        background-color: ${isOpen ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)'};
        width: 100%;
        height: 100%;
        transition: 0.2s linear background-color;
`;

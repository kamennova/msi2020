import React from "react";
import { HeartIcon } from "../icons/Heart";
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export const LikeButton = (props: {isFavourite: boolean, toggleIsFavourite: () => void}) => (
    <button css={style} onClick={props.toggleIsFavourite}>
        <HeartIcon fill={props.isFavourite} />
    </button>
);

const style = css`
    padding: 0;
    align-self: flex-end;

    border: 0;
    background-color: transparent;

    cursor: pointer;
    
    &:focus {
    outline: none;
    }
`;

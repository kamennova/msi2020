import React from "react";
import { HeartIcon } from "../icons";
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { VisuallyHidden } from "../VisuallyHidden";

export const LikeButton = (props: { isFavourite: boolean, toggleIsFavourite: () => void }) => (
    <button css={style} onClick={props.toggleIsFavourite}>
        <HeartIcon isFilled={props.isFavourite}/>
        <VisuallyHidden>Add to favourite</VisuallyHidden>
    </button>
);

const style = css`
    padding: 0;
    align-self: flex-end;

    border: 0;
    background-color: transparent;

    cursor: pointer;
`;

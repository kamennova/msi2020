import React from "react";
import { HeartIcon } from "../icons/Heart";

export const LikeButton = (props: {isFavourite: boolean, toggleIsFavourite: () => void}) => (
    <button className="like-btn" onClick={props.toggleIsFavourite}>
        <HeartIcon fill={props.isFavourite} />
    </button>
);

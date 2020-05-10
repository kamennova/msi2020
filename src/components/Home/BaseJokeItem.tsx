import React from "react";
import { Joke } from "../../types/Joke";
import { LikeButton } from "../basic/buttons/LikeButton";
import { LinkIcon } from "../basic/icons/Link";
import { QuoteIcon } from "../basic/icons/Quote";

export const JokeItem = (props: Joke & { onToggleFav: (id: string) => void, className?: string }) => (
    <li className={"joke-item " + props.className}>
        <span className="quote-icon">
            <QuoteIcon/>
        </span>
        <LikeButton isFavourite={props.isFavourite} toggleIsFavourite={() => props.onToggleFav(props.id)}/>
        <p className="item-id">
            <span>ID: </span><a target='_blank' href={props.url}>{props.url}</a> <LinkIcon/>
        </p>
        <p className="content">{props.content}</p>
        <div className="item-bottom">
            <span className="last-update">Last update: {props.hoursSinceUpdate} hours ago</span>
            {props.category !== undefined ? <p className="category item-category">{props.category}</p> : undefined}
        </div>
    </li>
);

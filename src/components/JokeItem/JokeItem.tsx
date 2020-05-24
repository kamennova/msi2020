import React from "react";
import { Joke } from "../../types";
import { LikeButton } from "../basic/buttons/LikeButton";
import { LinkIcon, QuoteIcon } from "../basic/icons";
import { Category } from "../Category";
import { styles } from './style';

/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core'

type JokeItemProps = Joke & {
    onToggleFav: (id: string) => void,
    style?: {
        wrap?: SerializedStyles,
        content?: SerializedStyles,
        category?: SerializedStyles,
        quoteIcon?: SerializedStyles,
    },
    className?: string,
};

export const JokeItem = (props: JokeItemProps) => {
    const toggleFav = () => props.onToggleFav(props.id);

    return (
        <li css={[styles.item, props.style?.wrap]}>
            <LikeButton isFavourite={props.isFavourite} toggleIsFavourite={toggleFav}/>

            <div css={[styles.middleWrap]}>
                <QuoteElem style={props.style?.quoteIcon}/>
                <div css={styles.middleRightWrap}>
                    <ItemId id={props.id} url={props.url}/>
                    <p css={[styles.content, props.style?.content]}>{props.content}</p>

                    <div css={styles.bottomWrap}>
                        <span css={styles.lastUpdate}>Last update: {props.hoursSinceUpdate} hours ago</span>
                        {props.category !== undefined ?
                            <ItemCategory style={props.style?.category} name={props.category}/> : undefined}
                    </div>
                </div>
            </div>
        </li>
    );
};

const QuoteElem = (props: { style?: SerializedStyles }) => (
    <span css={[styles.quoteIcon, props.style]}>
            <QuoteIcon/>
    </span>
);

const ItemId = (props: { id: string, url: string }) => (
    <p css={styles.itemId}>
        <span>ID: </span><a target='_blank' href={props.url}>{props.id}</a><LinkIcon/>
    </p>
);

const ItemCategory = (props: { name: string, style?: SerializedStyles }) => (
    <Category name={props.name} style={[styles.category, props.style]}/>
);

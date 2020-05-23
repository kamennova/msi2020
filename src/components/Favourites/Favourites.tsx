import React from "react";
import { Joke } from "../../types";
import { List } from "../basic/List";
import { Tip } from "../basic/Tip";
import { JokeItem } from "../JokeItem";
import { styles } from "./style";

/** @jsx jsx */
import { jsx } from '@emotion/core'

type FavProps = {
    jokes: Joke[],
    onToggleFav: (id: string) => void,
    isOpen: boolean,
};

export const Favourites = (props: FavProps) => (
    <section css={styles.favourites(props.isOpen)}>
        <h3 css={styles.title}>Favourite</h3>
        {props.jokes.length === 0 ? <FavouritesTip/> : undefined}
        <List style={styles.list}>
            {props.jokes.map(item => <FavouriteJoke joke={item} onToggleFav={props.onToggleFav}/>)}
        </List>
    </section>
);

const FavouritesTip = () => <Tip style={styles.tip}>Jokes you ❤️ will appear here</Tip>

const FavouriteJoke = (props: { joke: Joke, onToggleFav: (_: string) => void }) => (
    <JokeItem {...props.joke} onToggleFav={props.onToggleFav} style={styles.joke}/>
);

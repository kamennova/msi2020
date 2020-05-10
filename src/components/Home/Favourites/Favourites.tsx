import React from "react";
import { Joke } from "../../../types/Joke";
import { JokeItem } from "../BaseJokeItem";

export const Favourites = (props: { jokes: Joke[], onToggleFav: (id: string) => void }) => (
    <aside className='favourites'>
        <h3 className='favourites-title'>Favourite</h3>
        {props.jokes.length === 0 ? <p className='favourites-tip'>Jokes you liked will be listed here</p> : undefined}
        <ul className='list favourites-list'>
            {props.jokes.map(item => <JokeItem {...item} onToggleFav={props.onToggleFav} className='item-favourite'/>)}
        </ul>
    </aside>
);

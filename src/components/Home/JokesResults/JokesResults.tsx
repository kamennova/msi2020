import React from 'react';
import { Joke } from "../../../types/Joke";
import { JokeItem } from "../BaseJokeItem";

export const JokesResults = (props: { jokes: Joke[], onToggleFav: (id: string) => void, }) => (
    <section className="results">
        <ul className="list items-list">
            {props.jokes.map(item => (
                <JokeItem {...item} className='result-item' onToggleFav={props.onToggleFav}/>))}
        </ul>
    </section>
);


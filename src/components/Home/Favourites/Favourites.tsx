import React from "react";
import { media } from "../../../Style";
import { Joke } from "../../../types/Joke";
import { JokeItem } from "../BaseJokeItem";

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

type FavProps = {
    jokes: Joke[],
    onToggleFav: (id: string) => void,
    isOpen: boolean,
};

export const Favourites = (props: FavProps) => (
    <section css={styles.favourites(props.isOpen)}>
        <h3 css={styles.title}>Favourite</h3>
        {props.jokes.length === 0 ? <p className='favourites-tip'>Jokes you liked will be listed here</p> : undefined}
        <ul className='list favourites-list'>
            {props.jokes.map(item => <JokeItem {...item} onToggleFav={props.onToggleFav} className='item-favourite'/>)}
        </ul>
    </section>
);

const styles = {
    favourites: (isOpen: boolean) =>
        css`
         position: fixed;
         right: 0;
         top: 0;
         width: 480px;
         max-width: 100%;
         height: 100vh;
         max-height: 100vh;
         min-height: 100vh;
         flex-basis: 480px;
         flex-shrink: 0;
         flex-grow: 0;
         overflow-y: auto;
         padding: 20px 40px 0;
         background-color: #F8F8F8;
         transition: 0.2s linear right;
         
         &::-webkit-scrollbar-track {
            background-color: transparent;
         }

         &::-webkit-scrollbar {
            width: 12px;
         }

         &::-webkit-scrollbar-thumb {
            border: 3px solid #F8F8F8;
            border-radius: 7px;
            background-color: #555;
         }
     
         @media only screen and (min-width: ${media.mobile}px) and (max-width: ${media.desktop - 1}px) {
            padding-top: 88px;
            right: ${isOpen ? 0 : '-480px'};
           
         }
        
         @media only screen and (min-width: ${media.tablet}px) and (max-width: ${media.desktop - 1}px) {
            // right: -480px;
         }            
            `,
    title:
        css`
         font-size: 20px;
         color: #ABABAB;
         font-weight: 500;
         
         @media only screen and (min-width: 320px) and (max-width: 1439px) {
            display: none;
         }
        `
};

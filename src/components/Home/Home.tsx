import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { toggleIsFavourite } from "../../store/actions";
import { StateShape } from "../../store/StoreState";
import { thunkGetJokes, thunkSetCategories } from "../../store/thunks";
import { media, sidePadding } from "../../Style";
import { Filter, FilterOptions } from "../../types/Filters";
import { Joke } from "../../types/Joke";
import { Header } from "../Header";
import { Favourites } from "./Favourites";
import { FavouritesToggle } from "./Favourites/FavouritesToggle";
import { JokesResults } from "./JokesResults";
import { JokesSearch } from "./JokesSearch";
import './Jokes.css';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

type HomeProps = {
    getJokes: (filters: FilterOptions) => void,
    setCategories: () => void,
    onToggleFav: (id: string) => void,
    results: Joke[],
    favourites: Joke[],
    categories: string[],
};

const HomeComponent = (props: HomeProps) => {
    const [isFavOpen, setIsFavOpen] = useState(false);
    const toggleIsFavOpen = () => setIsFavOpen(!isFavOpen);

    const onToggleFav = () => setIsFavOpen(!isFavOpen);

    const loadData = async () => {
        await props.setCategories();
        await props.getJokes({ type: Filter.Random });
    };

    useEffect(() => {
        loadData()
    }, []);

    return (
        <div className='site-container'>

            <div css={styles.mainColWrap}>
                <Header/>
                <section className="main-col">
                    <header className='page-header'>
                        <h2 className="page-title">Hey!</h2>
                        <p className="intro-text">Let's try to find a joke for you:</p>
                    </header>
                    <JokesSearch categories={props.categories} onLoadNext={props.getJokes}/>
                    <JokesResults onToggleFav={props.onToggleFav} jokes={props.results}/>
                </section>
            </div>

            <div css={styles.layer(isFavOpen)} onClick={toggleIsFavOpen} />
            <FavouritesToggle isOpen={isFavOpen} onToggle={onToggleFav}/>
            <Favourites isOpen={isFavOpen} jokes={props.favourites} onToggleFav={props.onToggleFav}/>
        </div>
    );
};

const mapStateToProps = (state: StateShape) => ({
    results: state.results,
    favourites: state.favourites,
    categories: state.categories,
});

const mapDispatchToProps = (dispatch: any) => ({
    getJokes: (filters: FilterOptions) => dispatch(thunkGetJokes(filters)),
    setCategories: () => dispatch(thunkSetCategories()),
    onToggleFav: (id: string) => dispatch(toggleIsFavourite(id)),
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

const styles = {
    mainColWrap:
        css`
        flex-grow: 1; 
        padding-left: ${sidePadding.desktop}px;
        padding-right: ${sidePadding.desktop}px;
           
        @media (min-width: ${media.mobile}px) and (max-width: ${media.tablet - 1}px){
             padding-left: ${sidePadding.mobile}px;
             padding-right: ${sidePadding.mobile}px;
        }
           
        @media (min-width: ${media.tablet}px) and (max-width: ${media.desktop - 1}px){
           padding-left: ${sidePadding.tablet}px;
           padding-right: ${sidePadding.tablet}px;
        }
        
        @media (min-width: ${media.desktop}px) {
            margin-right: 480px;
        }
   `,
    layer: (isFavOpen: boolean) =>
        css`
        display: ${isFavOpen ? 'block' : 'none'};
        position: absolute;
        left: 0;
        top: 0;
        background-color: ${isFavOpen? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)'};
        width: 100%;
        height: 100%;
        transition: 0.2s linear background-color;
        `
};

import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { toggleIsFavourite } from "../../store/actions";
import { Pagination, StateShape } from "../../store/StoreState";
import { thunkGetJokes, thunkSetCategories } from "../../store/thunks";
import { styles } from "./style";
import { Filter, FilterOptions } from "../../types/Filters";
import { Joke } from "../../types/Joke";
import { OpacityLayer } from "../basic/Layer";
import { SiteContainer } from "../basic/SiteContainer";
import { MainTitle } from "../basic/titles/MainTitle";
import { Header } from "../Header";
import { Favourites } from "./Favourites";
import { FavouritesToggle } from "./Favourites/Toggle";
import { JokesResults } from "./JokesResults";
import { JokesSearch } from "./JokesSearch";

/** @jsx jsx */
import { jsx } from '@emotion/core'

type HomeProps = {
    getJokes: (filters: FilterOptions) => Promise<void>,
    setCategories: () => void,
    onToggleFav: (id: string) => void,
    results: Joke[],
    pagination: Pagination,
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
        <SiteContainer>
            <div css={styles.mainColWrap}>
                <Header/>
                <div>
                    <MainTitle>Hey!</MainTitle>
                    <p css={styles.introText}>Let's try to find a joke for you:</p>
                    <JokesSearch categories={props.categories} onLoadNext={props.getJokes}/>
                    <JokesResults onToggleFav={props.onToggleFav} jokes={props.results} pagination={props.pagination}/>
                </div>
            </div>

            <OpacityLayer isVisible={isFavOpen} onClick={toggleIsFavOpen}/>
            <FavouritesToggle isOpen={isFavOpen} onToggle={onToggleFav}/>
            <Favourites isOpen={isFavOpen} jokes={props.favourites} onToggleFav={props.onToggleFav}/>
        </SiteContainer>
    );
};

const mapStateToProps = (state: StateShape) => ({
    results: state.jokes,
    pagination: state.pagination,
    favourites: state.favourites,
    categories: state.categories,
});

const mapDispatchToProps = (dispatch: any) => ({
    getJokes: (filters: FilterOptions) => dispatch(thunkGetJokes(filters)),
    setCategories: () => dispatch(thunkSetCategories()),
    onToggleFav: (id: string) => dispatch(toggleIsFavourite(id)),
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

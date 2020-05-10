import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { toggleIsFavourite } from "../../store/actions";
import { StateShape } from "../../store/StoreState";
import { thunkGetJokes, thunkSetCategories } from "../../store/thunks";
import { Filter, FilterOptions } from "../../types/Filters";
import { Joke } from "../../types/Joke";
import { Favourites } from "./Favourites";
import { JokesResults } from "./JokesResults";
import { JokesSearch } from "./JokesSearch";

type HomeProps = {
    getJokes: (filters: FilterOptions) => void,
    setCategories: () => void,
    onToggleFav: (id: string) => void,
    results: Joke[],
    favourites: Joke[],
    categories: string[],
};

const HomeComponent = (props: HomeProps) => {
    const loadData = async () => {
        await props.setCategories();
        await props.getJokes({type: Filter.Random});
    };

    useEffect(() => {
        loadData()
    }, []);

    return (
        <div className='cols-wrap'>
            <section className="main-col-wrap">
                <header className='page-header'>
                    <h2 className="page-title">Hey!</h2>
                    <p className="intro-text">Let's try to find a joke for you:</p>
                </header>
                <JokesSearch categories={props.categories} onLoadNext={props.getJokes}/>
                <JokesResults onToggleFav={props.onToggleFav} jokes={props.results}/>
            </section>
            <Favourites jokes={props.favourites} onToggleFav={props.onToggleFav}/>
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

import React from 'react';
import { connect } from "react-redux";
import { setPage } from "../store/actions";
import { Joke, Pagination } from "../types";
import { List } from "./basic/List";
import { Pagination as PaginationComponent } from './basic/pagination';
import { Tip } from "./basic/Tip";
import { JokeItem } from "./JokeItem";

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

type ResultsProps = {
    jokes: Joke[],
    pagination: Pagination,
    onToggleFav: (id: string) => void,
    onGetPage: (i: number) => void,
};

const _JokesResults = (props: ResultsProps) => {
    const showPagination = props.pagination.totalCount > 1;

    return (
        <section css={styles.wrap}>
            {props.jokes.length === 0 ? <Tip>Nothing found by your query :/</Tip> : undefined}

            <List>
                {props.jokes.map(item => <JokeItem {...item} onToggleFav={props.onToggleFav}/>)}
            </List>
            {showPagination ?
                <PaginationComponent style={styles.pagination} {...props.pagination}
                                     onGoToPage={props.onGetPage}/> : undefined}
        </section>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    onGetPage: (i: number) => dispatch(setPage(i)),
});

export const JokesResults = connect(undefined, mapDispatchToProps)(_JokesResults);

const styles = {
    wrap: css`
    margin-top: 40px;
    padding-bottom: 40px;
    `,
    pagination: css`
    margin-top: 30px;
    `,
};

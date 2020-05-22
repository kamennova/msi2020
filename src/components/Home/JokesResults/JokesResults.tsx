import React from 'react';
import { SearchResults } from "../../../store/StoreState";
import { List } from "../../basic/List";
import { Pagination } from "../../basic/pagination";
import { Tip } from "../../basic/Tip";
import { JokeItem } from "../JokeItem";

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export const PageSize = 100;

export const JokesResults = (props: { results: SearchResults, onToggleFav: (id: string) => void, }) => {
    const showPagination = props.results.pagination !== undefined && props.results.pagination.pagesNumber > 0;

    return (
        <section css={styles.wrap}>
            {props.results.items.length === 0 ? <Tip>Nothing found by your query :/</Tip> : undefined}
            <List style={styles.list}>
                {props.results.items.map(item => <JokeItem {...item} onToggleFav={props.onToggleFav}/>)}
            </List>
            <Pagination currentIndex={5} pagesCount={12} onSelect={() => {
            }}/>
        </section>
    );
};

const styles = {
    wrap: css`
    margin-top: 40px;
    `,
    list: css`
    padding-bottom: 30px;
    `,
};

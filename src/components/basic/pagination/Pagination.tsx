import React from 'react';
import { List } from "../List";
import { styles } from './style';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const DefaultMaxPagesDisplayed = 7;

type PaginationProps = {
    pagesCount: number,
    currentIndex: number,
    onSelect: (index: number) => void,
    maxPagesDisplayed?: number,
}

export const Pagination = (props: PaginationProps) => {
    const maxPages = props.maxPagesDisplayed !== undefined ? props.maxPagesDisplayed : DefaultMaxPagesDisplayed;
    const indexes = getIndexes(props.pagesCount, props.currentIndex, maxPages);

    return (
        <div>
            <DirectionBtn onClick={() => props}>Prev</DirectionBtn>
            <List style={css`flex-direction: row; display: flex`}>
                {indexes.map(index => <PageLink index={index + 1} isCurrent={index === props.currentIndex}
                                                onClick={() => {
                                                }}/>)}
            </List>
            <DirectionBtn onClick={() => {
            }}>Next</DirectionBtn>
        </div>
    );
};

const getIndexes = (pagesCount: number, currentIndex: number, maxPages: number) => {
    // if(pagesCount > MaxPagesFromSideDisplay)
    const indexes = [];
    const start = Math.max(currentIndex - Math.floor(maxPages / 2), 0);
    console.log(start);

    for (let i = 0; i < maxPages; i++) {
        indexes.push(start + i);
    }

    return indexes;
};

const PageLink = (props: { index: number, isCurrent: boolean, onClick: () => void }) => (
    <button css={styles.link(props.isCurrent)} onClick={props.onClick}>{props.index}</button>
);

const DirectionBtn = (props: { children: string, onClick: () => void }) => (
    <button onClick={props.onClick} css={styles.directionBtn}>{props.children}</button>
);


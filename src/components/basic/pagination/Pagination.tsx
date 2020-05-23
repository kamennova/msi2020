import React from 'react';
import { List } from "../List";
import { styles } from './style';

/** @jsx jsx */
import { jsx } from '@emotion/core'

const DefaultMaxPagesDisplayed = 7;

type PaginationProps = {
    totalCount: number,
    currentIndex: number,
    onGoToPage: (index: number) => void,
    maxPagesDisplayed?: number,
}

export const Pagination = (props: PaginationProps) => {
    const maxPages = props.maxPagesDisplayed !== undefined ? props.maxPagesDisplayed : DefaultMaxPagesDisplayed;
    const indexes = getIndexes(props.totalCount, props.currentIndex, maxPages);

    const onPrev = props.currentIndex > 0 ? () => props.onGoToPage(props.currentIndex - 1) : undefined;
    const onNext = props.currentIndex < props.totalCount - 1 ? () => props.onGoToPage(props.currentIndex + 1) : undefined;

    return (
        <div>
            <List style={styles.list}>
                <PageLink isDisabled={props.currentIndex === 0} onClick={onPrev}>Prev</PageLink>
                {indexes.map(index => (
                    <PageLink isDisabled={index === props.currentIndex} onClick={() => props.onGoToPage(index)}>
                        {index + 1}
                    </PageLink>
                ))}
                <PageLink isDisabled={props.currentIndex === props.totalCount - 1} onClick={onNext}>Next</PageLink>
            </List>
        </div>
    );
};

const PageLink = (props: { children: string | number, isDisabled: boolean, onClick?: () => void }) => (
    <li css={styles.linkWrap}>
        <button css={styles.link(props.isDisabled)} onClick={props.onClick}>
            {props.children}
        </button>
    </li>
);


const getIndexes = (pagesCount: number, currentIndex: number, maxPages: number) => {
    const indexes = [];

    const start = getStartPageIndex(currentIndex, pagesCount, maxPages);
    const indexesNum = Math.min(pagesCount, maxPages);

    for (let i = 0; i < indexesNum; i++) {
        indexes.push(start + i);
    }

    return indexes;
};

const getStartPageIndex = (currentIndex: number, pagesCount: number, maxPages: number) => {
    const halfIndexes = Math.floor(maxPages / 2);

    if (currentIndex < halfIndexes) {
        return 0;
    } else if (currentIndex + halfIndexes >= pagesCount) {
        return pagesCount - maxPages;
    } else {
        return currentIndex - halfIndexes;
    }
};

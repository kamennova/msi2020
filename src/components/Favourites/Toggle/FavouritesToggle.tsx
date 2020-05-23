import React from 'react';
import { styles } from './style';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

type ToggleProps = {
    isOpen: boolean,
    onToggle: () => void,
};

export const FavouritesToggle = (props: ToggleProps) => (
    <button onClick={props.onToggle} css={styles.button(props.isOpen)}>
        <ToggleIndicator isOpen={props.isOpen}/>
        Favourite
    </button>
);

const ToggleIndicator = (props: { isOpen: boolean }) => (
    <span css={styles.icon}>
         <span css={[styles.iconBar, props.isOpen ? css`transform: rotate(45deg)` : css`margin-top: 10px`]}/>
         <span css={[styles.iconBar, props.isOpen ? css`transform: rotate(-45deg)` : css`margin-bottom: 10px`]}/>
    </span>
);

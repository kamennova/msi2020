import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

type ToggleProps = {
    isOpen: boolean,
    onToggle: () => void,
};

export const FavouritesToggle = (props: ToggleProps) => (
    <button onClick={props.onToggle} css={styles.button}>
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

const styles = {
    button:
        css`
        position: absolute;
        top: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        background: none;
        outline: none;
        border: 0;
        box-shadow: none;
        cursor: pointer;
        z-Index: 200;

        @media screen and (min-width: 481px and max-width: 1439px) {
          top: 40px;
          right: 40px;
        }

        @media screen and (min-width: 1440px) {
             display: none;
        }`,
    icon:
        css`
        position: relative;
        width: 28px;
        height: 28px;
        margin: auto 0;
        margin-right: 10px;
        background-color: #333333;
        border-radius: 50%;
    `,
    iconBar:
        css`
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 14px;
        height: 2px;
        background-color: white;
        transition: 0.2s linear all;
        `,
    menuIconStyle:
        css`
        transform: rotate(90deg);
        `
};

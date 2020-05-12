import React from "react";
import { media, sidePadding } from "../Style";
import { Logo } from "./basic/Logo";

/** @jsx jsx */
import { jsx, css } from '@emotion/core'


export const Header = () => (
    <header css={styles.header}>
        <a href="/" css={styles.logo}>
            <Logo/>
        </a>
    </header>
);

const styles = {
    header:
        css`
        padding-top: 40px;
           
        @media (min-width: ${media.mobile}px) and (max-width: ${media.tablet - 1}px){
             padding-top: 20px;
        }
           
        `,
    logo:
        css`
        font-size: 20px;
        line-height: 28px;
        color: black;
        font-weight: bold;
        text-decoration: none;
        `
};

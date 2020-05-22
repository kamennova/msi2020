/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export const styles = {
    optionWrap: css`
    margin-bottom: 12px;
    
    &:last-of-type {
    margin-bottom: 0;
    }
    `,
    input: css`
    visibility: hidden;
    opacity: 0
    `,
    label: css`
    position: relative;

    width: 100%;
    padding-left: 15px;

    font-size: 18px;
    font-weight: 400;

    user-select: none;
    cursor: pointer;
    `,
    indicator: css`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;

    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ABABAB;
    `,
    indicatorChecked: css`    
    border-color: #333333;
    
    &::after {
    content: '';

    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;

    width: 10px;
    height: 10px;
    margin: auto;

    background-color: #333333;
    border-radius: 50%;
    }`,
};

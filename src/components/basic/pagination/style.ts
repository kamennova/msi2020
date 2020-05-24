import { css } from '@emotion/core'

export const styles = {
    list: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `,
    linkWrap: css`
    margin-right: 10px;
    margin-bottom: 12px;
    &:last-of-type {
        margin-right: 0;
    }
    `,
    link: (isDisabled: boolean) => css`
    outline: none;
    user-select: none;
    background-color: ${isDisabled ? '#F8F8f8' : 'white'};
    border: 2px solid #F8F8F8;
    cursor: ${isDisabled ? 'default' : 'pointer'};
    border-radius: 4px;
    font-size: 16px;
    line-height: 1;
    min-width: 37px;
    padding: 12px 15px;
    `,
};

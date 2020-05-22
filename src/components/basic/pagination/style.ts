/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const base = (isActive?: boolean) => css`
    outline: none;
    background-color: ${isActive ? '#F8F8f8' : 'white'};
    border: ${isActive ? 'none' : '2px solid #F8F8F8'};
    cursor: ${isActive ? 'default' : 'pointer'};
    border-radius: 4px;
    margin-right: 10px;
    `;

export const styles = {
    link: (isCurrent: boolean) =>
        css`
    ${{ ...base(isCurrent) }}
    min-width: 37px;
    padding: 12px 10px;
    `,
    directionBtn: css`
        ${{ ...base(false) }}
        padding: 12px 15px;
    
    `,
    prevBtn: css`
    `
};

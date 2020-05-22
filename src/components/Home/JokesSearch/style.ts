import { css } from '@emotion/core'
import { Colors } from "../../../Style";

export const styles = {
    list: css`
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 12px;
    `,
    categoryWrap: css`
    margin-right: 8px;
    margin-bottom: 8px;

    cursor: pointer;
    `,
    selected: css`
    color: ${Colors.Darkgrey};
    background-color: ${Colors.Lightgrey};
    `,
    submitBtn: css`
    margin-top: 20px;
    `,
    filtersWrap: css`
    margin-top: 35px;
    `,
};

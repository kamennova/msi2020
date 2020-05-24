import { css } from '@emotion/core'
import { MediaStr, sidePadding } from "../../Style";

export const styles = {
    mainColWrap: css`
        flex-grow: 1; 
        padding-left: ${sidePadding.desktop}px;
        padding-right: ${sidePadding.desktop}px;
           
        ${MediaStr.mobile} {
             padding-left: ${sidePadding.mobile}px;
             padding-right: ${sidePadding.mobile}px;
        }
           
        ${MediaStr.tablet} {
           padding-left: ${sidePadding.tablet}px;
           padding-right: ${sidePadding.tablet}px;
        }
        
        ${MediaStr.desktop} {
            margin-right: 480px;
        }
   `,
    introText: css`
    margin-top: 0;
    margin-bottom: 50px;

    font-weight: 500;
    font-size: 24px;
    `,
};

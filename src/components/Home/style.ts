import { css } from '@emotion/core'
import { MediaStr, SidePadding } from "../../Style";

export const styles = {
    mainColWrap: css`
        flex-grow: 1; 
        padding-left: ${SidePadding.desktop}px;
        padding-right: ${SidePadding.desktop}px;
           
        ${MediaStr.mobile} {
             padding-left: ${SidePadding.mobile}px;
             padding-right: ${SidePadding.mobile}px;
        }
           
        ${MediaStr.tablet} {
           padding-left: ${SidePadding.tablet}px;
           padding-right: ${SidePadding.tablet}px;
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

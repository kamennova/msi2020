import { css } from '@emotion/core'
import { Colors, MediaStr } from "../../../Style";

export const styles = {
    category: css`
    font-size: 10px;
    color: ${Colors.Darkgrey};

    background-color: white;
    
    ${MediaStr.mobile} {
        margin-top: 10px;
    }
    `,
    middleWrap: css`
    display: flex;
    
    `,
    item: css`
    position: relative;

    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;

    background-color: ${Colors.Lightgrey};
    padding: 40px;

    border-radius: 20px;

    &:last-of-type {
        margin-bottom: 0;
    }
    
    ${MediaStr.mobile} {
        padding: 20px;
    }
    `,
    quoteIcon: css`
    display: block;
    height: 40px;
    width: 40px;
    margin-right: 20px;
    padding: 10px;

    background-color: white;
    border-radius: 50%;
    `,
    itemId: css`
    margin-top: 10px;
    margin-bottom: 5px;

    font-weight: 500;
    font-size: 10px;
    color: ${Colors.Grey};
    
    a {
     color: ${Colors.Primary};
     word-break: break-word;
     margin-right: 5px;
    }
    `,
    content: css`
    margin-top: 0;
    margin-bottom: 12px;

    font-size: 18px;
    line-height: 1.5;
    `,
    bottomWrap: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
                
    ${MediaStr.mobile} {
        margin-top: 23px;
        flex-direction: column;
        align-items: flex-start;
    }
    `,
    middleRightWrap: css`
    width: 100%;
    `,
    lastUpdate: css`
    font-size: 10px;
    color: ${Colors.Grey};
    `,
};

import { css } from '@emotion/core'
import { Colors, MediaStr } from "../../../Style";

export const styles = {
    favourites: (isOpen: boolean) =>
        css`
         position: fixed;
         right: 0;
         top: 0;
         width: 480px;
         max-width: 100%;
         height: 100vh;
         max-height: 100vh;
         min-height: 100vh;
         flex-basis: 480px;
         flex-shrink: 0;
         flex-grow: 0;
         overflow-y: auto;
         padding: 20px 40px 0;
         background-color: ${Colors.Lightgrey};
         transition: 0.2s linear right;
         
         &::-webkit-scrollbar-track {
            background-color: transparent;
         }

         &::-webkit-scrollbar {
            width: 12px;
         }

         &::-webkit-scrollbar-thumb {
            border: 3px solid ${Colors.Lightgrey};
            border-radius: 7px;
            background-color: ${Colors.Darkgrey};
         }
     
        ${MediaStr.mobileAndTablet} {
            padding-top: 88px;
           
            right: ${isOpen ? '0' : '-480px' };
         }          
         `,
    title: css`
         font-size: 20px;
         color: ${Colors.Grey};
         font-weight: 500;
         
         ${MediaStr.mobileAndTablet} {
            display: none;
         }
        `,
    list: css`
         margin-top: 22px;
         padding-bottom: 20px;
         flex-direction: column;
         `,
    joke: {
        wrap: css`
        padding: 20px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    `,
        content: css`
        margin-bottom: 17px;

        font-size: 14px;
    `,
        quoteIcon: css`
        background-color: ${Colors.Lightgrey};
    `,
        category: css`
        display: none;
    `,
    },
};


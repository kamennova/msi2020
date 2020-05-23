import { css } from '@emotion/core'
import { Colors, MediaStr } from "../../../Style";
import { TransitionTime } from "../style";

export const styles = {
    button:
        (isOpen: boolean) => css`
        position: absolute;
        top: 40px;
        right: 40px;
        display: flex;
        align-items: center;
        background: none;
        outline: none;
        border: 0;
        padding: 4px;
        padding-right: 10px;
        box-shadow: none;
        cursor: pointer;
        z-Index: 200;
        color: ${Colors.Grey};
        font-weight: 500;
        font-size: 20px;
        background-color: ${isOpen? Colors.Lightgrey  : 'transparent'};
        border-radius: 16px;
        
        transition: 0s linear background-color;
        transition-delay: ${TransitionTime}s;

        ${MediaStr.mobile} {
          top: 20px;
          right: 20px;
        }

        ${MediaStr.desktop} {
             display: none;
        }`,
    icon:
        css`
        position: relative;
        width: 28px;
        height: 28px;
        margin: auto 0;
        margin-right: 10px;
        background-color: ${Colors.Darkgrey};
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
        `,
};
